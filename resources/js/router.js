import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import * as auth from './services/auth_service';

Vue.use(Router);

const routes = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                meta : {title: 'Dashboard'},
                component: () => import('./views/Dashboard.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                meta : {title: 'Management Categories'},
                component: () => import('./views/Categories.vue')
            },
            {
                path: 'data-items',
                name: 'data-items',
                meta : {title: 'Management Data Items'},
                component: () => import('./views/ItemsViewPage.vue')
            },
            {
                path: 'register-list',
                name: 'register-list',
                meta : {title: 'Management Register User'},
                component: () => import('./views/ListRegister.vue')
            },

            {
                path: 'users-list',
                name: 'users-list',
                meta : {title: 'Management User'},
                component: () => import('./views/ListUser.vue')
            },

            {
                path: 'profile-user',
                name: 'profile-user',
                meta : {title: 'Management Profile'},
                component: () => import('./views/ProfileUser.vue')
            },

            {
                path: 'products',
                name: 'products',
                meta : {title: 'Management Products'},
                component: () => import('./views/ListProduct.vue')
            },

            
           
            
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login');
            } else {
                next();
            }
        }
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register.vue'),
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/home');
            }
        }
    },

    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue'),
    },

    //route ini dihapus
    {
        path: '/percobaan',
        name: 'percobaan',
        component: () => import('./views/Percobaan.vue'),
    },
    {
        path: '/preloader',
        name: 'preloader',
        component: () => import('./views/Preloader.vue')
    },
    
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active',
});

export default router;
