import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import api from './plugins/axios'
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'




const app = createApp(App);


const routes = generatedRoutes.map(route => {
  if (route.path.startsWith('/mainPagina')) {
    return {
      ...route,
      meta: { ...route.meta, requiresAuth: true },
    };
  }
  return route;
});



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserAuthenticated = !!localStorage.getItem('user');
  if (to.meta.requiresAuth && !isUserAuthenticated) {
    next({ name: 'loginBd' });
  } else {
    next();
  }
});

app.config.globalProperties.$api = api;
app.use(router);
app.mount('#app');
