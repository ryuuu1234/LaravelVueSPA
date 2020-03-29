import Vue from 'vue';
import Vuex from 'vuex';

import * as auth from './services/auth_service';
import product from './stores/product.js';
import item from './stores/store_item.js';
import order from './stores/store_order.js';
import user from './stores/store_user.js';
import notification from './stores/store_notification.js';


Vue.use(Vuex);

export default new Vuex.Store({
    // ini baru masuk
    modules: {
        auth,
        user,
        product,
        item,
        order,
        notification
    },
    // =====================
    state: {
        isLoggedIn: false,
        apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000',
        profile:{},
        errors:[],

        // ini yg baru
        token: localStorage.getItem('Laravel-vue-spa-token'),
    },

    // ini baru juga
    getters: {
        //KITA MEMBUAT SEBUAH GETTERS DENGAN NAMA isAuth
        //DIMANA GETTERS INI AKAN BERNILAI TRUE/FALSE DENGAN KONDISI BERDASARKAN
        //STATE token.
        isAuth: state => {
            return state.token != "null" && state.token != null
        }
    },
    mutations: {
        authenticate(state, payload) {
            state.isLoggedIn = auth.isLoggedIn(); // jika loggedIn di state = isLoggedIn di auth_service
            if (state.isLoggedIn) {
                state.profile = payload;
            } else {
                state.profile = {};
            }
        },
        SET_ERRORS(state, payload) {
            state.errors = payload
        },
        CLEAR_ERRORS(state) {
            state.errors = []
        },

        // ini baru
        //SEBUAH MUTATIONS YANG BERFUNGSI UNTUK MEMANIPULASI VALUE DARI STATE token
        SET_TOKEN(state, payload) {
            state.token = payload
        },
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);
        }
    }
})
