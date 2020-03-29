import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue';
import IndexProduct from './views/products/Index.vue';
import IndexOrder from './views/orders/Index.vue';

import * as auth from './services/auth_service';

import store from "./store.js";

Vue.use(Router);

const routes = [{
        path: '/home',
        component: Home,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: '',
                name: 'dashboard',
                meta: {
                    title: 'Dashboard'
                },
                component: () => import('./views/Dashboard.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                meta: {
                    title: 'Management Categories'
                },
                component: () => import('./views/Categories.vue')
            },
            {
                path: 'data-items',
                name: 'data-items',
                meta: {
                    title: 'Management Data Items'
                },
                component: () => import('./views/ItemsViewPage.vue')
            },
            {
                path: 'register-list',
                name: 'register-list',
                meta: {
                    title: 'Management Register User'
                },
                component: () => import('./views/ListRegister.vue')
            },

            {
                path: 'users-list',
                name: 'users-list',
                meta: {
                    title: 'Management User'
                },
                component: () => import('./views/ListUser.vue')
            },

            {
                path: 'profile-user',
                name: 'profile-user',
                meta: {
                    title: 'Management Profile'
                },
                component: () => import('./views/ProfileUser.vue')
            },

        ],

        // ini yang lama
        // beforeEnter(to, from, next) {
        //     //store.commit('CLEAR_ERRORS') //TAMBAHKAN BARIS INI
        //     if (!auth.isLoggedIn()) {
        //         next('/login');
        //     } else {
        //         next();
        //     }
        // }

    },// akhir dari home
    {
        path: '/products',
        component: IndexProduct,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: '',
                name: 'products.data',
                component: () => import('./views/products/Product.vue'),
                meta: {
                    title: 'Manage Product'
                }
            },
            {
                path: 'add',
                name: 'products.add',
                component: () => import('./views/products/Add.vue'),
                meta: {
                    title: 'Add New Product'
                }
            },
            {
                path: 'edit/:id',
                name: 'products.edit',
                component: () => import('./views/products/Edit.vue'),
                meta: {
                    title: 'Edit Product'
                }
            },
            {
                path: 'order/:id',
                name: 'products.order',
                component: () => import('./views/products/Order.vue'),
                meta: {
                    title: 'Order Product'
                }
            },
            {
                path: 'details/:id',
                name: 'products.details',
                component: () => import('./views/products/DetailsItem.vue'),
                meta: {
                    title: 'Details Item',
                    subtitle: 'Details item Product'
                }
            }
        ],
    },// akhir dari products
    {
        path: '/orders',
        component: IndexOrder,
        meta: {
            requiresAuth: true
        },
        children: [
            {
            path: '',
            name: 'orders.data',
            component: () => import('./views/orders/Order.vue'),
            meta: {
                title: 'Manage Product'
            } 
            },
            {
                path: 'status/:id',
                name: 'orders.status',
                component: () => import('./views/orders/Status.vue'),
                meta: {
                    title: 'Edit Status Order',
                    subtitle: 'With Details Product Order'
                }
            }
        ],
    },// akhir dari orders

    // INI TANPA META AUTH
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        store.commit('CLEAR_ERRORS') //TAMBAHKAN BARIS INI
        if (!auth.isLoggedIn()) {
            next('/login');
        } else {
            next();
        }
    }else {
        next()
    }
})

export default router;
