import {http, httpFile} from './http_service';

export function createItem(data) {
    return httpFile().post('user/products', data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}

export function loadData(params) {
    return http().get('user/products', params); //ini diambil  dari Route products laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}

export function deleteItem(id) {
    return http().delete(`user/products/${id}`); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}

export function deleteAllSelected(params) {
    return http().post('user/products/delete', params); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products/delete)...karena sdh di definisikan di store maka tgl ('/products)
}

export function updateItem(id, data) {
    return httpFile().post(`user/products/${id}`, data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}

export function loadMore(page) {
    return http().get(`user/products?page=${page}`); //
}

// ini baru
export function getProductById(id) {
    return http().get(`user/products/${id}/edit`)
}

export function addDetailItem(id, data) {
    return httpFile().post(`user/products-add-item/${id}`, data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}

export function updateHarga(id, data) {
    return http().post(`user/products-update-harga/${id}`, data); 
}

export function updateHargaBeli(id, data) {
    return http().post(`user/products-update-harga-beli/${id}`, data); 
}