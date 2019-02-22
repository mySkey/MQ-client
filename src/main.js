import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import './assets/js/ajax.js'

Vue.use(VueSocketio, socketio('http://127.0.0.1:8000/'));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
