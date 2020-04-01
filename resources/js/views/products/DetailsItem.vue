<template>
    <div>
         <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4 m-0">
                    <div class="mb-1">
                    <button type='button' class="btn btn-info btn-xsm" @click="addNew">
                        <i class="fas fa-plus-circle"></i>
                        Add
                    </button>
<!-- 
                    <button type='button' class="btn btn-info btn-xsm" @click="edit">
                        <i class="fas fa-pencil"></i>
                        edit
                    </button>
                    -->
                    </div>
                    
                    <!-- INI CONTENTNYA -->
                    <!-- ==================tambahan========== -->
                    <!-- <div v-if="!detail_items.length">
                    <daftar-item></daftar-item>
                    </div> -->
                    <!-- ==================================== -->
                    <div v-if="detail_items.length">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama Item</th>
                                    <th>Harga Beli</th>
                                    <th>Harga Jual</th>
                                    <th>Qty</th>
                                    <th class="text-right">Subtotal Jual</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- ============ Edit ========================= -->
                                <input-item v-if="active" @cancel="cancelNew" @submit="submit"/>
                                
                                <tr v-for="(item, row) in detail_items" :key="row">
                                    <td>
                                        <button
                                            class="tombol-di-table red-color"
                                            @click="removeData(item.id)"
                                            v-b-tooltip.hover
                                            title="Hapus Data"
                                        >
                                            <span class="fa fa-trash "></span>
                                        </button>
                                        <button
                                            v-if="!item.edit"
                                            class="tombol-di-table blue-color"
                                            @click="edit(item)"
                                            v-b-tooltip.hover
                                            title="Edit Data"
                                        >
                                            <span class="fa fa-pencil-alt "></span>
                                        </button>                                        
                                        
                                    </td>
                                    <td>{{ item.item.nama }}</td>
                                    <td class="text-right">{{ item.harga_beli | numeral('0,0') }}</td>
                                    <td class="text-right">
                                        <div class="text-right" v-if="!item.edit" >
                                        {{ item.harga | numeral('0,0') }}
                                        </div>
                                        <input
                                            v-else
                                            class="text-right"
                                            type="number"
                                            v-model="item.harga"
                                            @change.prevent="saveEdit(item)"
                                            @keyup.enter="doneEdit(item)"
                                            v-focus 
                                            >
                                    </td>
                                    <td class="text-right">
                                        <div class="text-right" v-if="!item.edit" >
                                            {{ item.qty }}
                                        </div>
                                        <input
                                            v-else
                                            class="text-right"
                                            type="number"
                                            v-model="item.qty"
                                            @change.prevent="saveEdit(item)"
                                            @keyup.enter="doneEdit(item)"
                                            >
                                    </td>
                                    <td class="text-right">
                                        <button
                                            v-if="item.edit"
                                            class="tombol-di-table green-color"
                                            @click="doneEdit(item)"
                                            v-b-tooltip.hover
                                            title="Simpan Data"
                                        >
                                            <span class="fas fa-check fa-2x"></span>
                                        </button>
                                        <span v-if="!item.edit">
                                            {{ item.harga * item.qty | numeral('0,0')}}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr v-if="bottomAdd">
                                    <td colspan="6" class="text-center">
                                    <button
                                        class="tombol-di-table blue-color"
                                        @click="addNew"
                                        v-b-tooltip.hover
                                        title="Tambah data"
                                    >
                                        <span class="fas fa-plus-circle fa-4x"></span>
                                    </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-right"><b>TOTAL HARGA JUAL: </b></td>
                                    <td class="text-right">
                                        <b>{{total | numeral('0,0')}}</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-right"><b>TOTAL HARGA BELI: </b></td>
                                    <td class="text-right">
                                        <b>{{total_beli | numeral('0,0')}}</b>
                                    </td>
                                </tr>
                            </tfoot>
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

        <!-- modal -->
        <b-modal
            ref="modalForm" hide-footer :title="title_form">
            <div class="d-block">
                <item-form></item-form>
                <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-danger btn-xsm" 
                        @click.prevent="submit"
                    >submit</button>
                    <button type="submit" class="btn btn-dark btn-xsm"
                        @click="cancelForm"
                    >Cancel</button>
                </div>
            </div>
        </b-modal>

    </div>
</template>
<script>

import { mapActions, mapState, mapMutations } from "vuex";
import FormItemProduct from './FormItem.vue';
import * as productService from '../../services/product_service.js';
import DaftarItem from './DaftarItem.vue'
import UpdateItem from './updateItem.vue'
import InputItem from './InputItem.vue'
export default {
    name: 'details-item-product',
    components: {
        'item-form': FormItemProduct,
        'daftar-item':DaftarItem,
        'update-item':UpdateItem,
        'input-item':InputItem
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
            el.focus()
            }
        }
    },
    created(){
        this.getDetailsProduct(this.$route.params.id)
        // this.lookConsole();
    },

    data(){
        return{
            title_form: '',
            active:false,
            edited:false
        }
    },
// updated(){
//     console.log('addEEdit')
//     this.detail_items.forEach(e => {
//         e.edit = false
//     })
// },
    computed: {
        ...mapState('product', {
            detail_items: state => state.detail_items,
        }),
        ...mapState('item', {
            items: state => state.items, //MENGAMBIL STATE PRODUCT
        }),
        bottomAdd(){
            if(this.items!=undefined){
                if(this.detail_items.length<this.items.length){
                    return true
                }
            }else{
                return false
            }
        },
        subtotal: function() {
            let subtotal = detail_items.harga * detail_items.qty;
            return subtotal;
            
        },
        total() {
            return this.detail_items.reduce(function (sum, item) {
                let total = sum + item.harga * item.qty;
                return total
            }, 0)
        },
        total_beli() {
            return this.detail_items.reduce(function (sum, item) {
                let total = sum + item.harga_beli * item.qty;
                return total
            }, 0)
        },

        itemsWithSubTotal() {
            return this.detail_items.map(item => ({item, subtotal: "blblbl"
            }))
        },
    },

    methods: {
        ...mapActions('product', ['getDetailsProduct', 'submitProductDetail', 'removeDetailProduct']),
        ...mapMutations('product', ['CLEAR_FORM_ITEM']), //PANGGIL MUTATIONS CLEAR_FORM

        //===========================================================================
        edit(item){
            item.edit=true
            // this.active=!this.active
        },
        saveEdit(data){
            // console.log("done typing" ,data)
            let payload = {
                name: String(data.item_id),
                harga: String(data.harga),
                harga_beli: String(data.harga_beli),
                qty: String(data.qty)
                }
            this.$store.commit('product/ASSIGN_FORM_ITEM', payload)
            this.edited=true
            // console.log("done typing" ,payload)
            // this.active=!this.active
        },
        doneEdit(item){
            item.edit=false
            let id_product = this.$route.params.id;
            if(this.edited){
                this.submitProductDetail(id_product).then(()=>{
                    
                    this.CLEAR_FORM_ITEM();
                })
                this.edited = false
            }
            //pastikan nilai edited adalah false
            this.edited = false
            // console.log('done edit harga', item.id ,item.edit)
        },
        //==================================================

        saveTotal: async function saveTotal(total) {

            const formData = new FormData();
            formData.append("harga", total);
            formData.append('_method', 'put');

            try {
                const response = await productService.updateHarga(this.$route.params.id, formData);
                console.log('Total ',response);
            } catch (error) {
                console.error(error.response);
            }
        },

        saveTotalBeli: async function saveTotalBeli(total_beli) {

            const formData = new FormData();
            formData.append("harga_beli", total_beli);
            formData.append('_method', 'put');

            try {
                const response = await productService.updateHargaBeli(this.$route.params.id, formData);
                console.log('Total Beli',response);
            } catch (error) {
                console.error(error);
            }
        },
        //===============modif================
        addNew(){
            this.active = true
            // this.$refs.modalForm.show();
            // this.title_form = "Tambah Data";
            this.CLEAR_FORM_ITEM();
            // this.$router.go(0);//reload
            // console.log(this.detail_items);
        },
        cancelNew(){            
            this.CLEAR_FORM_ITEM();
            this.active = false
        },
        //===================================
        cancelForm(){
            this.CLEAR_FORM_ITEM();
            this.$refs.modalForm.hide();
        },
        submit() {
            let id_product = this.$route.params.id;
            //KETIKA TOMBOL DITEKAN MAKA FUNGSI INI AKAN DIJALANKAN
            //DIMANA FUNGSI INI TELAH DIBUAT PADA SESI SEBELUMNYA
            this.submitProductDetail(id_product).then(() => {
                //APABILA BERHASIL MAKA AKAN DI-DIRECT KE HALAMAN /products
                // this.$refs.modalForm.hide();
                this.active = false
                this.CLEAR_FORM_ITEM();
                this.getDetailsProduct(id_product);
            })
        },
        removeData(id){
             let id_product = this.$route.params.id;
            this.$swal({
                    title: "Kamu Yakin?",
                    text: "Tindakan ini akan menghapus secara permanent!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Iya, Lanjutkan!"
                }).then(result => {
                    //JIKA DISETUJUI
                    if (result.value) {
                        //MAKA FUNGSI removeproduct AKAN DIJALANKAN
                        this.removeDetailProduct(id).then(() => {
                            //APABILA BERHASIL MAKA AKAN DI-DIRECT KE HALAMAN /products
                            this.getDetailsProduct(id_product);
                        })
                    }
                });
        }    
    },

    watch:{
        total: 'saveTotal',
        total_beli: 'saveTotalBeli'
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

