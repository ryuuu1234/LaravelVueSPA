import {http, httpFile} from './http_service';

export function updateQty(id, data) {
    return http().post(`admin/mitra-update-qty-bubuk/${id}`, data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}

export function updateOrCreatePacking(data) {
    return http().post(`admin/packing-update-created`, data);
}

export function updateOrCreateSupplier(data) {
    return http().post(`admin/supplier-update-created`, data);
}