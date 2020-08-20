const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {User} = require('./../models/user');
const { users, populateUsers} = require('./seed/seed');

beforeEach(populateUsers);


describe('POST /users', () => {
	it('Should create a user', (done) => {
		var email = 'example@example.com';
		var password = '123abc';

		request(app)
			.post('/users')
			.send({
				email,
				password
			})
			.expect(200)
			.expect((res) => {
				expect(res.headers['x-auth']).toExist();
				expect(res.body._id).toExist();
				expect(res.body.email).toBe(email);
			})
			.end((err) => {
				if (err) {
					return done(err);
				}
				User.findOne({email}).then((user) => {
					expect(user).toExist();
					expect(user.password).toNotBe(password)
					done();
				});
			});
	});

	it('Should return validation errors if request invalid', (done) => {
		var email = 'test@dvcdd';
		var password = 'ddddd';
		request(app)
			.post('/users')
			.send({email, password})
			.expect(400)
			.end(done);
	});

	it('Should not create user if email is in use', (done) => {
		var email = users[0].email;
		var password = 'Password123!';
		request(app)
			.post('/users')
			.send({email, password})
			.expect(400)
			.end(done);
	});
});

describe('POST /users/login', () => {
	it('Should login user and return auth token', (done) => {
		request(app)
			.post('/users/login')
			.send({
				email: users[1].email,
				password: users[1].password
			})
			.expect(200)
			.expect((res) => {
				expect(res.headers['x-auth']).toExist();
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				User.findById(users[1]._id).then((user) => {
					expect(user.tokens[1]).toInclude({
						access: 'auth',
						token: res.headers['x-auth']
					});
					done();
				}).catch((e) => done(e));
			});
	});

	it('Should reject invalid login', (done) => {
		request(app)
			.post('/users/login')
			.send({
				email: users[1].email,
				password: 'Test'
			})
			.expect(400)
			.expect((res) => {
				expect(res.headers['x-auth']).toNotExist()
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				User.findById(users[1]._id).then((user) => {
					expect(user.tokens.length).toBe(1);
					done();
				}).catch((e) => done(e))
			})
	});
}); 

describe('DELETE /users/me/token', () => {
	it('Should remove auth token on logout', (done) => {
		request(app)
			.delete('/users/me/token')
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				User.findById(users[0]._id).then((usr) => {
					expect(usr.tokens.length).toBe(0);
					done();
				}).catch((e) => done(e));
			})
	});
});	