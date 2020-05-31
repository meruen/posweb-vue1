import axios from "axios";

const HOST = 'https://edimossilva-task-manager.herokuapp.com';
const LOGIN_URL = HOST + '/auth/login';
const TASKGROUP_URL = HOST + '/task_lists';

export const get_request_config = () => {
    const token = localStorage.getItem("token");

    const request_config = {
        headers: {
            Authorization: `Basic ${token}`
        }
    };

    return request_config;
};

export const do_login_api = (username, password) => {
    const params = {username, password};
    return axios.post(LOGIN_URL, params);
};

export const get_task_groups_api = () => {
    return axios.get(TASKGROUP_URL, get_request_config());
};

export const get_task_group_api = (id) => {
    console.log(TASKGROUP_URL + '/' + id.toString());
    return axios.get(TASKGROUP_URL + '/' + id.toString(), get_request_config());
};

export const post_task_group_api = (name, description, frequence_type) => {
    const params = {
        name: name,
        description: description,
        frequence_type: frequence_type
    }

    let request_config = get_request_config();
    //request_config['body'] = params;
    console.log(request_config);
    console.log(params);

    return axios.post(TASKGROUP_URL, params, request_config);
};
