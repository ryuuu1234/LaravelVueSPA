import {
    http,
    httpFile
} from '../services/http_service';

const state = () => ({
    products: [], //UNTUK MENAMPUNG DATA products YANG DIDAPATKAN DARI DATABASE
    detail_items: [],

    //UNTUK MENAMPUNG VALUE DARI FORM INPUTAN NANTINYA
    //STATE INI AKAN DIGUNAKAN PADA FORM ADD product YANG AKAN DIBAHAS KEMUDIAN
    product: {
        name: '',
        stok_awal: '',
        description: ''
    },

    item: {
        item_id: '',
        harga: '',
        harga_beli: '',
        qty: 0,
    },
    page: 1 //UNTUK MENCATAT PAGE PAGINATE YANG SEDANG DIAKSES
})

const mutations = {
    //MEMASUKKAN DATA KE STATE products
    ASSIGN_DATA(state, payload) {
        state.products = payload
    },
//====================modifikasi========
    ASSIGN_DATA_DETAILS(state, payload) {
        payload.forEach(item =>{
            item.edit = false
        })
        state.detail_items = payload
    },
//=========================================
    //MENGUBAH DATA STATE PAGE
    SET_PAGE(state, payload) {
        state.page = payload
    },
    //MENGUBAH DATA STATE product
    ASSIGN_FORM(state, payload) {
        state.product = {
            name: payload.name,
            stok_awal: payload.stok_awal,
            description: payload.description,
        }
    },

     //MENGUBAH DATA STATE product
     ASSIGN_FORM_ITEM(state, payload) {
        state.item = {
            item_id: payload.name,
            harga: String(payload.harga),
            harga_beli: String(payload.harga_beli),
            qty: payload.qty,
        }
    },
    //ME-RESET STATE product MENJADI KOSONG
    CLEAR_FORM(state) {
        state.product = {
            name: '',
            stok_awal: '',
            description: '',
        }
    },
    //ME-RESET STATE product MENJADI KOSONG
    CLEAR_FORM_ITEM(state) {
        state.item = {
            item_id: '',
            harga: '',
            harga_beli: '',
            qty: 0,
        }
    }
}

const actions = {
    //FUNGSI INI UNTUK MELAKUKAN REQUEST DATA product DARI SERVER
    getProducts({
        commit,
        state
    }, payload) {
        //MENGECEK PAYLOAD ADA ATAU TIDAK
        let search = typeof payload != 'undefined' ? payload : ''
        // =========================================================
        // let current_page = this.search == '' ? this.current_page : 1;
        // let sorting = this.sortByDesc ? 'DESC' : 'ASC';
        // let
        let params = {
            params: {
                page: state.page,
                // per_page: this.per_page,
                q: search,
                // sortby: this.sortBy,
                // sortbydesc: sorting
            }
        };
        // ===========================================================
        return new Promise((resolve, reject) => {
            //REQUEST DATA DENGAN ENDPOINT /products
            // http().get(`/user/products?page=${state.page}&q=${search}`)
            http().get(`/user/products`, params)
                .then((response) => {
                    let getData = response.data.data
                    // console.dir(getData)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },

    //FUNGSI UNTUK MENAMBAHKAN DATA BARU
    submitProduct({
        dispatch,
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            //MENGIRIMKAN PERMINTAAN KE SERVER DAN MELAMPIRKAN DATA YANG AKAN DISIMPAN
            //DARI STATE product
            http().post(`/user/products`, state.product)
                .then((response) => {
                    //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
                    //UNTUK MENGAMBIL DATA TERBARU
                    dispatch('getProducts').then(() => {
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

     //FUNGSI UNTUK MENAMBAHKAN DATA BARU
     submitProductDetail({
        // dispatch,
        commit,
        state
    }, payload) {
        return new Promise((resolve, reject) => {
            //MENGIRIMKAN PERMINTAAN KE SERVER DAN MELAMPIRKAN DATA YANG AKAN DISIMPAN
            //DARI STATE product
            http().post(`user/products-add-item/${payload}`, state.item)
                .then((response) => {
                    //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
                    //UNTUK MENGAMBIL DATA TERBARU
                    // dispatch('getDetailsProduct').then(() => {
                        resolve(response.data)
                    // })
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
    //UNTUK MENGAMBIL SINGLE DATA DARI SERVER BERDASARKAN CODE product
    editProduct({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE product DI URL
            http().get(`user/products/${payload}/edit`)
                .then((response) => {
                    //APABIL BERHASIL, DI ASSIGN KE FORM
                    commit('ASSIGN_FORM', response.data.data)
                    resolve(response.data)
                    // console.dir(response.data)
                })
        })
    },

    //UNTUK MENGAMBIL SINGLE DATA DARI SERVER BERDASARKAN CODE product
    getDetailsProduct({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE product DI URL
            http().get(`user/products/${payload}/edit`)
                .then((response) => {
                    let getData = response.data.data[0].detail_items;
                    console.dir(getData);
                    //APABIL BERHASIL, DI ASSIGN KE FORM
                    commit('ASSIGN_DATA_DETAILS', getData)
                    commit('ASSIGN_FORM_ITEM', getData)
                    resolve(response.data)
                    // console.dir(response.data)
                })
        })
    },
    //UNTUK MENGUPDATE DATA BERDASARKAN CODE YANG SEDANG DIEDIT
    updateProduct({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE DIURL
            //DAN MENGIRIMKAN DATA TERBARU YANG TELAH DIEDIT
            //MELALUI STATE product
            http().put(`/user/products/${payload}`, state.product)
                .then((response) => {
                    //FORM DIBERSIHKAN
                    commit('CLEAR_FORM')
                    resolve(response.data)
                })
        })
    },
    //MENGHAPUS DATA 
    removeProduct({
        dispatch
    }, payload) {
        return new Promise((resolve, reject) => {
            //MENGIRIM PERMINTAAN KE SERVER UNTUK MENGHAPUS DATA
            //DENGAN METHOD DELETE DAN ID product DI URL
            http().delete(`/user/products/${payload}`)
                .then((response) => {
                    //APABILA BERHASIL, FETCH DATA TERBARU DARI SERVER
                    dispatch('getProducts').then(() => resolve())
                })
        })
    },

    removeDetailProduct({}, payload) {
        return new Promise((resolve, reject) => {
            //MENGIRIM PERMINTAAN KE SERVER UNTUK MENGHAPUS DATA
            //DENGAN METHOD DELETE DAN ID product DI URL
            http().delete(`/user/products-detail-remove/${payload}`)
                .then((response) => {
                    //APABILA BERHASIL, FETCH DATA TERBARU DARI SERVER
                     resolve(response)
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
