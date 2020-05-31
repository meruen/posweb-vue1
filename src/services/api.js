import axios from "axios";

const HOST = 'https://edimossilva-task-manager.herokuapp.com';
const LOGIN_URL = HOST + '/auth/login';
const TASKGROUP_URL = HOST + '/task_lists';
const TASKITEM_URL = HOST + '/task_in_lists';

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

export const delete_task_group_api = (id) => {
    return axios.delete(TASKGROUP_URL + '/' + id.toString(), get_request_config());
};

export const update_task_item_api = (taskitem) => {
    const url = TASKITEM_URL + '/' + taskitem.id.toString();
    const params = {
        checked:  taskitem.checked
    }
    return axios.put(url, params, get_request_config())
}

export const delete_task_item_api = (taskitem) => {
    return axios.delete(TASKITEM_URL + '/' + taskitem.id.toString(), get_request_config());
};


export const create_task_item_api = (task, tasklistId) => {
    const taskWithTaskListUrl = `https://edimossilva-task-manager.herokuapp.com/tasks`;
    const params = {
        name: task.name,
        description: task.description
    };
    console.log(task.name);
    console.log(tasklistId);
    axios.post(taskWithTaskListUrl, params, get_request_config()).then(response => {
       const task_id = response.data.data.id;
       const task_in_list_prams = {
           task_id: task_id,
           task_list_id: tasklistId,
           checked: task.checked
       }
       axios.post('https://edimossilva-task-manager.herokuapp.com/task_in_lists', task_in_list_prams, get_request_config()).then(function() {
           location.reload();
       });
    });
}

export const update_item_api = (id, name) => {
    const url = 'https://edimossilva-task-manager.herokuapp.com/tasks/' + id.toString();
    const params = {
        id: id,
        name: name
    }
    return axios.put(url, params, get_request_config())
}