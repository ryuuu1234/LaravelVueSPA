<template>
    <div class="col-md-6" style="padding:20px;">
        <h1>id: {{this.$route.params.id}}</h1>
        <h1>name: {{product.name}}</h1>
        <h1>harga: {{product.harga}}</h1>
        <input type="number" v-model="qty" class="form-control">
        <hr>
        <button class="btn btn-primary" @click.prevent="purchaseOrder">Order</button>   
    </div>
</template>
<script>
 import { mapActions, mapState, mapMutations } from 'vuex'
export default {
    name: 'OrderProduct',
    created() {
        this.editProduct(this.$route.params.id)
    },
    data(){
        return {
            qty:1,
        }
    },
    computed: {
        ...mapState('product', {
            product: state => state.product //MENGAMBIL STATE PRODUCT
        }),
    },
    methods: {
        ...mapActions('product', ['editProduct']),

       purchaseOrder: function(){

           let product_id = this.$route.params.id;
           let harga = this.product.harga;
           let qty = this.qty;
           let total = harga*qty;
           let user_id = this.$store.state.profile.id;
           console.log(user_id);

           let formData = new FormData();
            formData.append("product_id", product_id);
            formData.append("harga", harga);
            formData.append("qty", this.qty);
            formData.append("total", total);
            formData.append("user_id", user_id);

           http().post(`/user/orders`, formData)
            .then((response) => {
                //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
                console.log(response)
            })
            .catch((error) => {
                console.log(""+error)
            })
       }
        
    },
    
}
</script>