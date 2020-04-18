<template>
    <div>
         <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4 m-0">
                    <div class="row">
                        <div class="col-md-2">
                            <select class="form-control" v-model="selected" @change="pilihRange">
                                <option value="">Pilih Periode</option>
                                <option v-for="(range, index) in rangePickers" :key="index" :value="range.id" >{{range.title}}</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <date-picker v-model="myDateA" lang="en" type="date" :format="momentFormat" placeholder="Tanggal Awal"></date-picker>
                        </div>
                        <div class="col-md-2">
                            <date-picker v-model="myDateB" lang="en" type="date" :format="momentFormat" placeholder="Tanggal Akhir"></date-picker>
                        </div>
                        <!-- <div class="col-md-2">
                            <select class="form-control" v-model="selectedMitra" >
                                <option value="">Seluruh Product</option>
                                <option v-for="product in products_dropdown" :key="product.id" :value="product.id" >{{product.name}}</option>
                            </select>
                        </div> -->
                        <div class="col-md-4">
                            <button type="button" class="btn btn-success btn-xsm" @click="lihatData">
                                <i class="fa fa-eye"></i>
                                Lihat Data
                            </button>
                        </div>
                    </div>
                    <!-- DATA JURNAL -->
                    <div class="mt-4 pageNya">

                        <div class="header-laporan">
                            <h5>LAPORAN PENJUALAN PRODUCTS</h5>
                        </div>
                        <table class="table table-bordered">
                                <thead>
                                    <th>Details</th>
                                    <th>Tanggal</th>
                                    <th class="text-right">Harga</th>
                                </thead>
                                <tbody v-if="dataLaporan.length > 0">
                                    <!-- <template v-for="item in dataLaporan"> -->
                                        <tr v-for="data in dataLaporan" :key="data.id">
                                            <td>
                                                <p class="mb-0"> <b>Refferensi</b>    : <i>{{data.reff}}</i></p>
                                                <p class="mb-0" ><b>Product</b> : <i>{{data.detail_order_one.product.name}}</i></p>
                                            </td>
                                            <td>{{formatterDate(data.created_at)}}</td>
                                            <td class="text-right">{{data.total | numeral(0,0)}}</td>
                                        </tr>
                                    <!-- </template> -->
                                    <!-- <tr>
                                        <td colspan="2" class="text-right"><b>Jumlah Penjualan</b></td>
                                        <td><b>{{total_jumlah}} CUP</b></td>
                                    </tr> -->
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td colspan="3" class="text-center">belum ada data</td>
                                    </tr>
                                </tbody>
                                    
                        </table>
                        
                    </div>
                </div>
                <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-dark btn-xsm indx"
                        @click="$router.go(-1)"
                    >Kembali</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from "vuex";
import moment from 'moment'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import {http,httpFile} from '../../services/http_service';
export default {
    name: "PenjualanProduct",
    components: { DatePicker },
    data(){
        return {
            selected:'',
            // selectedMitra:'',
            rangePickers:[
                {id: 1 , title :"Hari ini"},
                {id: 2 , title :"Bulan ini"},
                {id: 3 , title :"Tahun ini"},
            ],

            momentFormat: {
                stringify: (date) => {
                    return date ? moment(date).format("D MMMM, YYYY") : ''
                },
                parse: (value) => {
                    return value ? moment(value, "D MMMM, YYYY").toDate() : null
                }
            },
            myDateA:null,
            myDateB:null,

            dataLaporan: [],
            detailLaporan:[]
        }
    },

    // created(){
    //     this.getMitraAll()
    // },
    computed: {
        // ...mapState("product", {products_dropdown: state => state.products_dropdown}),

        // cekData(){
        //     if (this.myDateA == null && this.myDateB == null) {
        //         return alert('pilih Periode Tanggal terlebih Dahulu')
        //     } else if (this.selectedMitra == '') {
        //         return alert('pilih Data Mitra terlebih dahulu')
        //     }
        // },

        // total() {
        //     return this.dataLaporan.reduce(function (sum, val) {
        //         let keluar = val.sum_keluar == null? 0:parseInt(val.sum_keluar);
        //         let total = sum + keluar;
        //         return total
        //     }, 0)
        // },
    },

    methods: {
        // ...mapActions("mitra", ["getMitraAll"]),

        formatterDate:function(date){
            return moment(date).format('D MMMM, YYYY');
        },
        pilihRange() {

            if (this.selected == 1) { // HARI INI
                this.myDateA =  moment()._d;
                this.myDateB =  moment()._d;

            } else if(this.selected == 2) { // BULAN INI
                this.myDateA = moment().startOf('month')._d;
                this.myDateB = moment().endOf('month')._d;
            } else { // TAHUN INI
                this.myDateA = moment().startOf('year')._d;
                this.myDateB = moment().endOf('year')._d;
            }
        },

        lihatData() {
            if (this.myDateA == null && this.myDateB == null) {
                alert('pilih Periode Tanggal terlebih Dahulu')
                return false
            } else {
                this.getLaporan()
            }
            
        },

        getLaporan: async function(){
             let params = { params : {
                    // user_id: this.selectedMitra,
                    tgl_awal: moment(this.myDateA).format("YYYY-MM-DD"),
                    tgl_akhir: moment(this.myDateB).format("YYYY-MM-DD"),
                }};
                try {
                    const response = await http().get(`admin/laporan-penjualan-products`, params); 
                    console.log(response);
                    this.dataLaporan = response.data.data;
                } catch (error) {
                        console.log(''+error)
                        this.flashMessage.error({
                        message: "Some error occured, Please Refresh!",
                        time: 5000
                    });
                }
        },
        
    }
}
</script>

<style lang="scss"  scoped>

.pageNya{
    border: 1px solid lightgray;
    padding: 1rem;
    min-height: 20rem;

    .header-laporan {
        text-align: center;
    }
}
.table td {
    padding: 0.3rem !important;
}
.blue-color {
    color: #17A2B8;
}

.red-color {
    color:#DC3545;
}
.green-color {
    color:rgb(29, 221, 71);
}
td > input{
 width: 50px;
 text-align: center;
}

.mx-datepicker {
    width:160px !important;
}
</style>

