<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                    <!-- ini untuk lihat stok akhir mitra -->
                    <div class="row">
                        <div class="col-md-4">
                            <div>
                                <table class="table table-dark">
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
                                    <!-- <tr>
                                        <td>Status Order</td>
                                        <b-form-select v-model="order.status_id" size="sm" class="mt-3">
                                            <b-form-select-option v-for="status in status_orders" :key="status.id" :value='status.id' >{{ status.name }}</b-form-select-option>
                                        </b-form-select>
                                    </tr> -->
                                    <tr>
                                        <td>Product</td>
                                        <td>: {{order.product_name}}</td>
                                    </tr>
                                </table>
                                <h6>Rincian Product</h6>
                                <b-list-group v-for="(item, index) in detail_items" :key="index">
                                    <b-list-group-item class="d-flex align-items-center">
                                        <span class="mr-auto">{{item.item.nama}}</span>
                                        <span style="color:red;">{{item.qty}}</span>
                                    </b-list-group-item>
                                    
                                </b-list-group>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <Progress  />
                        </div>
                    </div>
                    <!-- end of stok akhir mitra -->
                
                <!-- <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-danger btn-xsm"
                        @click.prevent="submit"
                    >Update Status</button>
                    <button type="submit" class="btn btn-dark btn-xsm"
                        @click="$router.go(-1)"
                    >Kembali</button>
                </div> -->
            </div>
        </div>
       
       
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Progress from './Progress';
export default {
    name: "DetailStatusOrder",
    components:{
        Progress
    },
    created(){
        this.getOrderById(this.$route.params.id)
    },
   
    computed:{
        //MENGAMBIL DATA orderS dan meta DARI STATE orderS
        ...mapState("order", {
            order: state => state.order,
            status_orders: state=>state.status_orders,
            orders: state=>state.orders,
        }),

        ...mapState("product", {detail_items: state => state.detail_items})
    },

    data(){
        return {
            keluar: [],
        }
    },

    methods: {
        //MENGAMBIL FUNGSI DARI VUEX MODULE order getDetailsProduct
        ...mapActions("order", ["getOrderById", "updateStatusOrder"]),
        ...mapActions("stokMitra", ["getItemById"]),
        ...mapActions("product", ["getDetailsProduct"]),

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
            this.getDetailsProduct(this.order.product_id);
        }, deep:true,
        
    },
    
}
</script>