import axios from 'axios';
import actionTypes from '../../action-types';
import { baseUrl } from '../../utils';

export default () => ( dispatch ) => { 
    const url = `${baseUrl}/`;
    const body = {};
    axios.post(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_LOGIN, payload: res.data});
        const login_data = res.data;
        console.log("hello data", login_data);
        localStorage.setItem('permission data', JSON.stringify(login_data));
    })
    .catch(err => console.log("TODO: Handle error case in Login page"));
};