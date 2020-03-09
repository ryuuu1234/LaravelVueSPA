<template>
    <div>
        <!-- <div class="form-group" :class="{ 'has-error': errors.name }">
            <label for="">Nama Product</label>
            <input type="text" class="form-control" v-model="product.name" :readonly="$route.name == 'products.edit'">
            <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
        </div> -->
        <div class="form-group" :class="{ 'has-error': errors.name }">
            <label for="">Nama Product</label>
            <input type="text" class="form-control" v-model="product.name">
            <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.harga }">
            <label for="">Harga</label>
            <input-number class="form-control" v-model="product.harga"></input-number>
            <p class="text-danger" v-if="errors.harga">{{ errors.harga[0] }}</p>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.stok_awal }">
            <label for="">Stok Awal</label>
            <input type="number" class="form-control" v-model="product.stok_awal">
            <p class="text-danger" v-if="errors.stok_awal">{{ errors.stok_awal[0] }}</p>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.description }">
            <label for="">Description</label>
            <textarea type="number" class="form-control" rows="3" v-model="product.description"></textarea>
            <p class="text-danger" v-if="errors.description">{{ errors.description[0] }}</p>
        </div>
        <!-- <div class="form-group">
            <input type="checkbox" v-model="product.status">
            <label for=""> Set Active</label>
        </div> -->
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InputNumber from '../../components/khusus/InputNumber'
export default {
    name: 'FormProducts',
    components: {
        // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
        'input-number' : InputNumber    
    },
    computed: {
        ...mapState(['errors']), //MENGAMBIL STATE ERRORS
        ...mapState('product', {
            product: state => state.product //MENGAMBIL STATE PRODUCT
        }),
    },
    methods: {
        ...mapMutations('product', ['CLEAR_FORM']), //PANGGIL MUTATIONS CLEAR_FORM
    },
    //KETIKA PAGE INI DITINGGALKAN MAKA 
    destroyed() {
        //FORM DI BERSIHKAN
        this.CLEAR_FORM()
    }
}
</script>