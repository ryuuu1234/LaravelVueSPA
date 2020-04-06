<template>
    <div>
         <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4 m-0">
                    <div >
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama Item</th>
                                    <th>Stok Awal</th>
                                    <th>Stok berjalan</th>
                                    <th>Stok Akhir</th>
                                    <th>details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, row) in items" :key="row">
                                    <td>{{ row + 1 }}</td>
                                    <td>{{item.bubuk.nama}}</td>
                                    <td>{{item.stok_awal}}</td>
                                    <td>{{item.stok_berjalan}}</td>
                                    <td>{{item.stok_akhir}}</td>
                                    <td>lihat details</td>
                                </tr>
                            </tbody>
                            <!-- ============ Edit ========================= -->
                                
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
export default {
    name: "DetailsItemMitra",

     created(){
        this.getItemById(this.$route.params.id);
        this.getAllBubuk();
    },

    data(){
        return {
            cek: '',
        }
    },
    
    computed: {
        ...mapState("stokMitra", {
            items: state => state.items,
            bubuks: state => state.bubuks
        }),

        cek_data(){
            // let txt = "";
            let jml_bubuk_mitra = this.items.length;
            let jml_bubuk_all = this.bubuks.length;

            if (jml_bubuk_mitra == jml_bubuk_all) {
                return "valid";
            }
             return "invalid";
        },

        // itemsWithSubTotal() {
        //     return this.items.map(item => (
        //         {item, subtotal: this.hitungStokBerjalan(item)}
        //         ))
        // },
    },

    methods: {
        ...mapActions("stokMitra", ["getItemById", "getAllBubuk", "updateDetailBubukMitra"]),

        cekValidData(val) {
            if (val == "valid") {
                this.tombol_update = false;    
            }
            this.tombol_update = true;
        },

        // hitungStokBerjalan: function(item) {
        //     // return ((parseFloat(item.sum_masuk) - parseFloat(item.sum_keluar)));
        //     return parseInt(item.sum_masuk);
        // },
    },

    watch: {
        cek_data(val){
            this.cekValidData(val);
        },
        items:{
            handler:function(newval,oldval) {
                this.items.forEach(p => {
                    let masuk = p.sum_masuk == null? 0: parseInt(p.sum_masuk);
                    let keluar = p.sum_keluar == null? 0 : parseInt(p.sum_keluar);
                    p.stok_berjalan = masuk - keluar;
                    p.stok_akhir = parseInt(p.stok_awal) + parseInt(p.stok_berjalan);
                });
            }, deep:true
        },
    },
    
}
</script>

<style  scoped>
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
</style>

