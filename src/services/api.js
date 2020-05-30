import axios from "axios";

const HOST = 'https://edimossilva-task-manager.herokuapp.com';
const LOGIN_URL = HOST + '/auth/login';
const TASKGROUP_URL = HOST + '/task_lists';

export const do_login_api = (username, password) => {
    const params = {username, password};
    return axios.post(LOGIN_URL, params);
};

export const get_task_groups_api = () => {
    const token = localStorage.getItem("token");
    const request_config = {
        headers: {
            Authorization: `Basic ${token}`
        }
    };
    return axios.get(TASKGROUP_URL, request_config);
}