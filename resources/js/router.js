import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue';
import IndexProduct from './views/products/Index.vue';
import IndexOrder from './views/orders/Index.vue';
import IndexBubuk from './views/bubuk/Index.vue';
import IndexMitra from './views/mitra/Index.vue';
import IndexPacking from './views/packing/Index.vue';
import IndexSupplier from './views/supplier/TheIndex.vue';
import IndexLaporanPenjualan from './views/laporan/IndexLaporanPenjualan.vue';
import IndexPercobaan from './views/cobacoba/Index.vue';

import * as auth from './services/auth_service';

import store from "./store.js";

Vue.use(Router);

const routes = [{
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: 'dashboard',
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

    {
        path: '/data-bubuk',
        component: IndexBubuk,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'bubuk.data',
                component: () => import('./views/bubuk/Bubuk.vue'),
                    meta: {
                        title: 'Manage Data Bubuk',
                    },
            },
            
        ],
    },// akhir dari Bubuk

    {
        path: '/data-mitra',
        name: 'mitra-list',
        component: IndexMitra,
        meta: {
            requiresAuth: true
        },
        children: [
            {
            path: '',
            name: 'mitra.data',
            component: () => import('./views/mitra/Mitra.vue'),
                meta: {
                    title: 'Manage Data Mitra',
                },
            },
            {
                path: 'details-item-mitra/:id',
                name: 'item-detail.mitra',
                component: () => import('./views/mitra/details.vue'),
                    meta: {
                        title: 'Stok Item Bubuk',
                        subtitle: 'Dengan detail Stok ',
                    },
            },
        ],
    },// akhir dari Mitra

    {
        path: '/data-packing',
        name: 'packing-list',
        component: IndexPacking,
        meta: {
            requiresAuth: true
        },
        children: [
            {
            path: '',
            name: 'packing.data',
            component: () => import('./views/packing/Packing.vue'),
                meta: {
                    title: 'Manage Data Packing',
                },
            },
            {
                path: 'details-item-packing/:id',
                name: 'item-details.packing',
                component: () => import('./views/packing/Details.vue'),
                    meta: {
                        title: 'Details Packing',
                        subtitle: 'Proses Packing yg belum selesai',
                    },
            },
        ],
    },// akhir dari packing
    {
        path: '/data-supplier',
        name: 'supplier-list',
        component: IndexSupplier,
        meta: {
            requiresAuth: true
        },
        children: [
            {
            path: '',
            name: 'supplier.data',
            component: () => import('./views/supplier/TheSupplier.vue'),
                meta: {
                    title: 'Manage Data Supplier',
                },
            },
            // {
            //     path: 'details-item-supplier/:id',
            //     name: 'item-details.supplier',
            //     component: () => import('./views/supplier/TheDetails.vue'),
            //         meta: {
            //             title: 'Details Packing',
            //             subtitle: 'Proses Pengiriman yg belum selesai',
            //         },
            // },
        ],
    },// akhir dari supplier

    {
        path: '/laporan-penjualan-mitra',
        name: 'laporan-penjualan-mitra',
        component: IndexLaporanPenjualan,
        meta: {
            requiresAuth: true
        },
        children: [
            {
            path: '',
            name: 'laporan-penjualan.mitra',
            component: () => import('./views/laporan/PenjualanMitra.vue'),
                meta: {
                    title: 'Jurnal Penjualan',
                    subtitle: 'Jurnal Penjualan berdasarkan Mitra'
                },
            },
            // {
            //     path: 'details-item-supplier/:id',
            //     name: 'item-details.supplier',
            //     component: () => import('./views/supplier/TheDetails.vue'),
            //         meta: {
            //             title: 'Details Packing',
            //             subtitle: 'Proses Pengiriman yg belum selesai',
            //         },
            // },
        ],
    },// akhir dari supplier

    {
        path: '/coba-coba',
        component: IndexPercobaan,
        meta: {
            requiresAuth: true
        },
        children: [
            {
            path: '',
            name: 'coba-coba.data',
            component: () => import('./views/cobacoba/PercobaanPage.vue'),
                meta: {
                    title: 'Manage Percobaan',
                },
            },
        ],
    },// akhir dari percobaan

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
                next('/dashboard');
            }
        }
    },

    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue'),
    },

    {
        path: '/preloader',
        name: 'preloader',
        component: () => import('./views/Preloader.vue')
    },

    {path:'*', component: () => import('./views/NotFound.vue')}

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
