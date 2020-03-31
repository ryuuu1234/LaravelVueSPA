<template>
  <div class="daftar-item">
  <table class="table table-responsive">
    <thead>
      <tr>
        <th>#</th>
        <th>Nama Item</th>
        <th>Harga</th>
        <th>Qty</th>
        <th class="text-right">Subtotal</th>
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
        <td colspan="4" class="text-right"><b>TOTAL : </b></td>
        <td class="text-right">
          {{total | numeral('0,0')}}
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
      total:0
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
        return sum + item.harga_beli * item.qty
        }, 0)
        this.total = j

        
      let id_product = this.$route.params.id;
      this.submitProductDetail(id_product)
      
    }
  }

}

</script>