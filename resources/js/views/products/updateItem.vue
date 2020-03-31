<template>
  <tr class="input-item">
    <!-- <td><button
          class="tombol-di-table red-color"
          @click="removeData(item.id)"
          v-b-tooltip.hover
          title="Hapus Data"
      >
          <span class="fa fa-trash"></span>
      </button></td>
    <td>{{ item.nama }}</td>
    <td class="text-right">{{ item.harga_beli | numeral('0,0') }}</td>
    <td class="text-right">      
      <input type="number" v-model="jual" @change.prevent="add" >
    </td>
    <td class="text-centered" >
      <input type="number" v-model="qty" @change.prevent="add" >
    </td>
    <td class="text-right">{{ subtotal | numeral('0,0')}}</td> -->
    <td>
        <button
            class="tombol-di-table red-color"
            @click="removeData(item.id)"
            v-b-tooltip.hover
            title="Hapus Data"
        >
            <span class="fa fa-trash"></span>
        </button>
    </td>
    <td>{{ item.item.nama }}</td>
    <td class="text-right">{{ item.harga_beli | numeral('0,0') }}</td>
    <td class="text-right">
      <div class="text-right" v-if="!hargaEdit" @dblclick="editHarga">
        {{ harga | numeral('0,0') }}
      </div>
        <input
        v-else
        class="text-right"
        type="number"
        v-model="harga"
        @change.prevent="add"
        @blur="doneEditHarga"
        @keyup.enter="doneEditHarga"
        v-focus>
    </td>
    <td class="text-right">
      <div class="text-right" v-if="!qtyEdit" @dblclick="editQty">
        {{ qty }}
      </div>
        <input
        v-else
        class="text-right"
        type="number"
        v-model="qty"
        @change.prevent="add"
        @blur="doneEditQty"
        @keyup.enter="doneEditQty"
        v-focus>
    </td>
    <td class="text-right">{{ harga * qty | numeral('0,0')}}</td>
  </tr>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
 name:'update-item',
 props:{
  item:Object
 },
 data(){
  return {
   qty:this.item.qty,
   harga:this.item.harga,
   hargaEdit:false,
   qtyEdit:false
  }
 },
 directives: {
  focus: {
    // directive definition
    inserted: function (el) {
      el.focus()
    }
  }
},
  // directives:{
  //   focus: {
  //     inserted: function(el){
  //       el.focus()
  //     }
  //   }
  // },
 computed:{
  // ...mapMutations('product', ['ASSIGN_FORM_ITEM']),
    subtotal(){
   return this.item.harga * new Intl.NumberFormat().format(this.qty)  
  },
 },
  // watch:{
  //   cariHargaJual:{
  //     handler : 'cariHargaJual',
  //     immediate: true
  //   }
  // },

 methods:{
   editHarga(){
     this.hargaEdit=true
   },
   editQty(){
     this.qtyEdit=true
   },
   doneEditHarga(){
     this.hargaEdit=false
   },
   doneEditQty(){
     this.qtyEdit=false
   },
   carHargaJual(){
     if(this.item.harga){
      this.jual = this.item.harga
    }else if(this.item.harga_jual){
      this.jual = this.item.harga_jual
    }else {
      this.jual = 0
    }
   },
  add(){
   // console.log('item', this.item)
   let payload = {
     name: String(this.item.item.id),
     harga: String(this.harga),
     harga_beli: String(this.item.harga_beli),
     qty: this.qty
     }
   this.$store.commit('product/ASSIGN_FORM_ITEM', payload)
   
   this.$emit('qty', {'qty':this.qty, 'id':this.item.item.id, 'subtotal':this.subtotal})
  }
 }
}
</script>
<style lang="scss" scoped>
input{
 width: 50px;
 text-align: center;
}

.red-color {
    color:#DC3545;
}
</style>