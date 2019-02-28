import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 请求接口工具
import axios from 'axios';
Vue.prototype.$axios = axios;

// 时间格式化工具
import dayjs from 'dayjs'
global.dayjs = dayjs;

// 引入公用js，css
import './assets/css/style.css'
import './assets/js/common.js'
import { api_url, ajax } from './assets/js/ajax.js'

// 按需加载Vant组件
import { Toast, Lazyload } from 'vant'
const plugins = [Toast, Lazyload]
plugins.forEach(v => Vue.use(v))

// socket连接通信
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(VueSocketio, socketio(api_url));
global.ajax = ajax;

// 使用vuex管理信息
import store from '@/store/store.js'

Vue.config.productionTip = false;

global.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
