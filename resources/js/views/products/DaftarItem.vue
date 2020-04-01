<template>
  <div class="daftar-item">
  <table class="table table-responsive">
    <thead>
      <tr>
        <th>#</th>
        <th>Nama Item</th>
        <th>Harga Beli</th>
        <th>Harga Jual</th>
        <th>Qty</th>
        <th class="text-right">Subtotal Jual</th>
      </tr>
    </thead>
    <tbody v-for="(item, row) in items" :key="row">
      <!-- <div >       -->
          <input-item @qty='addQty' :item="item"/>
        
        <!--<td class="text-right"><input v-model='qty' type="number" /></td>
        <td class="text-right">{{ item.qty }}</td>-->
        
      <!-- </div> -->
    </tbody>
    <tfoot>
      <tr>
          <td colspan="5" class="text-right"><b>TOTAL HARGA JUAL: </b></td>
          <td class="text-right">
              <b>{{total | numeral('0,0')}}</b>
          </td>
      </tr>
      <tr>
          <td colspan="5" class="text-right"><b>TOTAL HARGA BELI: </b></td>
          <td class="text-right">
              <b>{{total_beli | numeral('0,0')}}</b>
          </td>
      </tr>
    </tfoot>
</table>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import InputItem from './InputItem.vue'
export default {
  name:'daftar-item',
  components:{
    'input-item':InputItem
  },
  data(){
    return {
      total:0,
      total_beli:0
    }
  },
    created(){
        this.getItems();
    },
    mounted(){
      if(this.items){
        let j = this.items.reduce(function (sum, item) {
        
        return sum + item.harga_beli * item.qty

        
        }, 0)
        this.total = j
      //   console.log('harga', item.harga_beli, 'qty', item.qty)
      // console.log('total', this.total)
      }
    },
  computed:{
    ...mapState('item', {
            items: state => state.items, //MENGAMBIL STATE PRODUCT
        }),
    // total(){  
    //   return this.items.reduce(function (sum, item) {
    //     if(!item.qty){
    //     return sum + item.harga_beli 

    //     }else{
    //     return sum + item.harga_beli * item.qty

    //     }
    //     }, 0)
        
    // }    
  },
  methods:{
    ...mapActions('item', ['getItems', 'getItemById']),
    ...mapActions('product', ['submitProductDetail']),
    addQty(qty){
      // console.log('qty ', qty, 'total', this.total)
      this.items.forEach(e=>{
        if(e.id == qty.id){
          e.qty=new Intl.NumberFormat().format(qty.qty )
        }
        if(e.qty==undefined){e.qty=0}
      })
      let j = this.items.reduce(function (sum, item) {
        return sum + item.harga_jual * item.qty
        }, 0)
        this.total = j
      let i = this.items.reduce(function (sum, item) {
        return sum + item.harga_beli * item.qty
        }, 0)
        this.total_beli = i

        
      let id_product = this.$route.params.id;
      this.submitProductDetail(id_product)
      
    }
  }

}

</script>