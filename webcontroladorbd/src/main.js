import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import api from './plugins/axios'
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'




const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.config.globalProperties.$api = api;
app.use(router);
app.mount('#app');
