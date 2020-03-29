import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    notifications: [], //MENAMPUNG DATA NOTIFIKASI
    reg_notif:[],
    notif_orders:[]
})

const mutations = {
    //ASSIGN DATA NOTIFIKASI KE DALAM STATE NOTIFICATIONS
    ASSIGN_DATA(state, payload) {
        state.notifications = payload
    },
    ASSIGN_REG_NOTIF(state, payload) {
        state.reg_notif = payload
    },
    ASSIGN_ORDER_NOTIF(state, payload) {
        state.notif_orders = payload
    }
}

const actions = {
    // getNotifications({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         //REQUEST KE SERVER UNTUK MENGAMBIL NOTIFIKASI
    //         http().get(`user/notification`)
    //         .then((response) => {
    //             //DATA YANG DITERIMA DI COMMIT KE MUTATIONS ASSING_DATA
    //             commit('ASSIGN_DATA', response.data.data)
    //             resolve(response.data)
    //         })
    //     })
    // },
    // readNotification({ dispatch }, payload) {
    //     return new Promise((resolve, reject) => {
    //         //UNTUK MENGUPDATE DATA NOTIFIKASI BAHWA NOTIF TERSEBUT SUDAH DIBACA
    //         http().post(`user/notification`, payload)
    //         .then((response) => {
    //             //AMBIL DATA NOTIFIKASI TERBARU
    //             dispatch('getNotifications').then(() => resolve(response.data))
    //         })
    //     })   
    // },

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