<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                    <!-- ini untuk lihat stok akhir mitra -->
                    <div class="row">
                        <div class="col-md-6">
                        <div>
                            <table class="table">
                                <tr>
                                    <td width="150px">no Reff</td>
                                    <td>: {{order.reff}}</td>
                                </tr>
                                <tr>
                                    <td>Pemesan</td>
                                    <td>: {{order.user_role}} - {{order.user}}</td>
                                </tr>
                                <tr>
                                    <td>Total Rp</td>
                                    <td>: {{order.total | numeral('0,0')}}</td>
                                </tr>
                                <tr>
                                    <td>Status Order</td>
                                    <b-form-select v-model="order.status_id" size="sm" class="mt-3">
                                        <b-form-select-option v-for="status in status_orders" :key="status.id" :value='status.id' >{{ status.name }}</b-form-select-option>
                                    </b-form-select>
                                </tr>
                            </table>
                        </div>
                    </div>
                   <div class="col-md-6">
                        <h6 class="card-title text-dark">Stok Mitra - {{order.user}}</h6>
                        <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Item</th>
                                        <th>Sisa Stok</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, row) in items" :key="row">
                                        <td>{{ row + 1 }}</td>
                                        <td>{{item.bubuk.nama}}</td>
                                        <td>{{item.stok_awal}}</td>
                                    </tr>
                                </tbody>
                                <!-- ============ Edit ========================= -->
                                    
                            </table>
                   </div>
                    </div>
                    <!-- end of stok akhir mitra -->
                
                <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-danger btn-xsm"
                        @click.prevent="submit"
                    >Update Status</button>
                    <button type="submit" class="btn btn-dark btn-xsm"
                        @click="$router.go(-1)"
                    >Kembali</button>
                </div>
            </div>
        </div>
       
       
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name: "DetailStatusOrder",
    created(){
        this.getOrderById(this.$route.params.id)
    },
   
    computed:{
        //MENGAMBIL DATA orderS dan meta DARI STATE orderS
        ...mapState("order", {
            order: state => state.order,
            status_orders: state=>state.status_orders,
        }),

        ...mapState("stokMitra", {
            items: state => state.items,
            bubuks: state => state.bubuks
        }),
    },
    
    // updated(){
    //     this.getItemById(this.order.user_id);
    // },
    methods: {
        //MENGAMBIL FUNGSI DARI VUEX MODULE order
        ...mapActions("order", ["getOrderById", "updateStatusOrder"]),
        ...mapActions("stokMitra", ["getItemById"]),

        submit: function(){
            this.updateStatusOrder(this.$route.params.id).then(() => {
                //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
                this.flashMessage.success({
                    message: "Status Update Succesfully!",
                    time: 5000
                });
            })
        }
    },

    watch :{
        order(newValue, oldValue){
            this.getItemById(this.order.user_id);
        }, deep:true
    },
}
</script>