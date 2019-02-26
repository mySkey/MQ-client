import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from 'axios';
Vue.prototype.$axios = axios;

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import './assets/css/style.css'
import { api_url, ajax } from './assets/js/ajax.js'
import Alert from './components/Alert'

Vue.use(Alert);
Vue.use(VueSocketio, socketio(api_url));
global.ajax = ajax;

Vue.config.productionTip = false;

global.vue = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
