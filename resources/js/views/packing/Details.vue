<template>
    <div>
         <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4 m-0">
                    <div class="row">
                        <div class="col-md-4" v-for="detail in details_packing" :key="detail.id" >
                            <b-card title="Nama Product" header-tag="header" footer-tag="footer">
                                <template v-slot:header>
                                    <h6 class="mb-0">No.Reff : {{detail.order.reff}}</h6>
                                </template>
                                <b-card-text>{{detail.order.detail_order_one.product.name}}</b-card-text>
                                <b-button variant="primary" size="sm">Lihat Rincian Product</b-button>
                                <template v-slot:footer>
                                    <em>dibuat pada : {{detail.created_at}}</em>
                                </template>
                            </b-card>
                        </div>
                    </div>
                </div>
                <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-dark btn-xsm indx"
                        @click="$router.go(-1)"
                    >Kembali</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name: "DataPacking",

    created(){
        this.getPackingByIdUser(this.$route.params.id);
    },

    data(){
        return {

        }
    },
    computed:{
        //MENGAMBIL DATA packings dan meta DARI STATE packings
       ...mapState("packing", {
            packings: state => state.packings,
            meta: state=>state.meta,
            details_packing: state=>state.details_packing,
        }),
    },
   
    watch: {
    },

    methods: {
        ...mapActions('packing', ['getPackingByIdUser']),
        ...mapMutations("packing", ['SET_PAGE', 'SET_PER_PAGE', 'SET_SORT_BY', 'SET_SORT_BY_DESC', 'ASSIGN_PACKING']),
    },
}    
</script>

<style  scoped>
.blue-color {
    color: #17A2B8;
}

.red-color {
    color:#DC3545;
}
.green-color {
    color:rgb(29, 221, 71);
}
td > input{
 width: 50px;
 text-align: center;
}
</style>

