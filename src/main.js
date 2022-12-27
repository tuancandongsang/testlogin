import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import NotFound from './page/not-found-page/NotFoundPage.vue'
import login from './page/login/login.vue';
import { setupAndGetI18n } from './config/setup-i18n';
import home from './page/home/home.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/', component: home },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
const vueApp = createApp(App);

vueApp.use(router);
vueApp.use(Antd);
setupAndGetI18n(vueApp);

vueApp.mount('#app');
