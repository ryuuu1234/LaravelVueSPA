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
                    </div>
                    
                    <!-- INI CONTENTNYA -->
                    <div>
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
                                <tr v-for="(item, row) in detail_items" :key="row">
                                    <td>
                                        <button
                                            class="tombol-di-table red-color"
                                            @click="removeData(item.id)"
                                            v-b-tooltip.hover
                                            title="Hapus Data"
                                        >
                                            <span class="fa fa-trash"></span>
                                        </button>
                                    </td>
                                    <td>{{ item.item.nama }}</td>
                                    <td class="text-right">{{ item.harga_beli | numeral('0,0') }}</td>
                                    <td class="text-right">{{ item.harga | numeral('0,0') }}</td>
                                    <td class="text-right">{{ item.qty }}</td>
                                    <td class="text-right">{{ item.harga * item.qty | numeral('0,0')}}</td>
                                </tr>
                            </tbody>
                            <tfoot>
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
export default {
    name: 'details-item-product',
    components: {
        'item-form': FormItemProduct
    },
    created(){
        this.getDetailsProduct(this.$route.params.id)
        // this.lookConsole();
    },

    data(){
        return{
            title_form: '',
            // item:{},
        }
    },

    computed: {
        ...mapState('product', {
            detail_items: state => state.detail_items,
        }),
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

        saveTotal: async function saveTotal(total) {

            const formData = new FormData();
            formData.append("harga", total);
            formData.append('_method', 'put');

            try {
                const response = await productService.updateHarga(this.$route.params.id, formData);
                console.log(response);
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
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        },

        addNew(){
            this.$refs.modalForm.show();
            this.title_form = "Tambah Data";
            this.CLEAR_FORM_ITEM();
            // this.$router.go(0);//reload
            // console.log(this.detail_items);
        },
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
                this.$refs.modalForm.hide();
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
</style>

