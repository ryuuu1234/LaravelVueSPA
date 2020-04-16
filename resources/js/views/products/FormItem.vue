<template>
    <div>
        <!-- <div class="form-group" :class="{ 'has-error': errors.name }">
            <label for="">Nama Product</label>
            <input type="text" class="form-control" v-model="product.name" :readonly="$route.name == 'products.edit'">
            <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
        </div> -->
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group" :class="{ 'has-error': errors.item_id }">
                        <label for="">Nama Item</label>
                        <!-- <input type="text" class="form-control" v-model="item.item_id"> -->
                        <select 
                            class="form-control"
                            v-model="item.item_id"
                            @change="onChange(item.item_id)"
                            >
                            <option value="">Pilih Item</option>
                            <option v-for="row in items" :key="row.id" 
                                :value="row.id"
                                >{{ row.nama }}
                            </option>
                        </select>
                        <p class="text-danger" v-if="errors.item_id">{{ errors.item_id[0] }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group" :class="{ 'has-error': errors.harga_beli }">
                        <label for="">Harga Beli</label>
                        <input-number class="form-control" v-model="item.harga_beli" readonly="readonly" ></input-number>
                        <p class="text-danger" v-if="errors.harga_beli">{{ errors.harga_beli[0] }}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group" :class="{ 'has-error': errors.harga }">
                        <label for="">Harga Jual</label>
                        <input-number class="form-control" v-model="item.harga" :disabled="disabled"></input-number>
                        <p class="text-danger" v-if="errors.harga">{{ errors.harga[0] }}</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group" :class="{ 'has-error': errors.qty }">
                        <label for="">Qty</label>
                        <input type="number" class="form-control" v-model="item.qty" :disabled="disabled" />
                        <p class="text-danger" v-if="errors.qty">{{ errors.qty[0] }}</p>
                    </div>
                </div>

            </div>
            <!-- {{updateHargaJual}} -->
        </div>
        
        <!-- <div class="form-group">
            <input type="checkbox" v-model="product.status">
            <label for=""> Set Active</label>
        </div> -->
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import InputNumber from '../../components/khusus/InputNumber'
import {
    http
} from '../../services/http_service.js';
export default {
    name: 'FormItemProduct',
    components: {
        // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
        'input-number' : InputNumber    
    },
    created(){
        this.getItems();
    },

    data(){
        return{
            disabled: true ,
        }
    },
    computed: {
        ...mapState(['errors']), //MENGAMBIL STATE ERRORS
        ...mapState('product', {
            item: state => state.item, //MENGAMBIL STATE PRODUCT
        }),
        ...mapState('item', {
            items: state => state.items, //MENGAMBIL STATE PRODUCT
        }),

        updateHargaJual(){
            return this.item.harga;
        }
    },
    methods: {
        ...mapMutations('product', ['CLEAR_FORM_ITEM']), //PANGGIL MUTATIONS CLEAR_FORM
        ...mapActions('item', ['getItems', 'getItemById']),

        onChange(value){
             return new Promise((resolve, reject) => {
            //REQUEST DATA DENGAN ENDPOINT /products
            // http().get(`/user/products?page=${state.page}&q=${search}`)
            http().get(`/user/items/${value}/edit`)
                .then((response) => {
                    let getData = response.data[0]
                    // console.log(getData[0].harga_beli)
                    this.item.harga = String(getData.harga_jual);
                    this.item.harga_beli = String(getData.harga_beli);
                    this.item.qty = 1;

                    this.disabled = false;
                })
            })  
            // this.getItemById(value);
        },

        updateHargaJualItem(value){
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("harga_jual", value);
                formData.append('_method', 'put');
                // ini mengupdate harga jual item
            http().post(`/user/items-update-harga-jual/${this.item.item_id}`, formData)
                .then((response) => {
                   console.log('ok');
                })
            })  
        }
        
    },

    watch:{
        updateHargaJual: 'updateHargaJualItem'
    },
    //KETIKA PAGE INI DITINGGALKAN MAKA 
    destroyed() {
        //FORM DI BERSIHKAN
        this.CLEAR_FORM_ITEM()
    }
}
</script>