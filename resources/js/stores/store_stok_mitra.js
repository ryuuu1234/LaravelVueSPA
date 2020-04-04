import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    items : [],
    bubuks : [],
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.items = payload
    },

    GET_ALL_BUBUK(state, payload) {
        state.bubuks = payload
    },
    
};

const actions = {
    getItemById({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            http().get(`/admin/mitra-items/${payload}`)
                .then((response) => {
                    let getData = response.data.data
                    console.log(getData.length)
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    getAllBubuk({commit, state}) {
        return new Promise((resolve, reject) => {
            http().get(`/admin/mitra-bubuk-all`)
                .then((response) => {
                    let getData = response.data.data
                    console.log(getData.length)
                    commit('GET_ALL_BUBUK', getData)
                    resolve(getData)
                })
        })
    },
    updateDetailBubukMitra({commit, state},payload) {
        return new Promise((resolve, reject) => {
            http().get(`/admin/mitra-update-details/${payload}`)
                .then((response) => {
                    let getData = response.data.data
                    console.log(getData.length)
                    commit('GET_ALL_BUBUK', getData)
                    resolve(getData)
                })
        })
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

