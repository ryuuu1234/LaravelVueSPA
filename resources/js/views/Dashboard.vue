<template>
    <main>
        <div class="container-fluid mt-3">
            <!-- <ol class="breadcrumb mb-4 mt-4">
                <li class="breadcrumb-item active">{{ $route.meta.title }}</li>
            </ol> -->
            
                <div class="row justify-content-between">
                    <div v-for="(menu, row) in menus" :key="row" class="mb-2" :class="menu.colMd" >
                        <router-link :to="{name: menu.link}">
                            <div class="card card-hover">
                                <div class="box text-center" :class="menu.color_bg">
                                    <h1 class="font-light text-white"><i :class="menu.icon"></i></h1>
                                    <h6 class="text-white">{{menu.title}}</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-md-12 mt-4">
                        <div class="card-nya">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="mb-2">
                                        <h6><i>Penjualan Product Bulan ini</i></h6>
                                    </div>
                                    <line-chart v-if="penjualan_products.length > 0" :data="transaction_data" :options="chartOptions" :labels="labels"/>
                                </div>
                                <div class="col-md-4">
                                    <div class="row justify-content-between">
                                        <div class="col-md-6 col-sm-6 col-6 mb-3">
                                            <div class="card card-hover">
                                                <div class="box text-center bg-dark">
                                                    <h5 class="font-light text-white"><i class="fa fa-user"></i></h5>
                                                    <h6 class="text-white mb-0">{{jumlah_mitra}}</h6>
                                                    <p class="text-white mt-0 mb-0">Jumlah Mitra</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-6">
                                            <div class="card card-hover">
                                                <div class="box text-center bg-dark">
                                                    <h5 class="font-light text-white"><i class="fa fa-user"></i></h5>
                                                    <h6 class="text-white mb-0">{{jumlah_packing}}</h6>
                                                    <p class="text-white mt-0 mb-0">Jumlah Packing</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-6">
                                            <div class="card card-hover">
                                                <div class="box text-center bg-dark">
                                                    <h5 class="font-light text-white"><i class="fa fa-user"></i></h5>
                                                    <h6 class="text-white mb-0">15</h6>
                                                    <p class="text-white mt-0 mb-0">Jumlah User</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-6">
                                            <div class="card card-hover">
                                                <div class="box text-center bg-dark">
                                                    <h5 class="font-light text-white"><i class="fa fa-user"></i></h5>
                                                    <h6 class="text-white mb-0">15</h6>
                                                    <p class="text-white mt-0 mb-0">Jumlah User</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
        </div>
    </main>
</template>

<script>
import menus from '../services/data_menu';
import moment from 'moment';
import _ from 'lodash'
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';
import LineChart from '../components/khusus/LineChart' //IMPORT COMPONENT CHART 
export default {
    name: "Dashboard",
    components: { 'line-chart': LineChart }, //DEFINISIKAN CUSTOM TAG UNTUK COMPONENT YANG DIBUAT SEBELUMNYA
    mounted(){
        this.menus = menus;
        // console.log(this.penjualan_products)
    },
    created(){
        this.getPackingAll();
        this.getMitraAll();
        this.thisMonth();
        this.getLaporanPenjualanProduct();
    },
    data(){
        return {
            menus:[],
            fromTgl : moment().startOf('month')._d,
            toTgl : moment().endOf('month')._d,
            height: 300,
        }
    },
    
    computed:{
        ...mapGetters("mitra", ["jumlah_mitra"]),
        ...mapGetters("packing", ["jumlah_packing"]),
        ...mapGetters("laporan", ["charts_penjualan"]),
        ...mapState("laporan", ["penjualan_products"]),

        tgl_awal:{
                get(){return this.$store.state.laporan.tgl_awal},
                set(val){this.SET_TGL_AWAL(val)}
            },
        tgl_akhir:{
                get(){return this.$store.state.laporan.tgl_akhir},
                set(val){this.SET_TGL_AKHIR(val)}
        },

        labels() {
                //KARENA FORMAT DATANYA BERISI TOTAL DAN DATE, MAKA KITA FILTER HANYA AKAN MENGAMBIL DATENYA SAJA
                return _.map(this.penjualan_products, function(o) {
                    return moment(o.created_at).format('DD MMM')
                });
            },
            //DATA TOTAL TRANSAKSI YANG DITERIMA DARI SERVER
        transaction_data() {
            //KITA FILTER KARENA HANYA AKAN MENGAMBIL TOTAL VALUENYA SAJA
            return _.map(this.penjualan_products, function(o) {
                return o.total
            });
        },
        myStyles() {
            return {
                height: `${this.height}px`,
                position: 'relative'
            }
        }
    },
    methods:{
        ...mapActions("mitra", ["getMitraAll"]),
        ...mapActions("packing", ["getPackingAll"]),
        ...mapActions("laporan", ["getLaporanPenjualanProduct"]),
         ...mapMutations("laporan", ["SET_TGL_AWAL", "SET_TGL_AKHIR"]),

        thisMonth(){
            this.tgl_awal = moment().startOf('month')._d;
            this.tgl_akhir = moment().endOf('month')._d;
        },
        increase () {
            this.height += 10
        }
    },

    // watch:{
    //     tgl_awal(){
    //         return this.
    //     },
    // }
}
</script>

<style lang="scss" scoped>
.card-nya {
    background-color: #fff;
    padding: 20px;
}
a.router-link-exact-active {
    text-decoration: none!important;
}
a {
    text-decoration: none!important;
}
.bg-cyan {
    background-color:#27A9E3;
}

.box {
    padding-top:10px;
    padding-bottom: 10px;
    border-radius: 3px;
    box-shadow: inset 0 0 0 0 #343A40;
     -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
}
.box:hover {
    box-shadow: inset 0 0 0 60px #343A40;
}
</style>
