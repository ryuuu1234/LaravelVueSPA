import {http} from '../services/http_service';

const state = () => ({
    bebans : [],
    meta : [],

    beban_dropdowns:[],

    form :{
        id:'',
        nama: ''
    },

    errors: [],

    page: 1, //UNTUK MENCATAT PAGE PAGINATE YANG SEDANG DIAKSES
    sortBy: 'created_at',//default sorting
    sortByDesc: false,
    per_page:10 //UNTUK MENCATAT PER PAGE NYA
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.bebans = payload,
        state.meta = payload
    },
    ASSIGN_DROPDOWN(state, payload) {
        state.beban_dropdowns = payload
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

    ASSIGN_FORM(state, payload) {
        state.form = {
            id: payload.id,
            nama: payload.nama,
        }
    },

    CLEAR_FORM(state) {
        state.form = {
            id: '',
            nama: '',
        }
    }
};

const actions = {
    getBeban: async function ({commit, state}, payload) {
        let search = typeof payload != 'undefined' ? payload : ''
        let sorting = state.sortByDesc ? 'DESC' : 'ASC';
        // =========================================================
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
        try {
            const response = await http().get(`/settings/bebans-with-params`, params)
                .then((response) => {
                    let getData = response.data.data;
                    // console.log(getData);
                    commit('ASSIGN_DATA', getData);
                    if (state.page > 1 && getData.data.length == 0) {
                        state.page--;
                    }
                });
        } catch (error) {
            console.log(''+error)
                this.flashMessage.error({
                message: "Some error occured, Please Refresh!",
                time: 5000 });
        }
    },

    saveData({dispatch,commit,state}) {
        return new Promise((resolve, reject) => {
            http().post(`/settings/bebans`, state.form)
                .then((response) => {
                    dispatch('getBeban').then(() => {
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

    editData: async function({commit}, payload) {
        
            const response = await http().get(`/settings/bebans/${payload}/edit`)
            .then((response) => {
                let getData = response.data[0];
                console.log(getData)
                commit('ASSIGN_FORM', getData);
            });
        
    },

    updateData: function({dispatch,commit,state}, payload) {
        return new Promise((resolve, reject) => {
            http().put(`/settings/bebans/${payload}`, state.form)
                .then((response) => {
                    dispatch('getBeban').then(() => {
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

    removeData: async function({dispatch,state}, payload) {
        try {
            const response = await http().delete(`/settings/bebans/${payload}`)
            .then((response) => {
                dispatch('getBeban')
            });
        } catch (error) {
            this.flashMessage.error({
                message: "Some error occured, Please Refresh!",
                time: 5000 });
        }
    },

    getBebanAll({commit, state}, payload) {
        // ===========================================================
        return new Promise((resolve, reject) => {
            http().get(`/settings/bebans`)
                .then((response) => {
                    let getData = response.data.data
                    commit('ASSIGN_DROPDOWN', getData)
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

