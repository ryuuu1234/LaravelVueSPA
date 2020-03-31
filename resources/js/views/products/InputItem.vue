<template>
  <tr class="input-item">
    <td></td>
    <td>{{ item.nama }}</td>
    <td class="text-right">{{ item.harga_beli | numeral('0,0') }}</td>
    <td class="text-centered" >
      <input type="number" v-model="qty" @change.prevent="add" >
    </td>
    <td class="text-right">{{ subtotal | numeral('0,0')}}</td>
  </tr>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
 name:'input-item',
 props:{
  item:Object
 },
 data(){
  return {
   qty:0,
   
  }
 },
 computed:{
  // ...mapMutations('product', ['ASSIGN_FORM_ITEM']),
    subtotal(){
   return this.item.harga_beli * new Intl.NumberFormat().format(this.qty)  
  }
 },

 methods:{
  add(){
   // console.log('item', this.item)
   let payload = {
     name: String(this.item.id),
     harga: String(this.item.harga_beli),
     qty: this.qty
     }
   this.$store.commit('product/ASSIGN_FORM_ITEM', payload)
   
   this.$emit('qty', {'qty':this.qty, 'id':this.item.id, 'subtotal':this.subtotal})
  }
 }
}
</script>
<style lang="scss" scoped>
input{
 width: 80px;
 text-align: center;
}
</style>