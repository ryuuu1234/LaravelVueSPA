<template>
 <div class="notifikasi">
  <h5 class="menu-text"><B>{{type}}</B></h5>
  <a href='' @click.prevent="pindah" :disabled="disable">
   <div class="menu-text" v-if="type=='Order Baru'" >Ada Order Baru dengan Reff : {{data.data.order.reff}}</div>
   <div class="menu-text" v-if="type=='Packing'" >Packing dengan Reff : {{data.data.order.reff}} <B>{{status}} </B></div>
   <div class="menu-text" v-if="type=='Supplier'" >Pengiriman dengan Reff : {{data.data.order.reff}} <B>{{status}}</B></div>
  </a>

 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
 name:'notifikasi',
 data(){
  return{
   disable:false
  }
 },
 props:{
  data:Object
 },
 computed:{
  type(){
   let data = this.data.data.sender_role
   switch (data) {
    case 'Mitra':
     return 'Order Baru'
     break;
    case 'Packing':
     return 'Packing'
     break;
    case 'Supplier':
     return 'Supplier'
     break;
   
    default:
     return ''
     break;
   }
  },
  status(){
    let data = this.data.data.sender_role
    let packing = this.data.data.packing
    let supplier = this.data.data.supplier
    if(data=='Packing'){
      if(packing==1){
        return 'sudah selesai'
      }else if(packing==2){
        return 'dibataklan karyawan dengan alasan ' + this.data.data.order.packing.keterangan
      }else{
        return 'masih dalam proses'
      }
    }else if(data=='Supplier'){
      if(supplier==1){
        return 'sudah selesai'
      }else if(supplier==2){
        return 'dibataklan karyawan dengan alasan ' + this.data.data.order.supplier.keterangan
      }else{
        return 'masih dalam proses'
      }
    }else{
      return ''
    }
    
  }
 },
 methods:{
  ...mapActions('notification',['readNotification']),
  ...mapActions("order", ["getOrderById"]),
  pindah(){
   this.disable=true
   this.readNotification(this.data.id)
   this.getOrderById(this.data.data.order.id)
   .then(()=>{
    this.$router.push({ name: "orders.status", params:{id:this.data.data.order.id} }, () => {});
   })
  }
 }
}
</script>