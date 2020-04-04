<template>
    <div>
         <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4 m-0">
                    <div >
                        <!-- <div class="mb-2">
                            <b-button
                            v-if="tombol_update"
                            pill
                            variant="outline-secondary"
                            size="sm"
                            class="ml-2"
                            @click="updateData($route.params.id)"
                            >
                                <i class="fa fa-plus"></i> Update Data</b-button
                            >

                            <span class="ml-2">Anda harap meng-update data ini, klik tombol disamping </span>

                        </div> -->
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
                                    <td>{{item.bubuk_id}}</td>
                                    <td>{{item.stok_awal}}</td>
                                    <td>stok berjalan</td>
                                    <td>stok_awal + stok berjalan</td>
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
        }
    },

    methods: {
        ...mapActions("stokMitra", ["getItemById", "getAllBubuk", "updateDetailBubukMitra"]),

        cekValidData(val) {
            if (val == "valid") {
                this.tombol_update = false;    
            }
            this.tombol_update = true;
        }
    },

    watch: {
        cek_data(val){
            this.cekValidData(val);
        }
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

