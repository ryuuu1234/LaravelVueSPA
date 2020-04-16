import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    items: [], //UNTUK MENAMPUNG DATA products YANG DIDAPATKAN DARI DATABASE

    item: {
        harga: '',
    }
})

const mutations = {
    //MEMASUKKAN DATA KE STATE products
    ASSIGN_DATA(state, payload) {
        state.items = payload
    },

    ASSIGN_FORM(state, payload) {
        state.item = {
            harga: String(payload.harga_beli),
        }
    },
}

const actions = {
    //FUNGSI INI UNTUK MELAKUKAN REQUEST DATA product DARI SERVER
    getItems({ commit }) {
        // ===========================================================
        return new Promise((resolve, reject) => {
            //REQUEST DATA DENGAN ENDPOINT /products
            // http().get(`/user/products?page=${state.page}&q=${search}`)
            http().get(`/user/items-data`)
                .then((response) => {
                    let getData = response.data.data
                    // console.log(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    getItemById({commit}, payload) {
        return new Promise((resolve, reject) => {
            //REQUEST DATA DENGAN ENDPOINT /products
            // http().get(`/user/products?page=${state.page}&q=${search}`)
            http().get(`/user/items/${payload}/edit`)
                .then((response) => {
                    let getData = response.data
                    console.log(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_FORM', getData)
                    resolve(getData)
                })
        })  
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
