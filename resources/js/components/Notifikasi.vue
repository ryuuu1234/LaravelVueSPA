<template>
 <div class="notifik">
  <h5 class="menu-text"><B>{{type}}</B></h5>
  <a href='' @click.prevent="pindah" :disabled="disable" v-if="type!='regestrasi'">
   <div class="menu-text" v-if="type=='Order Baru'" >Ada Order Baru Reff : {{data.data.order.reff}}</div>
   <div class="menu-text" v-if="type=='Terkonfirmasi'" > Order Reff : {{data.data.order.reff}} sudah dikonfirmasi</div>
   <div class="menu-text" v-if="type=='Packing'" >Packing Reff : {{data.data.order.reff}} <B>{{status}} </B></div>
   <div class="menu-text" v-if="type=='Supplier'" >Pengiriman Reff : {{data.data.order.reff}} <B>{{status}}</B></div>
  </a>
  <a href='' @click.prevent="regis" :disabled="disable" v-if="type=='Regestrasi'">
   <div class="menu-text" v-if="type=='Regestrasi' && data.data.register.status==0" >Ada regestrasi baru dari <b>{{data.data.register.name}}</b></div>
   <div class="menu-text" v-if="type=='Regestrasi' && data.data.register.status==1" >Regestrasi atas nama: <b>{{data.data.register.name}}</b>, email: {{data.data.register.email}} <b>sudah Aktif</b></div>
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
    if(this.data.data.sender_role){
   let data = this.data.data.sender_role
   switch (data) {
    case 'Mitra':
      if(this.data.data.status=='Order'){
     return 'Order Baru'
      }else{ return 'Terkonfirmasi'}
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
    }else return 'Regestrasi'
  },
  
  status(){
    if(this.data.data.sender_role){

    let data = this.data.data.sender_role
    let packing = this.data.data.packing
    let supplier = this.data.data.supplier
    if(data=='Packing'){
      if(packing==1){
        return 'sudah selesai'
      }else if(packing==2){
        return 'dibataklan ' + this.data.data.order.packing.keterangan
      }else{
        return 'masih dalam proses'
      }
    }else if(data=='Supplier'){
      if(supplier==1){
        return 'sudah selesai'
      }else if(supplier==2){
        return 'dibataklan  ' + this.data.data.order.supplier.keterangan
      }else{
        return 'masih dalam proses'
      }
    }else{
      return ''
    }
    
    }else return 'regestrasi'
  }
 },
 methods:{
  ...mapActions('notification',['readNotification','getRegNotif']),
  ...mapActions("order", ["getOrderById"]),
  pindah(){
    this.$emit('tutup')
   this.disable=true
   this.readNotification(this.data.id)
   this.getOrderById(this.data.data.order.id)
   .then(()=>{
    this.$router.push({ name: "orders.status", params:{id:this.data.data.order.id} }, () => {});
   })
  },
  regis(){
    this.$emit('tutup')
   this.readNotification(this.data.id)
    this.getRegNotif().then(()=>{
      this.$router.push({ name: "register-list" }, () => {});

    })
   
  }
 }
}
</script> 
<style lang="scss" scoped>
.notifik:hover{
  color: white;
  a{
    color: white; 
  }
}
</style>