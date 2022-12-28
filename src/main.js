import { createApp } from 'vue';

import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {router} from './router/index.js'
import { setupAndGetI18n } from './config/setup-i18n';

const vueApp = createApp(App);

vueApp.use(router);
vueApp.use(Antd);
setupAndGetI18n(vueApp);

vueApp.mount('#app');
