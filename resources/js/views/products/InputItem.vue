<template>
  <tr>
    <td>
      <button
          class="tombol-di-table red-color"
          @click="cancel"
          v-b-tooltip.hover
          title="Batal"
      >
          <span class="fa fa-times-circle fa-3x"></span>
      </button>
      </td>
    <td>
      <!-- <div class="form-group" :class="{ 'has-error': errors.item_id }"> -->
          <!-- <label for="">Nama Item</label> -->
          <!-- <input type="text" class="form-control" v-model="item.item_id"> -->
          <select 
              class="form-control"
              v-model="item.item_id"
              @change="onChange(item.item_id)"
              >
              <option value="">Pilih Item</option>
              <option v-for="row in items" :key="row.id" 
                  :value="row.id"
                  >{{ row.nama }}
              </option>
          </select>
          <p class="text-danger" v-if="errors.item_id">{{ errors.item_id[0] }}</p>
      <!-- </div> -->

    </td>
    <td class="text-right">
      <!-- <div class="form-group" :class="{ 'has-error': errors.harga_beli }"> -->
        <!-- <label for="">Harga Beli</label> -->
        <input-number class="form-control" v-model="item.harga_beli" readonly="readonly" ></input-number>
        <p class="text-danger" v-if="errors.harga_beli">{{ errors.harga_beli[0] }}</p>
      <!-- </div> -->
    </td>
    <td class="text-right">      
      <!-- <div class="form-group" :class="{ 'has-error': errors.harga }"> -->
        <!-- <label for="">Harga Jual</label> -->
        <input-number class="form-control" @change="ganti" v-model="item.harga" :disabled="disabled"></input-number>
        <p class="text-danger" v-if="errors.harga">{{ errors.harga[0] }}</p>
      <!-- </div> -->
    </td>
    <td class="text-centered" >
      <!-- <div class="form-group" :class="{ 'has-error': errors.qty }"> -->
        <!-- <label for="">Qty</label> -->
        <input type="number" class="form-control" v-model="item.qty" :disabled="disabled" />
        <p class="text-danger" v-if="errors.qty">{{ errors.qty[0] }}</p>
      <!-- </div> -->
    </td>
    <td class="text-right"> <button
          class="tombol-di-table green-color"
          @click="addNew"
          v-b-tooltip.hover
          title="simpan"
      >
          <span class="fas fa-check fa-3x"></span>
      </button></td>
   
  </tr>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import InputNumber from '../../components/khusus/InputNumber'
import {http} from '../../services/http_service.js';
export default {
 name:'update-item',
 components: {
        // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
        'input-number' : InputNumber    
    },
 
 data(){
  return {
  //  qty:this.item.qty,
  //  harga:this.item.harga,
  //  hargaEdit:false,
  //  qtyEdit:false,
   disabled: true
  }
 },
     created(){
        this.getItems();
    },

 directives: {
  focus: {
    // directive definition
    inserted: function (el) {
      el.focus()
    }
  }
},
computed:{
  // ...mapMutations('product', ['ASSIGN_FORM_ITEM']),
  ...mapState('item', {
            items: state => state.items, //MENGAMBIL STATE PRODUCT
        }),
  
  ...mapState(['errors']), //MENGAMBIL STATE ERRORS
  ...mapState('product', {
      item: state => state.item, //MENGAMBIL STATE PRODUCT
  }),
    subtotal(){
   return this.item.harga * new Intl.NumberFormat().format(this.item.qty)  
  },
  updateHargaJual(){
      return this.item.harga;
  }
},

methods:{
  ...mapMutations('product', ['CLEAR_FORM_ITEM']), //PANGGIL MUTATIONS CLEAR_FORM
  ...mapActions('item', ['getItems', 'getItemById']),
  ganti(){
    console.log('ganti')
  },

    onChange(value){
      return new Promise((resolve, reject) => {
      //REQUEST DATA DENGAN ENDPOINT /products
      // http().get(`/user/products?page=${state.page}&q=${search}`)
      http().get(`/user/items/${value}/edit`)
        .then((response) => {
          let getData = response.data[0]
          // console.log(getData[0].harga_beli)
          this.item.harga = String(getData.harga_jual);
          this.item.harga_beli = String(getData.harga_beli);
          this.item.qty = 1;

          this.disabled = false;
        })
      })  
        // this.getItemById(value);
    },
    updateHargaJualItem(value){
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("harga_jual", value);
        formData.append('_method', 'put');
        // ini mengupdate harga jual item
      http().post(`/user/items-update-harga-jual/${this.item.item_id}`, formData)
        .then((response) => {
            console.log('ok');
        })
      })  
    },
    cancel(){
      this.$emit('cancel')
      this.CLEAR_FORM_ITEM()
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
  addNew(){
   // console.log('item', this.item)
    // let payload = {
    //   name: String(this.item.item.id),
    //   harga: String(this.harga),
    //   harga_beli: String(this.item.harga_beli),
    //   qty: this.qty
    //   }
    // this.$store.commit('product/ASSIGN_FORM_ITEM', payload)
    
    this.$emit('submit')
    // this.$emit('submit', {'qty':this.qty, 'id':this.item.item.id, 'subtotal':this.subtotal})
    }
},
watch:{
      updateHargaJual: 'updateHargaJualItem'
},
  //KETIKA PAGE INI DITINGGALKAN MAKA 
destroyed() {
    //FORM DI BERSIHKAN
    this.CLEAR_FORM_ITEM()
}
}
</script>
<style lang="scss" scoped>
input{
  padding:0;
  width: 80px;
 text-align: center;
}

.red-color {
    color:#DC3545;
}
.green-color {
    color:rgb(29, 221, 71);
}
</style>