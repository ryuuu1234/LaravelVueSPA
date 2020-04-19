import {http} from '../services/http_service';
import moment from 'moment';

const state = () => ({
    pengeluaran_kas: [],
    form:{
        id:'',
        beban_id:'',
        jumlah:'',
        keterangan:''
    },
    disable:false,
})

const mutations = {
    ASSIGN_DATA(state, payload){
        state.pengeluaran_kas = payload
    },
    ASSIGN_FORM(state,payload) {
        state.form = {
            id: payload.id,
            beban_id: payload.beban_id,
            jumlah: String(payload.jumlah),
            keterangan: payload.keterangan,
        }
    },
    CLEAR_FORM(state) {
        state.form = {
            id:'',
            beban_id:'',
            jumlah:'',
            keterangan:'',
        }
    }
}

const getters = {
    total: state => {
        let sum = 0;
          state.pengeluaran_kas.forEach(p => {
            sum += p.jumlah;
          });
        return sum;
    },


}

const actions = {
    getPengeluaranToday: async function ({commit, state}, payload) {
        let params = {
            params: {
                today: moment().format("YYYY-MM-DD")
            }
        };
        // ===========================================================
        try {
            const response = await http().get(`/transaksi/pengeluaran-kas-with-params`, params)
                .then((response) => {
                    let getData = response.data.data;
                    console.log(getData);
                    commit('ASSIGN_DATA', getData);
                });
        } catch (error) {
            console.log(''+error)
                this.flashMessage.error({
                message: "Some error occured, Please Refresh!",
                time: 5000 });
        }
    },
    saveData({dispatch,commit,state}) {
        state.disable = true;
        return new Promise((resolve, reject) => {
            http().post(`/transaksi/pengeluaran-kas-input`, state.form)
                .then((response) => {
                    // console.log(response)
                    state.disable = false;
                    commit('CLEAR_FORM');
                    dispatch('getPengeluaranToday').then(() => {
                        resolve(response.data)
                    })
                })
                .catch((error) => {
                    if (error.response.status == 422) {
                        state.disable = false;
                        commit('SET_ERRORS', error.response.data.errors, {
                            root: true,
                        })
                    }
                })
        })
    },

    editData: async function({commit}, payload) {
        
        const response = await http().get(`/transaksi/pengeluaran-kas-edit/${payload}/edit`)
        .then((response) => {
            let getData = response.data[0];
            console.log(getData)
            commit('ASSIGN_FORM', getData);
        });
    
    },

    updateData: function({dispatch,commit,state}, payload) {
        state.disable = true;
        return new Promise((resolve, reject) => {
            http().put(`/transaksi/pengeluaran-kas-update/${payload}`, state.form)
                .then((response) => {
                    state.disable = false;
                    commit('CLEAR_FORM');
                    dispatch('getPengeluaranToday').then(() => {
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
            const response = await http().delete(`/transaksi/pengeluaran-kas-delete/${payload}`)
            .then((response) => {
                dispatch('getPengeluaranToday')
            });
        } catch (error) {
            this.flashMessage.error({
                message: "Some error occured, Please Refresh!",
                time: 5000 });
        }
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}