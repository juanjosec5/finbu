import { createRouter, createWebHashHistory } from 'vue-router';
import { loginState } from './store';

const routes = [
  {path: '/', name: 'home',component: () => import('./pages/home.vue')},
  {path: '/login', name: 'login', component: () => import('./pages/login.vue')},
  {path: '/dashboard', name: 'dashboard', component: () => import('./pages/dashboard.vue')},
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('router');
  if (!loginState.get() && to.name === 'dashboard') {
    next({name: 'login'});
  } else if (loginState.get() && to.name === 'login'){
    next(from);
    console.log('nice try');
  } else {
    next();
  }
});