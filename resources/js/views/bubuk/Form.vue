<template>
    <div>
        <div class="form-group" :class="{ 'has-error': errors.nama }">
            <label for="">Nama Detail Bubuk</label>
            <input type="text" class="form-control" v-model="item.nama">
            <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InputNumber from '../../components/khusus/InputNumber'
export default {
    nama: 'FormItems',
    components: {
        // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
        'input-number' : InputNumber    
    },
    computed: {
        ...mapState(['errors']), //MENGAMBIL STATE ERRORS
        ...mapState('bubuk', {
            item: state => state.item //MENGAMBIL STATE ITEM
        }),
    },
    methods: {
        ...mapMutations('bubuk', ['CLEAR_FORM']), //PANGGIL MUTATIONS CLEAR_FORM
    },
    //KETIKA PAGE INI DITINGGALKAN MAKA 
    destroyed() {
        //FORM DI BERSIHKAN
        this.CLEAR_FORM()
    }
}
</script>