import {http, httpFile} from './http_service';

export function createItem(data) {
    return httpFile().post('user/items', data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}

export function loadData(params) {
    return http().get('user/items', params); //ini diambil  dari Route items laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}

export function deleteItem(id) {
    return http().delete(`user/items/${id}`); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}

export function deleteAllSelected(params) {
    return http().post('user/items/delete', params); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items/delete)...karena sdh di definisikan di store maka tgl ('/items)
}

export function updateItem(id, data) {
    return httpFile().post(`user/items/${id}`, data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}

export function loadMore(page) {
    return http().get(`user/items?page=${page}`);
}