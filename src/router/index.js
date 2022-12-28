import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/not-found-page/NotFoundPage.vue';
import login from '../page/login/login.vue';
import home from '../page/home/home.vue';
import layout from '../layout/layout.vue'
import detail from '../page/detail/detail.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', component: home },
        { path: '/login', component: login },
        {
            path: '/', redirect: "/home",
            component: layout,
            children: [{
                path: '/home',
                component: home
            },
            {
                path: '/:id',
                component: detail
            }
            ]
        },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});