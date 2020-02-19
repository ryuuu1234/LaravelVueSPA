import Vue from 'vue';
import Vuex from 'vuex';

import * as auth from './services/auth_service';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000',
        profile:{}
    },
    mutations: {
        authenticate(state, payload) {
            state.isLoggedIn = auth.isLoggedIn(); // jika loggedIn di state = isLoggedIn di auth_service
            if (state.isLoggedIn) {
                state.profile = payload;
            } else {
                state.profile = {};
            }
        }
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);
        }
    }
})
