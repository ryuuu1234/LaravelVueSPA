import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    orders: [], //UNTUK MENAMPUNG DATA orders YANG DIDAPATKAN DARI DATABASE
    meta:[],
    status_orders:[],
    //UNTUK MENAMPUNG VALUE DARI FORM INPUTAN NANTINYA
    //STATE INI AKAN DIGUNAKAN PADA FORM ADD order YANG AKAN DIBAHAS KEMUDIAN
    order: {
        reff: '',
        total: '',
        status_id: '',
        user_id: ''
    },
    page: 1, //UNTUK MENCATAT PAGE PAGINATE YANG SEDANG DIAKSES
    sortBy: 'created_at',//default sorting
    sortByDesc: true,
    per_page:5 //UNTUK MENCATAT PER PAGE NYA
})

const mutations = {
    //MEMASUKKAN DATA KE STATE orders
    ASSIGN_DATA(state, payload) {
        state.orders = payload,
        state.meta = payload
    },
     //MEMASUKKAN DATA STATUS KE STATE status_orders
     ASSIGN_STATUS(state, payload) {
        state.status_orders = payload
    },
    //MENGUBAH DATA STATE PAGE
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
    //MENGUBAH DATA STATE order
    ASSIGN_FORM(state, payload) {
        state.order = {
            reff        : payload.reff,
            total       : payload.total,
            status_id   : payload.status_id,
            user_id     : payload.user_id,
            user        : payload.user.name,
            user_role   : payload.user.role
            
        }
    },
    //ME-RESET STATE order MENJADI KOSONG
    CLEAR_FORM(state) {
        state.order = {
            reff: '',
            total: '',
            status_id: '',
            user_id: '',
        }
    }
}

const actions = {
    //FUNGSI INI UNTUK MELAKUKAN REQUEST DATA order DARI SERVER
    getOrders({commit, state}, payload) {
        //MENGECEK PAYLOAD ADA ATAU TIDAK
        let search = typeof payload != 'undefined' ? payload : ''
        // let per_page = typeof payload != 'undefined' ? payload: ''
        // =========================================================
        // let current_page = search == '' ? state.page : 1;
        let sorting = state.sortByDesc ? 'DESC' : 'ASC';
        // let
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
            //REQUEST DATA DENGAN ENDPOINT /products
            // http().get(`/user/products?page=${state.page}&q=${search}`)
            http().get(`/user/orders`, params)
                .then((response) => {
                    let getData = response.data.data
                    // console.dir(getData.data)
                    // console.dir(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    //FUNGSI UNTUK MENAMBAHKAN DATA BARU
    submitOrder({dispatch,commit,state}) {
        return new Promise((resolve, reject) => {
            //MENGIRIMKAN PERMINTAAN KE SERVER DAN MELAMPIRKAN DATA YANG AKAN DISIMPAN
            //DARI STATE order
            http().post(`/user/orders`, state.order)
                .then((response) => {
                    //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
                    //UNTUK MENGAMBIL DATA TERBARU
                    dispatch('getOrders').then(() => {
                        resolve(response.data)
                    })
                })
                .catch((error) => {
                    //APABILA TERJADI ERROR VALIDASI
                    //DIMANA LARAVEL MENGGUNAKAN CODE 422
                    if (error.response.status == 422) {
                        //MAKA LIST ERROR AKAN DIASSIGN KE STATE ERRORS
                        commit('SET_ERRORS', error.response.data.errors, {
                            root: true
                        })
                    }
                })
        })
    },
    //UNTUK MENGAMBIL SINGLE DATA DARI SERVER BERDASARKAN CODE order
    editOrder({commit}, payload) {
        return new Promise((resolve, reject) => {
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE order DI URL
            http().get(`user/orders/${payload}/edit`)
                .then((response) => {
                    //APABIL BERHASIL, DI ASSIGN KE FORM
                    commit('ASSIGN_FORM', response.data.data)
                    resolve(response.data)
                    // console.dir(response.data)
                })
        })
    },

    //UNTUK MENGAMBIL SINGLE DATA DARI SERVER BERDASARKAN CODE order
    getOrderById({commit}, payload) {
        return new Promise((resolve, reject) => {
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE order DI URL
            http().get(`user/orders/${payload}/edit`)
                .then((response) => {
                    let getData = response.data.data
                    let getStatus = response.data.status
                    console.log(getData)
                    //APABIL BERHASIL, DI ASSIGN KE FORM
                    commit('ASSIGN_FORM', getData)
                    commit('ASSIGN_STATUS', getStatus)
                    resolve(response.data)
                    // console.dir(response.data)
                })
        })
    },
    //UNTUK MENGUPDATE DATA BERDASARKAN CODE YANG SEDANG DIEDIT
    updateOrder({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE DIURL
            //DAN MENGIRIMKAN DATA TERBARU YANG TELAH DIEDIT
            //MELALUI STATE order
            http().put(`/user/orders/${payload}`, state.order)
                .then((response) => {
                    //FORM DIBERSIHKAN
                    commit('CLEAR_FORM')
                    resolve(response.data)
                })
        })
    },
    //MENGHAPUS DATA 
    removeOrder({
        dispatch
    }, payload) {
        return new Promise((resolve, reject) => {
            //MENGIRIM PERMINTAAN KE SERVER UNTUK MENGHAPUS DATA
            //DENGAN METHOD DELETE DAN ID order DI URL
            http().delete(`/user/orders/${payload}`)
                .then((response) => {
                    //APABILA BERHASIL, FETCH DATA TERBARU DARI SERVER
                    dispatch('getOrders').then(() => resolve())
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
