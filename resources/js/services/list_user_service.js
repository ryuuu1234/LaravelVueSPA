import {http, httpFile} from './http_service';

export function loadData(params) {
    return http().get('user/list-user', params); //ini diambil  dari Route items laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}

export function updateStatus(id, data) {
    return httpFile().post(`user/update-status-user/${id}`, data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}
