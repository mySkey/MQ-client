import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  { path: "/", redirect: '/message'},
  { path: "/home", name: 'home', component: () => import('./views/Home.vue'), children: [
    { path: "/message", name: "message", component: () => import('./views/message/List.vue') },
    { path: "/message/conversation", name: "message_conversation", component: () => import('./views/message/Conversation.vue') },
    { path: "/message/service", name: "message_service", component: () => import('./views/message/Service.vue') },
  ]},
  { path: "/login", name: "user_login", component: () => import('./views/passport/Login.vue') },
  { path: "/register", name: "user_register", component: () => import('./views/passport/Register.vue') },
]
const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

const outPath = ['/login', '/register']
router.beforeEach((to, from, next) => {
  if (outPath.includes(to.path)) {
    next();
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      next();
      // common.message('您的登录权限已经失效，请重新登录', 'warning');
    } else {
      next('/login');
    }
  }
})

export default router;