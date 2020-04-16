import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    suppliers : [],
    meta : [],

    page: 1, //UNTUK MENCATAT PAGE PAGINATE YANG SEDANG DIAKSES
    sortBy: 'created_at',//default sorting
    sortByDesc: true,
    per_page:10 //UNTUK MENCATAT PER PAGE NYA
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.suppliers = payload,
        state.meta = payload
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

const actions = {
    getSupplier({commit, state}, payload) {
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
            http().get(`/admin/supplier-all-with-params`, params)
                .then((response) => {
                    let getData = response.data.data
                    // console.dir(getData.data)
                    console.log(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    getSupplierAll({commit, state}, payload) {
        // ===========================================================
        return new Promise((resolve, reject) => {
            http().get(`/admin/supplier-all`)
                .then((response) => {
                    let getData = response.data.data
                    // console.log(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

