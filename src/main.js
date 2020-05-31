import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from "axios"

Vue.prototype.$http = axios;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap_darkly.min.css'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')
