import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  { path: "/", name: "home", component: () => import('./views/Home.vue') },
  { path: "/conversation", name: "conversation", component: () => import('./views/Conversation.vue') },
  { path: "/service", name: "service", component: () => import('./views/Service.vue') },
]
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
