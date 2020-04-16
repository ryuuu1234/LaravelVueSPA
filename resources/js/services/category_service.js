import {http, httpFile} from './http_service';

export function createCategory(data) {
    return httpFile().post('/user/categories', data); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}

export function loadCategories() {
    return http().get('/user/categories'); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}

export function deleteCategory(id) {
    return http().delete(`/user/categories/${id}`); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}

export function updateCategory(id, data) {
    return httpFile().post(`/user/categories/${id}`, data); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}

export function loadMore(page) {
    return http().get(`/user/categories?page=${page}`);
}
