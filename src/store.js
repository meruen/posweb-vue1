import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        taskroup: {
            name: "aba"
        }
    },
    mutations: {
        taskgroup(state, taskgroup) {
            state.taskgroup = taskgroup;
        }
    }
});