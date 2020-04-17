import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    reports : [],

    tgl_awal: '',
    tgl_akhir: '',
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.reports = payload
    },
};

const actions = {
    getMitra({commit, state}, payload) {
        //MENGECEK PAYLOAD ADA ATAU TIDAK
        let user_id = typeof payload != 'undefined' ? payload : ''
        let params = {
            params: {
                // user_id: state.user_id,
                tgl_awal: state.tgl_awal,
                q: user_id,
                tgl_akhir: state.tgl_akhir,
            }
        };
        // ===========================================================
        return new Promise((resolve, reject) => {
            //REQUEST DATA DENGAN ENDPOINT /products
            // http().get(`/user/products?page=${state.page}&q=${search}`)
            http().get(`/admin/mitra-all`, params)
                .then((response) => {
                    let getData = response.data.data
                    // console.dir(getData.data)
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

