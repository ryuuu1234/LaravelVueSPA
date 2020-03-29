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
                >Update</button>
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
        name: 'EditProduct',
        created() {
            //SEBELUM COMPONENT DI-RENDER KITA MELAKUKAN REQUEST KESERVER
            //BERDASARKAN CODE YANG ADA DI URL
            this.editProduct(this.$route.params.id)
        },
        methods: {
            ...mapActions('product', ['editProduct', 'updateProduct']),
            submit() {
                //KETIKA TOMBOL UPDATE DI MAKA AKAN MENGIRIMKAN PERMINTAAN
                //UNTUK MENGUBAH DATA BERDASARKAN CODE YANG DIKIRIMKAN
                this.updateProduct(this.$route.params.id).then(() => {
                    //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
                    //KE HALAMAN /products
                    this.$router.push({ name: 'products.data' })
                })
            }
        },
        components: {
            'product-form': FormProducts
        },
    }
</script>