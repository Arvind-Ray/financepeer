import axios from 'axios';
import actionTypes from '../../action-types';
import { baseUrl } from '../../utils';

export default () => ( dispatch ) => { 
    const url = `${baseUrl}/`;
    const body = {};
    axios.post(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_LOGOUT, payload: res.data});
        const logout_data = res.data;
        console.log("logout data", logout_data);
        localStorage.removeItem('login data', JSON.stringify(logout_data));
    })
    .catch(err => console.log("TODO: Handle error case in Login out page"));
};