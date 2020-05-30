import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from "axios"
import { routes } from "./routes"
Vue.prototype.$http = axios;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({routes});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')
