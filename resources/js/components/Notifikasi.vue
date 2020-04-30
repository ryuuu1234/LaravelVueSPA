<template>
 <div class="notifik">
  <!-- <p class="menu-text">{{type}}</p> -->
  <a href='' @click.prevent="pindah" :disabled="disable" v-if="type!='regestrasi'">
    <div class="menu-text" v-if="type=='Order Baru'" >
      Ada Order Baru
      <p style="color:gray; font-size:10px !important;"><i>{{perbedaan(data.created_at)}} yang lalu</i></p> 
    </div>
    <div class="menu-text" v-if="type=='Terkonfirmasi'" > 
      Konfirmasi order
      <p style="color:gray; font-size:10px !important;"><i>{{perbedaan(data.created_at)}} yang lalu</i></p> 
    </div>
    <div class="menu-text" v-if="type=='Packing'" >
      Packing selesai
      <p style="color:gray; font-size:10px !important;"><i>{{perbedaan(data.created_at)}} yang lalu</i></p> 
    </div>
    <div class="menu-text" v-if="type=='Supplier'" >
      Pengiriman selesai
      <p style="color:gray; font-size:10px !important;"><i>{{perbedaan(data.created_at)}} yang lalu</i></p> 
    </div>
  </a>
  <a href='' @click.prevent="regis" :disabled="disable" v-if="type=='Regestrasi'">
    <div class="menu-text" v-if="type=='Regestrasi' && data.data.register.status==0" >
      Ada regestrasi baru 
      <p style="color:gray; font-size:10px !important;"><i>{{perbedaan(data.created_at)}} yang lalu</i></p> 
    </div>
    <div class="menu-text" v-if="type=='Regestrasi' && data.data.register.status==1" >
      User sudah Aktif
      <p style="color:gray; font-size:10px !important;"><i>{{perbedaan(data.created_at)}} yang lalu</i></p> 
    </div>
  </a>

 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import moment from 'moment'
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
  perbedaan(from) {
      moment.locale("id");
      // let to = Date.now();
      let durations = moment.duration(moment().diff(moment(from))).humanize();
      return durations;
    },
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