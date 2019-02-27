import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from 'axios';
Vue.prototype.$axios = axios;

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import './assets/css/style.css'

import './assets/js/common.js'
import { api_url, ajax } from './assets/js/ajax.js'

// 按需加载Vant组件
import { Toast, Lazyload } from 'vant'
const plugins = [Toast, Lazyload]
plugins.forEach(v => Vue.use(v))


Vue.use(VueSocketio, socketio(api_url));
global.ajax = ajax;

Vue.config.productionTip = false;

global.vue = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
