import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    items : [],
    meta : [],

    item: {
        nama: '',
    },

    page: 1, //UNTUK MENCATAT PAGE PAGINATE YANG SEDANG DIAKSES
    sortBy: 'created_at',//default sorting
    sortByDesc: true,
    per_page:10 //UNTUK MENCATAT PER PAGE NYA
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.items = payload,
        state.meta = payload
    },
    ASSIGN_FORM(state, payload) {
        state.item = {
            nama: payload.nama,
        }
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
    CLEAR_FORM(state) {
        state.item = {
            nama: '',
        }
    }
};

const actions = {
    getBubuks: async function({commit, state}, payload) {
        let search = typeof payload != 'undefined' ? payload : ''
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

        try {
            await http().get(`/mitra/bubuk-all`, params).then((response) => {
                let getData = response.data.data;
                commit('ASSIGN_DATA', getData);
            });
            
        } catch (error) {
            console.log(error);
        }

    },

    saveData({dispatch,commit,state}) {
        return new Promise((resolve, reject) => {
            //MENGIRIMKAN PERMINTAAN KE SERVER DAN MELAMPIRKAN DATA YANG AKAN DISIMPAN
            //DARI STATE order
            http().post(`/mitra/bubuk-save`, state.item)
                .then((response) => {
                    dispatch('getBubuks').then(() => {
                        resolve(response.data)
                    })
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        commit('SET_ERRORS', error.response.data.errors, {
                            root: true
                        })
                    }
                })
        })
    },

    editData({commit}, payload) {
        return new Promise((resolve, reject) => {
            http().get(`mitra/bubuk-edit/${payload}/edit`)
                .then((response) => {
                    commit('ASSIGN_FORM', response.data.data)
                    resolve(response.data)
                })
        })
    },
    //UNTUK MENGUPDATE DATA BERDASARKAN CODE YANG SEDANG DIEDIT
    updateData({dispatch, state,commit}, payload) {
        return new Promise((resolve, reject) => {
            http().put(`/mitra/bubuk-update/${payload}`, state.item)
                .then((response) => {
                    dispatch('getBubuks').then(() => {
                        commit('CLEAR_FORM')
                        resolve(response.data)
                    })
                    
                })
        })
    },

    deleteData: async function({state, commit, dispatch}, payload) {
        try {
            await http().delete(`/mitra/bubuk-delete/${payload}`).then((response) => {
                dispatch('getBubuks')
            });        
        } catch (error) {
            
        }
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

