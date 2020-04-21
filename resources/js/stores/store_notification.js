import {
    http,
    httpFile
} from '../services/http_service';
import store from '../store'
const state = () => ({
    notifications: [], //MENAMPUNG DATA NOTIFIKASI
    reg_notif:[],
    notif_orders:[]
})

const mutations = {
    //ASSIGN DATA NOTIFIKASI KE DALAM STATE NOTIFICATIONS
    ASSIGN_DATA(state, payload) {        
        state.notifications.push(payload)
    },
    delData(state){
        state.notifications=[]
    },
    ASSIGN_REG_NOTIF(state, payload) {
        state.reg_notif = payload
    },
    ASSIGN_ORDER_NOTIF(state, payload) {
        state.notif_orders = payload
    }
}

const actions = {
    getNotifications({ commit }) {
        // hapus state yang ada
        commit('delData')
        return new Promise((resolve, reject) => {
            //REQUEST KE SERVER UNTUK MENGAMBIL NOTIFIKASI
            http().get(`user/notification`)
            .then((response) => {
                //DATA YANG DITERIMA DI COMMIT KE MUTATIONS ASSING_DATA
                let notif = response.data.data
                console.log('res', response.data, "notif", notif)
                notif.forEach(data=>{
                    commit('ASSIGN_DATA', data)
                })
                resolve(response.data)
            })
        })
    },
    readNotification({ commit }, payload) {
        commit('delData')
        let params = new FormData
        params.append('id', payload)
        return new Promise((resolve, reject) => {
            //UNTUK MENGUPDATE DATA NOTIFIKASI BAHWA NOTIF TERSEBUT SUDAH DIBACA
            http().post(`user/notification`, params)
            .then((response) => {
                //masukkan data yang baru
                let notif = response.data.data
                console.log('res', response.data, "notif", notif)
                notif.forEach(data=>{
                    commit('ASSIGN_DATA', data)
                })
                //AMBIL DATA NOTIFIKASI TERBARU
                // dispatch('getNotifications').then(() => resolve(response.data))
            })
        })   
    },

    getRegNotif({ commit }) {
        return new Promise((resolve, reject) => {
            //REQUEST KE SERVER UNTUK MENGAMBIL NOTIFIKASI
            http().get(`user/notif-register`)
            .then((response) => {
                let getNotif = response.data.data;
                //DATA YANG DITERIMA DI COMMIT KE MUTATIONS ASSING_DATA
                commit('ASSIGN_REG_NOTIF', response.data.data)
                resolve(response.data)
            })
        })
    },

    getOrderNotif({ commit }) {
        return new Promise((resolve, reject) => {
            //REQUEST KE SERVER UNTUK MENGAMBIL NOTIFIKASI
            http().get(`user/notif-order`)
            .then((response) => {
                let getNotif = response.data.data;
                // console.log(getNotif);
                //DATA YANG DITERIMA DI COMMIT KE MUTATIONS ASSING_DATA
                commit('ASSIGN_ORDER_NOTIF', response.data.data)
                resolve(response.data)
            })
        })
    },
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}