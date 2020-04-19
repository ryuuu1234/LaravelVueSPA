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
                            <date-picker v-model="tgl_awal" lang="en" type="date" :format="momentFormat" placeholder="Tanggal Awal"></date-picker>
                        </div>
                        <div class="col-md-2">
                            <date-picker v-model="tgl_akhir" lang="en" type="date" :format="momentFormat" placeholder="Tanggal Akhir"></date-picker>
                        </div>
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
                            <h5>LAPORAN KEUANGAN</h5>
                        </div>
                        <table class="table table-bordered">
                                <thead>
                                    <th width="5%">#</th>
                                    <th>Details</th>
                                    <th class="text-right">Subtotal</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>A</b></td>
                                        <td><b>Penjualan</b></td>
                                        <td class="text-right"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td> - Penjualan Product</td>
                                        <td class="text-right">{{total_penjualan_product | numeral(0,0)}}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-right" colspan="2"><b>Total Penerimaan Kas</b></td>
                                        <td class="text-right"><b>{{total_penjualan_product | numeral(0,0)}}</b></td>
                                    </tr>
                                     <tr>
                                        <td><b>B</b></td>
                                        <td><b>Beban Biaya</b></td>
                                        <td class="text-right"></td>
                                    </tr>
                                    <!-- ini looping beban -->
                                    <tr v-for="beban in laporan_bebans" :key="beban.id">
                                        <td><b></b></td>
                                        <td> - {{beban.nama}}</td>
                                        <td class="text-right">{{beban.subtotal == null? 0: beban.subtotal | numeral(0,0)}}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-right" colspan="2"><b>Total Pengeluaran Kas</b></td>
                                        <td class="text-right"><b>{{total_laporan_beban | numeral(0,0)}}</b></td>
                                    </tr>
                                    <tr>
                                        <td class="text-right" colspan="2"><b>Total Penerimaan Kas - Total Pengeluaran Kas</b></td>
                                        <td class="text-right"><b>{{total_penjualan_product - total_laporan_beban | numeral(0,0)}}</b></td>
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
import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
import moment from 'moment'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import {http,httpFile} from '../../services/http_service';
    export default {
        name: "Keuangan",
        components: {
            'date-picker': DatePicker
        },
        created(){
            this.getLaporanPengeluaranBeban();
            this.getLaporanPenjualanProduct();
        },
        data(){
            return {
                selected:'',
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
            }
        },

        computed: {
            ...mapState("laporan", ["laporan_bebans"]),
            ...mapGetters("laporan", ["total_laporan_beban", "total_penjualan_product"]),
            tgl_awal:{
                get(){return this.$store.state.laporan.tgl_awal},
                set(val){this.SET_TGL_AWAL(val)}
            },
            tgl_akhir:{
                get(){return this.$store.state.laporan.tgl_akhir},
                set(val){this.SET_TGL_AKHIR(val)}
            },
        },

         methods: {
         ...mapActions("laporan", ["getLaporanPengeluaranBeban", "getLaporanPenjualanProduct"]),
         ...mapMutations("laporan", ["SET_TGL_AWAL", "SET_TGL_AKHIR"]),

            formatterDate:function(date){
                return moment(date).format('D MMMM, YYYY');
            },
            pilihRange() {

                if (this.selected == 1) { // HARI INI
                    this.tgl_awal =  moment()._d;
                    this.tgl_akhir =  moment()._d;

                } else if(this.selected == 2) { // BULAN INI
                    this.tgl_awal = moment().startOf('month')._d;
                    this.tgl_akhir = moment().endOf('month')._d;
                } else { // TAHUN INI
                    this.tgl_awal = moment().startOf('year')._d;
                    this.tgl_akhir = moment().endOf('year')._d;
                }
            },

            lihatData() {
                if (this.tgl_awal == '' && this.tgl_akhir == '') {
                    alert('pilih Periode Tanggal terlebih Dahulu')
                    return false
                } else {
                    this.getLaporanPengeluaranBeban()
                    this.getLaporanPenjualanProduct();
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