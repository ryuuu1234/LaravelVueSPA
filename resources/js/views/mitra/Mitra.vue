<template>
    <div>
        <div class="container-fluid mt-4">
            <div class="col-md-12">
                <!-- TABLE -->
                <div class="row">
                    <!-- BLOCK INI AKAN MENGHANDLE LOAD DATA PERPAGE, DENGAN DEFAULT ADALAH 10 DATA -->
                    <div class="col-md-6">
                        <div class="form-inline">
                            <label class="mr-2">Showing</label>
                            <select
                                class="custom-select custom-select-sm"
                                v-model="per_page"
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                            </select>
                            <label class="ml-2">Entries</label>

                            <!-- <span>
                                <b-button
                                    pill
                                    variant="outline-secondary"
                                    size="sm"
                                    class="ml-2"
                                    @click="addNew"
                                >
                                    <i class="fa fa-plus"></i> Create New</b-button
                                >
                            </span> -->
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="form-inline float-right has-search">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input
                                type="text"
                                class="form-control-search"
                                placeholder="Search"
                                v-model="search"
                            />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <b-table
                            striped
                            hover
                            dark
                            ref="selectableTable"
                            :items="items.data"
                            :fields="fields"
                            :sort-by.sync="sortBy"
                            :sort-desc.sync="sortByDesc"
                            show-empty
                            responsive="sm"
                        >
                            <!-- Example scoped button tambahan -->
                            <template v-slot:cell(actions)="row">
                                <router-link
                                    :to="{
                                        name: 'item-detail.mitra',
                                        params: { id: row.item.id }
                                    }"
                                class="btn btn-xxsm btn-flat btn-warning"
                                v-b-tooltip.hover
                                title="Stok Data"
                                >Stok Items Mitra</router-link>
                                <!-- <button
                                    class="tombol-di-table"
                                    @click="removeData(row.item.id)"
                                    v-b-tooltip.hover
                                    title="Hapus Data"
                                >
                                    <span class="fa fa-trash"></span>
                                </button> -->
                            </template>
                        </b-table>
                        <div class="box-bw-table">
                            <div class="row">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6 text-right">
                                    <div v-if="items.data && items.data.length > 0" >
                                        <p style="color:grey; font-size:11px;" >
                                            Halaman ke - {{ meta.from }} dari {{ meta.to }} data
                                            ditemukan, dan dari {{ meta.total }} data
                                            keseluruhan
                                        </p>
                                    </div>
                                    <div v-else>
                                        <p style="color:grey; font-size:11px;" >Data is Empty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="text-right">
                            <b-pagination
                                v-model="page"
                                :total-rows="meta.total"
                                :per-page="meta.per_page"
                                align="right"
                                aria-controls="dw-datatable"
                                size="sm"
                                first-text="First"
                                prev-text="⏪"
                                next-text="⏩"
                                last-text="Last"
                                class="mt-4"
                                v-if="items.data && items.data.length > 0"
                            ></b-pagination>
                        </div>
                    </div>
                </div>
            </div>    
        </div>

        <!-- modal -->
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name: "DataMitra",

    created(){
        this.getMitra();
    },

    data(){
        return {
            fields: [
                {key: 'name', label:'Nama Mitra', sortable: true},
                {key: 'actions', label: 'Options', class:'text-right'},

            ],
            search:'',
            isPrimary: false,
            isInfo: false,
            isDanger: false,
            isSuccess: true,
            isWarning: false,

            method: 'Add',
            id_item: '',

        }
    },
    computed:{
        //MENGAMBIL DATA itemS dan meta DARI STATE itemS
        ...mapState("mitra", {
            items: state => state.items,
            meta: state=>state.meta,
        }),
        
        
        page: {
            get() {return this.$store.state.mitra.page;},
            set(val) {this.SET_PAGE(val);}
        },
        per_page: { get() {return this.$store.state.mitra.per_page;},
            set(val) {this.SET_PER_PAGE(val);}
        },
        sortBy: { get() {return this.$store.state.mitra.sortBy;},
            set(val) {this.SET_SORT_BY(val);}
        },
        sortByDesc: { get() {return this.$store.state.mitra.sortByDesc;},
            set(val) { this.SET_SORT_BY_DESC(val);}
        },
       
    },
   
    watch: {
        page() {this.getMitra();},
        per_page() {this.getMitra();},
        sortBy() {this.getMitra();},
        sortByDesc() {this.getMitra();},
        search: 'getMitra',
    },

    methods: {
        ...mapActions('mitra', ['getMitra']),
        ...mapMutations("mitra", ['SET_PAGE', 'SET_PER_PAGE', 'SET_SORT_BY', 'SET_SORT_BY_DESC']),
    },
}    
</script>
