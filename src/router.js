import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  { path: "/", name: "home", component: () => import('./views/Home.vue') },
  { path: "/login", name: "user_login", component: () => import('./views/user/Login.vue') },
  { path: "/register", name: "user_register", component: () => import('./views/user/Register.vue') },
  { path: "/conversation", name: "conversation", component: () => import('./views/Conversation.vue') },
  { path: "/service", name: "service", component: () => import('./views/Service.vue') },
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