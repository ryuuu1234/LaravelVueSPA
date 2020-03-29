<template>
    <div>
        <!-- <div class="form-group" :class="{ 'has-error': errors.name }">
            <label for="">Nama Product</label>
            <input type="text" class="form-control" v-model="product.name" :readonly="$route.name == 'products.edit'">
            <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
        </div> -->
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
        <div class="form-group" :class="{ 'has-error': errors.harga }">
            <label for="">Harga</label>
            <input-number class="form-control" v-model="item.harga"></input-number>
            <p class="text-danger" v-if="errors.harga">{{ errors.harga[0] }}</p>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.qty }">
            <label for="">Qty</label>
            <input type="number" class="form-control" v-model="item.qty">
            <p class="text-danger" v-if="errors.qty">{{ errors.qty[0] }}</p>
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

    // data(){
    //     return{
    //         items:[],
    //     }
    // },
    computed: {
        ...mapState(['errors']), //MENGAMBIL STATE ERRORS
        ...mapState('product', {
            item: state => state.item, //MENGAMBIL STATE PRODUCT
        }),
        ...mapState('item', {
            items: state => state.items, //MENGAMBIL STATE PRODUCT
        }),
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
                    this.item.harga = String(getData.harga_beli);
                    this.item.qty = 1;
                })
            })  
            // this.getItemById(value);
        }
    },
    //KETIKA PAGE INI DITINGGALKAN MAKA 
    destroyed() {
        //FORM DI BERSIHKAN
        this.CLEAR_FORM_ITEM()
    }
}
</script>