<template>
<div>
    <div class="card" style="width:60%;">
        <div class="card-body">
            <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
            <hr class="batas-dark"/>
            <div class="px-4">
                <!-- INI Contentnya -->
                <product-form></product-form>
            </div>
            <hr class="batas-dark"/>
            <div class="text-right">
                <button type="submit" class="btn btn-danger btn-xsm"
                    @click.prevent="submit"
                >submit</button>
                <button type="submit" class="btn btn-dark btn-xsm"
                    @click="$router.go(-1)"
                >Kembali</button>
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