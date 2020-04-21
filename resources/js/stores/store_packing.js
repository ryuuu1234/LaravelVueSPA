import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    packings : [],
    meta : [],
    details_packing : [],

    page: 1, //UNTUK MENCATAT PAGE PAGINATE YANG SEDANG DIAKSES
    sortBy: 'created_at',//default sorting
    sortByDesc: true,
    per_page:10 //UNTUK MENCATAT PER PAGE NYA
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.packings = payload,
        state.meta = payload
    },
    ASSIGN_PACKING(state, payload) {
        state.details_packing = payload
    },

    SET_PAGE(state, payload) {
        state.page = payload
    },
    //MENGUBAH DATA STATE PER_PAGE
    SET_PER_PAGE(state, payload) {
        state.per_page = payload
    },
     //MENGUBAH DATA STATE sortBy
    SET_SORT_BY(state, payload) {
        state.sortBy = payload
    },
    SET_SORT_BY_DESC(state, payload) {
        state.sortByDesc = payload
    },
};

const getters = {
    jumlah_packing: state => {
        return state.packings.length;
    },
}

const actions = {
    getPacking({commit, state}, payload) {
        //MENGECEK PAYLOAD ADA ATAU TIDAK
        let search = typeof payload != 'undefined' ? payload : ''
        // let per_page = typeof payload != 'undefined' ? payload: ''
        // =========================================================
        // let current_page = search == '' ? state.page : 1;
        let sorting = state.sortByDesc ? 'DESC' : 'ASC';
        let params = {
            params: {
                page: state.page,
                per_page: state.per_page,
                q: search,
                sortby: state.sortBy,
                sortbydesc: sorting
            }
        };
        // ===========================================================
        return new Promise((resolve, reject) => {
            http().get(`/admin/packing-all-with-params`, params)
                .then((response) => {
                    let getData = response.data.data
                    // console.log(getData)
                    // console.dir(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    getPackingAll({commit, state}, payload) {
        // ===========================================================
        return new Promise((resolve, reject) => {
            http().get(`/admin/packing-all`)
                .then((response) => {
                    let getData = response.data.data
                    console.log(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    getPackingByIdUser({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            http().get(`admin/packing-by-id-user/${payload}`)
            .then((response) => {
                let getData = response.data.data
                console.log(getData)
                commit('ASSIGN_PACKING', getData)
                resolve(getData)
            })
        })
    },
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}

