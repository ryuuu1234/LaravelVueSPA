<template>
<div>
    <div class="progress-order">
        <header>
            <div class="connecting-line"></div>
            <div class="my-step" v-for="(step, index) in formSteps"
            :class="{'active':index === activeStep}"
            :key="'step'+index">
                <i class="fa-3x" :class="step.icon"></i>
            </div>
        </header>
        <hr class="batas-dark">
        <!-- step 1 ================================================================================================== -->
        <section v-if="step == 1">
            <h6><u>Order</u></h6>
            <div class="row">
                <div class="col-md-6">
                    <p>Sisa Stok Mitra</p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th width="50%">Nama Bubuk</th>
                                <th width="30%">Sisa Stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, row) in items" :key="row">
                                <td>{{item.bubuk.nama}}</td>
                                <td>{{item.stok_akhir}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                    <p>Rincian Bubuk yang akan dikirim</p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th width="50%">Nama Bubuk</th>
                                <th class="text-right" width="30%">Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(bubuk, row) in details_bubuk" :key="row">
                                <td>{{bubuk.bubuk.nama}}</td>
                                <td class="text-right">
                                    <input class="text-right" type="number" 
                                        ref="qtyBubuk"
                                        v-model="bubuk.qty" 
                                        @change.prevent="updateDetailsBubuk(bubuk.id, bubuk.qty)">
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr v-if="details_bubuk">
                                <td class="text-right"><strong>JUMLAH TOTAL BUBUK </strong></td>
                                <td class="text-right"><strong>{{total_input_qty_bubuk}}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <!-- <h6>Order</h6> -->
            
            
            <p style="color:red"><i>Pastikan total input (jumlah total bubuk) = jumlah bubuk product</i></p>
            <p style="color:red"><i>total input = {{total_input_qty_bubuk}}, jumlah bubuk product = {{jumlahBubuk}}</i></p>
        </section>
        <!-- step 2 ================================================================================================== -->
        <section v-if="step == 2">
            <h6><u>Packing</u></h6>
            <p>pilih bagian packing</p>
            <select class="form-control" v-model="order.user_packing" @change="savePacking">
                <option value="">Pilih Packing</option>
                <option 
                    :key="packing.id" v-for="packing in packings" 
                    :value="packing.id"
                >{{packing.name}}</option>
            </select>
            <br>
            <div>
                <button class="btn btn-info btn-xsm" @click="updateStatusToPacking">Simpan</button>
            </div>
        </section>
        <!-- step 3 ================================================================================================== -->
        <section v-if="step == 3">
            <h6><u>Supplier</u></h6>
            <p>pilih bagian Supplier</p>
            <select class="form-control" v-model="order.user_supplier" @change="saveSupplier">
                <option value="">Pilih Supplier</option>
                <option 
                    :key="supplier.id" v-for="supplier in suppliers" 
                    :value="supplier.id"
                >{{supplier.name}}</option>
            </select>
            <br>
            <div>
                <button class="btn btn-info btn-xsm" @click="updateStatusToDikirim">Simpan</button>
            </div>
        </section>
        
    </div>
    <hr class="batas-dark"/>
    <div class="text-right">
        <button class="btn btn-xsm btn-danger" 
            v-if="step != 1"
            @click="prevStep"
        > previous</button>
            <!-- :disabled="disable" -->
        <button class="btn btn-xsm btn-info" 
            v-if="step != totalStep"
            @click="nextStep"
        >
        Next
        </button>
        <button class="btn btn-xsm btn-info" 
            v-if="step == totalStep"
            @click="finishStep"
        >
        Finish
        </button>
    </div>
</div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import * as detailOrderServices from "../../services/details_order_service";
  export default {
      data(){
          return {
              formSteps: [
                  {title: "order", icon:"fa fa-folder-open", status_id: 1},
                  {title: "Packing", icon:"fa fa-box-open", status_id: 3},
                  {title: "Pengiriman", icon:"fa fa-truck", status_id: 4},
                  {title: "Selesai", icon:"fa fa-check", status_id: 6},
                  ],
              step: 1,
              activeStep: 0,
              selected: '',
          }
      },
      created(){
        this.getOrderById(this.$route.params.id)
        this.getPackingAll()
        this.getSupplierAll()
        // this.getPackingById(this.selected)
    },

      computed:{
           ...mapState("stokMitra", {
            order: state => state.order,
            items: state => state.items,
            bubuks: state => state.bubuks
        }),
        ...mapState("order", {
            order: state=>state.order,
            orders: state=>state.orders,
            details_bubuk: state=>state.orders.details_bubuk
        }),
        ...mapState("product", {detail_items: state => state.detail_items}),
        ...mapState("packing", {packings: state => state.packings}),
        ...mapState("supplier", {suppliers: state => state.suppliers}),

        totalStep(){
            let hasil = this.formSteps.length;
            return hasil;
        },

        total_input_qty_bubuk() {
            if(this.details_bubuk){

            return this.details_bubuk.reduce(function (sum, val) {
                let qty = val.qty == ''? 0:parseInt(val.qty);
                let total = sum + qty;
                return total
            }, 0)
            } else{
                return 0
            }
        },
        jumlahBubuk(){
            if(this.detail_items.length){
            let bubuk = this.detail_items.filter(e=>{
                if(e.item.nama=='Bubuk'){
                    return true
                }
            })
            console.log(bubuk)
            return bubuk[0].qty
            }else{
                return 0
            }
        },
        // disable(){
        //     if(this.step==1){
        //         if(this.total_input_qty_bubuk!=this.jumlahBubuk){
        //             return true
        //         }else{return false}
        //     }else{
        //         return false
        //     }
        // }
      },

      methods: {
          
        ...mapActions("order", ["getOrderById", "updateStatusOrder"]),
        ...mapActions("packing", ["getPackingAll"]),
        ...mapActions("supplier", ["getSupplierAll"]),

        updateDetailsBubuk: async function(id, val){
            // updated if changed value
            let value = val == ''? 0: val;
            const formData = new FormData();
            formData.append("qty", value);
            formData.append('_method', 'put');
            try {
                const response = await detailOrderServices.updateQty(id, formData)
            } catch (error) {
                console.log(error);
            }

        },

        savePacking: async function(){
            let user_id = this.order.user_packing;
            let order_id = this.$route.params.id;
            const formData = new FormData();
            formData.append("user_id", user_id);
            formData.append("order_id", order_id);
             try {
                const response = await detailOrderServices.updateOrCreatePacking(formData);
            } catch (error) {
                console.log(error);
            }
        },

        saveSupplier: async function(){
            let user_id = this.order.user_supplier;
            let order_id = this.$route.params.id;
            const formData = new FormData();
            formData.append("user_id", user_id);
            formData.append("order_id", order_id);
             try {
                const response = await detailOrderServices.updateOrCreateSupplier(formData);
            } catch (error) {
                console.log(error);
            }
        },

        updateStatusToPacking(){
            this.order.status_id = 3;
            let id = this.$route.params.id;
            this.updateStatusOrder(id).then(() => {
                //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
                this.flashMessage.success({
                    message: "Status sukses Berubah ke Proses Packing...!",
                    time: 5000
                });
            })
        },

         updateStatusToDikirim(){
            this.order.status_id = 4;
            let id = this.$route.params.id;
            this.updateStatusOrder(id).then(() => {
                //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
                this.flashMessage.success({
                    message: "Status sukses Berubah ke dikirim...!",
                    time: 5000
                });
            })
        },
        nextStep(){
            
            if (this.step == 2) {
                if (!this.order.user_packing) {
                    alert('Pilih Bagian Packing Terlebih Dahulu!!!');
                    return false;
                }
            }
            this.step++;
            this.activeStep++;
        },
        prevStep(){
            this.step--;
            this.activeStep--;
        },
        finishStep(){
            alert('finishSetep');
        }
    },
      watch:{
        //   totalStep(){
        //       console.log(this.formSteps);
        //   },
          order(newValue, oldValue){
            // this.getItemById(this.order.user_id);
            // this.getDetailsProduct(this.order.product_id);
            let status = this.order.status_id;
            if (status == 1) {
                this.step = 1
                this.activeStep = 0;
            } else if (status == 3) {
                this.step = 2
                this.activeStep = 1;
            }else if (status == 4) {
                this.step = 3
                this.activeStep = 2;
            }else if (status == 6) {
                this.step = 4
                this.activeStep = 3;
            }
          }, deep:true,

          items:{
            handler:function(newval,oldval) {
                this.items.forEach(p => {
                    let masuk = p.sum_masuk == null? 0: parseInt(p.sum_masuk);
                    let keluar = p.sum_keluar == null? 0 : parseInt(p.sum_keluar);
                    p.stok_berjalan = masuk - keluar;
                    p.stok_akhir = parseInt(p.stok_awal) + parseInt(p.stok_berjalan);
                    p.masuk =0;
                });
            }, deep:true
        },
        // orders:{
        //     handler:function(newval,oldval){
        //         console.log(this.orders);
        //     }
        // }
      },
   
  }
</script>

<style lang="scss" scoped>
.table th, .table td {
    padding: 0.3rem !important;
}
.progress-order {
    margin-bottom: 40px;
    margin-top: 10px;
}

.connecting-line {
    height: 2px;
    background: #ccc;
    position: absolute;
    width: 80%;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    // z-index: 10;
}

header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;

    .my-step {
        display: flex;
        align-items: center;
        padding: 20px;
        background: teal;
        border-radius: 100%;
        z-index: 10;

        &.active {
        background-color: teal;
        color:white;

        ~ .my-step {
          color: #555;
          background-color: #ccc;
        }

        ~ .my-step::before {
          background-color: #ccc;
        }
      } 

    }
}
</style>