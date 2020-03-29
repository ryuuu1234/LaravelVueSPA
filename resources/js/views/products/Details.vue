<template>
    <div>
        
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4">
                    
                    
                    <!-- INI CONTENTNYA -->
                    
                    <div>
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cari Item</th>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th class="text-right">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product_item, index) in product_items" :key="index">
                                    <td>
                                        <input type="hidden" v-model="product_item.item_id">
                                        <button
                                            class="btn btn-danger btn-sm indx"
                                            v-b-tooltip.hover
                                            title="Hapus Data"
                                            @click="deleteRow(index, product_item)"
                                            >
                                            <span class="fa fa-trash"></span>
                                        </button>
                                    </td>
                                    <td>
                                        
                                        <Autocomplete :items="items"
                                                filterby="nama"
                                                @selected="selectedItem"
                                                @change="onChange(product_item)"
                                        />
                                            
                                    </td>
                                    <td>
                                        <input readonly type="text" class="form-control indx" 
                                            v-model="product_item.nama" 
                                        />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control indx" 
                                            v-model="product_item.harga" 
                                            @change="calculateLineTotal(product_item)"
                                        />
                                    </td>
                                    <td>
                                        <input type="number" class="form-control indx" v-model="product_item.qty">
                                    </td>
                                    <td class="text-right">
                                        <input readonly type="text" class="form-control text-right" v-model="product_item.subtotal">
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5">xxxx</td>
                                    <td class="text-right">
                                        <input readonly type="text" class="form-control text-right" v-model="total_product">
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <hr />
                        <button type='button' class="btn btn-info indx" @click="addNewRow">
                            <i class="fas fa-plus-circle"></i>
                            Add
                        </button>

                    </div>
                    <!-- <tr v-for="(invoice_product, k) in invoice_products" :key="k">
                        <td scope="row" class="trashIconContainer">
                            <i class="far fa-trash-alt" @click="deleteRow(k, invoice_product)"></i>
                        </td>
                        <td>
                            <input class="form-control" type="text" v-model="invoice_product.product_no" />
                        </td>
                        <td>
                            <input class="form-control" type="text" v-model="invoice_product.product_name" />
                        </td>
                        <td>
                            <input class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.product_price" @change="calculateLineTotal(invoice_product)"
                            />
                        </td>
                        <td>
                            <input class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.product_qty" @change="calculateLineTotal(invoice_product)"
                            />
                        </td>
                        <td>
                            <input readonly class="form-control text-right" type="number" min="0" step=".01" v-model="invoice_product.line_total" />
                        </td>
                    </tr>
                    <hr />
                    <button type='button' class="btn btn-info" @click="addNewRow">
                        <i class="fas fa-plus-circle"></i>
                        Add
                    </button> -->

                <!-- Akhir Content -->
                </div>
                <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-danger btn-xsm indx"
                        @click.prevent="saveData"
                    >Save Data</button>
                    <button type="submit" class="btn btn-dark btn-xsm indx"
                        @click="$router.go(-1)"
                    >Kembali</button>
                </div>
            </div>
        </div>
       
       
    </div>
</template>
<script>
// ini percobaan component
// import Autocomplete from '../../components/khusus/Autocomplete';
import Autocomplete from '../../components/khusus/AutocompleteTwo';
import customers from '../../services/lists.js';
import * as itemService from "../../services/items_service";
import * as productService from "../../services/product_service";
export default {
    components: {
        Autocomplete
    },
     created() {
        //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
        this.loadItemsData();
        this.getDetailsById(this.$route.params.id)
        // this.handleLoading(true)
    },
    // mounted(){
    //     this.items = customers;
    // },
    data(){
        return {
            // invoice_subtotal: 0,
            // invoice_total: 0,
            // invoice_tax: 5,
            // invoice_products: [{
            //     product_no: '',
            //     product_name: '',
            //     product_price: '',
            //     product_qty: '',
            //     line_total: 0
            // }],
            // items:[],
            // filterby: '',
            items: [],
            product_items: [{
                item_id:'',
                nama:'',
                harga:0,
                qty:1,
                subtotal: 0,
                editing: false
            }],
            total_product:0,
            product_item:{},
        } 
    },

    methods: {

        selectedItem(item) {
            // console.log(`Item Selected:\nid: ${item.id}\nname: ${item.name}`);
            console.log(item);
            this.product_items.harga = item.harga_beli;
            this.product_items.item_id = item.id;
            this.product_items.nama = item.nama;
            // console.log(this.harga);
            // this.product_item.harga = harga;
        },
        onChange(row) {
            // do something with the current value
            // console.log(row.harga)
            row.item_id = this.product_items.item_id
            row.harga = this.product_items.harga;
            // merubah subtotal juga
            let subtotal = this.product_items.harga * row.qty;
            row.subtotal = subtotal;
            row.nama = this.product_items.nama;
            // if (row.editing == false) {
            //     this.addNewData(row);
            // }
            // console.log(row.qty)
        },

        addNewData: async function(row){
            const formData = new FormData();
            formData.append("item_id", row.item_id);
            formData.append("harga", row.harga);
            formData.append("qty", row.qty);

             try {
                   const response = await productService.addDetailItem(this.$route.params.id, formData) 
                    
                //    this.flashMessage.success({
                //         message: "item stored successfully!",
                //         time: 5000
                //     });
                } catch (error) {
                    switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;

                    default:
                        this.flashMessage.error({
                            message: "Some error occured, Please Try Again!",
                            time: 5000
                        });
                        break;
                    }
                }
        },

        getDetailsById: async function(id){
             try {
                const response = await productService.getProductById(id); 
                let getData = response.data.data[0].detail_items
                // console.log(getData)
                if (getData.length !== 0) {
                     this.product_items = getData //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                }
               
                // console.log(this.units)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
            } catch (error) {
                    console.log(''+error)
                    this.flashMessage.error({
                    message: "Some error occured, Please Refresh!",
                    time: 5000
                });
            }
        },
        //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
        loadItemsData: async function() {
            // this.handleLoading(true);
           
            try {
                const response = await itemService.getData(); 
                let getData = response.data.data
                // console.log(getData)
                this.items = getData //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                // console.log(this.units)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
            } catch (error) {
                    console.log(''+error)
                    this.flashMessage.error({
                    message: "Some error occured, Please Refresh!",
                    time: 5000
                });
                this.showLoading = false;
            }
        },
        saveData() {
            // console.log(JSON.stringify(this.product_items));
        },
        // calculateTotal() {
        //     var subtotal, total;
        //     subtotal = this.invoice_products.reduce(function (sum, product) {
        //         var lineTotal = parseFloat(product.line_total);
        //         if (!isNaN(lineTotal)) {
        //             return sum + lineTotal;
        //         }
        //     }, 0);

        //     this.invoice_subtotal = subtotal.toFixed(2);

        //     total = (subtotal * (this.invoice_tax / 100)) + subtotal;
        //     total = parseFloat(total);
        //     if (!isNaN(total)) {
        //         this.invoice_total = total.toFixed(2);
        //     } else {
        //         this.invoice_total = '0.00'
        //     }
        // },
        calculateLineTotal(product_item) {
            var total = parseInt(product_item.harga) * parseInt(product_item.qty);
            if (!isNaN(total)) {
                product_item.subtotal = total;
            }
            // this.calculateTotal();
        },
        deleteRow(index, product_item) {
            var idx = this.product_items.indexOf(product_item);
            console.log(idx, index);
            if (idx > -1) {
                this.product_items.splice(idx, 1);
            }
            // this.calculateTotal();
        },
        addNewRow() {
            this.product_items.push({
                harga:0,
                qty:1,
                subtotal: 0,
            });
        }
    },
   
}
</script>
<style scoped>
.indx {
        z-index: 10;
        position: relative;
    }
</style>

