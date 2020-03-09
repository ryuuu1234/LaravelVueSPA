import Vue from 'vue';
import Vuex from 'vuex';

import * as auth from './services/auth_service';
import product from './stores/product.js';


Vue.use(Vuex);

export default new Vuex.Store({
    // ini baru masuk
    modules: {
        auth,
        product
    },
    // =====================
    state: {
        isLoggedIn: false,
        apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000',
        profile:{},
        errors:[],
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
        }
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);
        }
    }
})
