import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/PageNotFound/NotFoundPage.vue';
import Login from '../page/Login/Login.vue';
import Home from '../page/Home/Home.vue';
import Layout from '../layout/Layout.vue';
import Detail from '../page/Detail/Detail.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home,
        },
        {
          path: '/:id',
          component: Detail,
          props: true,
        },
      ],
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
