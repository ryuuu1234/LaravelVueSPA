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
                            :items="packings.data"
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
                                        name: 'item-details.packing',
                                        params: { id: row.item.id }
                                    }"
                                v-if="row.item.details_packing.length > 0"    
                                class="btn btn-xxsm btn-flat btn-danger"
                                v-b-tooltip.hover
                                title="Details Kewajiban Packing">
                                <span class="fa fa-eye"></span>
                                Kewajiban Packing
                                </router-link>
                                <!-- <b-form-checkbox 
                                    v-if="row.item.details_packing.length > 0"
                                    v-model="row.detailsShowing" 
                                    @change="row.toggleDetails">
                                    Details Kewajiban Packing
                                </b-form-checkbox> -->
                                <!-- <button
                                    v-if="row.item.details_packing.length > 0"
                                    class="btn btn-danger btn-xsm"
                                    @click="getPackingByIdUser(row.item.id)"
                                    v-b-tooltip.hover
                                    title="Details Kewajiban Packing"
                                >   
                                    <span class="fa fa-eye"></span>
                                    Kewajiban Packing
                                </button> -->
                            </template>
                        </b-table>
                        <div class="box-bw-table">
                            <div class="row">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6 text-right">
                                    <div v-if="packings.data && packings.data.length > 0" >
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
                                v-if="packings.data && packings.data.length > 0"
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
    name: "DataPacking",

    created(){
        this.getPacking();
    },

    data(){
        return {
            fields: [
                {key: 'name', label:'Nama', sortable: true},
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
        //MENGAMBIL DATA packings dan meta DARI STATE packings
        ...mapState("packing", {
            packings: state => state.packings,
            meta: state => state.meta,
            details_packing: state => state.details_packing
        }),
        
        
        page: {
            get() {return this.$store.state.packing.page;},
            set(val) {this.SET_PAGE(val);}
        },
        per_page: { get() {return this.$store.state.packing.per_page;},
            set(val) {this.SET_PER_PAGE(val);}
        },
        sortBy: { get() {return this.$store.state.packing.sortBy;},
            set(val) {this.SET_SORT_BY(val);}
        },
        sortByDesc: { get() {return this.$store.state.packing.sortByDesc;},
            set(val) { this.SET_SORT_BY_DESC(val);}
        },
       
    },
   
    watch: {
        page() {this.getPacking();},
        per_page() {this.getPacking();},
        sortBy() {this.getPacking();},
        sortByDesc() {this.getPacking();},
        search: 'getPacking',
    },

    methods: {
        ...mapActions('packing', ['getPacking', 'getPackingByIdUser']),
        ...mapMutations("packing", ['SET_PAGE', 'SET_PER_PAGE', 'SET_SORT_BY', 'SET_SORT_BY_DESC']),
    },
}    
</script>

<style scoped>
.black-text {
    color: black;
}
</style>
