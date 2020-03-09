<template>
    <div class="col-md-6" style="padding:20px;">
        <h1>id: {{this.id}}</h1>
        <h1>name: {{this.name}}</h1>
        <h1>harga: {{this.harga}}</h1>
        <!-- <h2>{{product.id}}</h2> -->
        <input type="number" v-model="qty" class="form-control">
        <hr>
        <button class="btn btn-primary" @click.prevent="purchaseOrder">Order</button>   
    </div>
</template>
<script>
//  import { mapActions, mapState } from 'vuex'
import {http} from '../../services/http_service';
export default {
    name: 'OrderProduct',
    created() {
        this.getProductById(this.$route.params.id)
    },
    data(){
        return {
            id:'',
            name:'',
            harga:'',
            qty:'',
        }
    },
    methods: {
       getProductById: function(id){
            
            //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE product DI URL
            http().get(`user/products/${id}/edit`)
            .then((response) => {
                console.log(response);
                let getData = response.data.data;
                this.id = getData.id;
                this.name = getData.name;
                this.harga = getData.harga;
            })
            .catch(error => console.log(error))
        
       },

       purchaseOrder: function(){

           let formData = new FormData();
            formData.append("name", this.name);
            formData.append("harga", this.harga);
            formData.append("qty", this.qty);

           http().post(`/user/orders`, formData)
            .then((response) => {
                //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
                //UNTUK MENGAMBIL DATA TERBARU
                dispatch('getProducts').then(() => {
                    resolve(response.data)
                })
            })
            .catch((error) => {
                console.log(error)
            })
       }
        
    },
    
}
</script>