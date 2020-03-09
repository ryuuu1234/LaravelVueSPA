<template>
    <div class="col-md-12">
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">Add New Product</h3>
            </div>
            <div class="panel-body">
                <product-form></product-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                        <i class="fa fa-save"></i> Add New
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    import FormProducts from './Form.vue'
    export default {
        name: 'AddProduct',
        data() {
            return {
                
            }
        },
        methods: {
            ...mapActions('product', ['submitProduct']), //PANGGIL ACTIONS submitProduct
            submit() {
                //KETIKA TOMBOL DITEKAN MAKA FUNGSI INI AKAN DIJALANKAN
                //DIMANA FUNGSI INI TELAH DIBUAT PADA SESI SEBELUMNYA
                this.submitProduct().then(() => {
                    //APABILA BERHASIL MAKA AKAN DI-DIRECT KE HALAMAN /products
                    this.$router.push({ name: 'products.data' })
                })
            }
        },
        components: {
            'product-form': FormProducts
        }
    }
</script>