import axios from "axios";

const HOST = 'https://edimossilva-task-manager.herokuapp.com';
const LOGIN_URL = HOST + '/auth/login';

export const do_login_api = (username, password) => {
    const params = {username, password};
    return axios.post(LOGIN_URL, params);
};