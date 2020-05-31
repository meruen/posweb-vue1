import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        taskgroup: {},
        taskitems: []
    },
    mutations: {
        taskgroup(state, taskgroup) {
            state.taskgroup = taskgroup;
            state.taskitems = taskgroup.task_in_lists;
        },
        taskitem(state, taskitem) {
            const state_task_item = state.taskitems.find(e => e.id === taskitem.id);
            const mutable_task_item = { ... state_task_item, checked: taskitem.checked};
            const index = state.taskitems.indexOf(state_task_item);
            Object.assign(state.taskitems[index], mutable_task_item);
        }
    }
});