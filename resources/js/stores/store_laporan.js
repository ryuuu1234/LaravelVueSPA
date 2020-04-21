import { http } from '../services/http_service';
import moment from 'moment';

const state = () => ({
    tgl_awal: '',
    tgl_akhir: '',
    laporan_bebans : [],
    penjualan_products: [],

    //=================================
    users: [],
});

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.laporan_bebans = payload
    },
    ASSIGN_LAP_PRODUCT(state, payload) {
        state.penjualan_products = payload
    },
    SET_TGL_AWAL(state, payload) {
        state.tgl_awal = payload
    },
    SET_TGL_AKHIR(state, payload) {
        state.tgl_akhir = payload
    },
};

const getters = {
    total_laporan_beban: state => {
        let sum = 0;
          state.laporan_bebans.forEach(p => {
                let subtotal = p.subtotal == null? 0 : parseInt(p.subtotal);
                sum += subtotal;
          });
        return sum;
    },
    total_penjualan_product: state => {
        let sum = 0;
          state.penjualan_products.forEach(p => {
                let total = p.total == null? 0 : parseInt(p.total);
                sum += total;
          });
        return sum;
    },
    // untuk charts
    charts_penjualan : state => {
       return state.penjualan_products.map(o => {
        // let newData = {};
        //    newData[moment(o.created_at).format("D MMM")] = o.total;
        //    Object.values(newData);
        //    return Object.keys(newData) + "," + Object.values(newData);
        // return Object.entries(newData);
        // return o.total
        // return o.totalNya = moment(o.created_at).format("D MMM")
        return moment(o.created_at).format("D MMM");
        // return newData;
       });

    },
}


const actions = {
    getLaporanPengeluaranBeban({commit, state}, payload) {
        let fromTgl = state.tgl_awal != '' ? moment(state.tgl_awal).format("YYYY-MM-DD") : '';
        let toTgl = state.tgl_akhir != '' ? moment(state.tgl_akhir).format("YYYY-MM-DD") : '';
        let params = {
            params: {
                tgl_awal: fromTgl,
                tgl_akhir: toTgl
            }
        };
        // ===========================================================
        return new Promise((resolve, reject) => {
            http().get(`/laporan/laporan-beban`, params)
                .then((response) => {
                    let getData = response.data.data
                    // console.log(getData.data)
                    //SIMPAN DATA KE STATE MELALUI MUTATIONS
                    commit('ASSIGN_DATA', getData)
                    resolve(getData)
                })
        })
    },
    getLaporanPenjualanProduct: async function({commit, state}){
        let fromTgl = state.tgl_awal != '' ? moment(state.tgl_awal).format("YYYY-MM-DD") : '';
        let toTgl = state.tgl_akhir != '' ? moment(state.tgl_akhir).format("YYYY-MM-DD") : '';
        let params = {
            params: {
                tgl_awal: fromTgl,
                tgl_akhir: toTgl
            }
        };
        try {
            const response = await http().get(`admin/laporan-penjualan-products`, params) 
            .then((response) => {
                let getData = response.data.data
                // console.log(getData)
                //SIMPAN DATA KE STATE MELALUI MUTATIONS
                commit('ASSIGN_LAP_PRODUCT', getData)
            })
        } catch (error) {
                console.log(''+error)
                
        }
   },

   
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}

