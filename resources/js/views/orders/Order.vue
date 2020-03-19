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
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">15</option>
                                <option value="50">25</option>
                                <option value="100">50</option>
                                <option value="100">100</option>
                            </select>
                            <label class="ml-2">Entries</label>

                            <!-- <span v-show="tombolAddNew">
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
                        <!-- TABLE -->
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
                            <!-- <template v-slot:table-busy>
                                <div class="text-center my-2">
                                    <b-spinner class="align-middle"></b-spinner>
                                    <strong>Loading...</strong>
                                </div>
                            </template> -->
                            <!-- Example scoped slot for select state illustrative purposes -->
                            <!-- <template v-slot:head(index)>
                                <label
                                    class="custom-control fill-checkbox-grey"
                                    style="min-height:0.8rem !important;"
                                >
                                    <input
                                        type="checkbox"
                                        class="fill-control-input"
                                        @change="selectAllRows"
                                        :checked="selectedItems.length === items.length"
                                    />
                                    <span class="fill-control-indicator"></span>
                                    <span class="fill-control-description"></span>
                                </label>
                            </template> -->
                            <!-- <template v-slot:cell(index)="row">
                                <label
                                    class="custom-control fill-checkbox-grey"
                                    style="min-height:0.8rem !important;"
                                >
                                    <input
                                        type="checkbox"
                                        class="fill-control-input"
                                        name="selected-items"
                                        v-model="selectedItems"
                                        :value="row.item"
                                    />
                                    <span class="fill-control-indicator"></span>
                                    <span class="fill-control-description"></span>
                                </label>
                            </template> -->

                            <!-- Example scoped button tambahan -->
                            <template v-slot:cell(status_id)="row">
                                <b-link
                                    :to="{ name:'orders.status', params: { id: row.item.id } }"
                                    class="btn btn-xxsm btn-flat"
                                    :class="conditionalClass(row.item.status_id)"
                                    >{{row.item.status.name}}
                                </b-link>
                            </template>
                            <!-- :class="{ 'btn-primary': isPrimary, 'btn-info': isInfo, 'btn-warning': isWarning, 'btn-danger': isDanger,
                                    'btn-success': isSuccess }" -->
                            <!-- Example scoped button tambahan -->
                            <!-- <template v-slot:cell(actions)="row">
                                <button
                                    v-show="tombolEdit"
                                    class="tombol-di-table"
                                    @click="editData(row.item)"
                                    v-b-tooltip.hover
                                    title="Edit Data"
                                >
                                    <span class="fa fa-edit"></span>
                                </button>
                                <button
                                    class="tombol-di-table"
                                    @click="removeData(row.item)"
                                    v-b-tooltip.hover
                                    title="Hapus Data"
                                >
                                    <span class="fa fa-trash"></span>
                                </button>
                            </template> -->
                        </b-table>
                        <div class="box-bw-table">
                            <div class="row">
                                <div class="col-md-6">
                                    <!-- <button
                                        class="tombol-di-bw-table"
                                        @click="removeSelected"
                                        :disabled="!selectedItems.length"
                                    >
                                        <i class="fa fa-trash"></i> Delete Selected Table
                                        Data
                                    </button> -->
                                </div>
                                <div class="col-md-6 text-right">
                                    <p style="color:grey; font-size:11px;">
                                        Halaman ke - {{ meta.from }} dari {{ meta.to }} data
                                        ditemukan, dan dari {{ meta.total }} data
                                        keseluruhan
                                    </p>
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
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "DataOrders",
    components: {
    },
    created(){
        this.getOrders()
    },
    data(){
        return {
            fields: [
                {key: 'reff', sortable: true},
                {key: 'created_at', sortable: true},
                // {key: 'unit.nama', label:'Satuan'},
                {key: 'total', label:'Total', class:'text-right'},
                {key: 'status_id', label: 'Status Order', class:'text-right'},

            ],
            search:'',
            isPrimary: false,
            isInfo: false,
            isDanger: false,
            isSuccess: true,
            isWarning: false,

        }
    },
    computed:{
        //MENGAMBIL DATA orderS dan meta DARI STATE orderS
        ...mapState("order", {
            items: state => state.orders,
            meta: state=>state.meta,
        }),
        
        
        page: {
            get() {
                //MENGAMBIL VALUE PAGE DARI VUEX MODULE order
                return this.$store.state.order.page;
            },
            set(val) {
                //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE PAGE
                //DI VUEX JUGA AKAN DIUBAH
                this.$store.commit("order/SET_PAGE", val);
            }
        },
        per_page: {
            get() {
                //MENGAMBIL VALUE PAGE DARI VUEX MODULE order
                return this.$store.state.order.per_page;
            },
            set(val) {
                //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE PER_PAGE
                //DI VUEX JUGA AKAN DIUBAH
                this.$store.commit("order/SET_PER_PAGE", val);
            }
        },
        sortBy: {
            get() {
                //MENGAMBIL VALUE PAGE DARI VUEX MODULE order
                return this.$store.state.order.sortBy;
            },
            set(val) {
                //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE SORT
                //DI VUEX JUGA AKAN DIUBAH
                this.$store.commit("order/SET_SORT_BY", val);
            }
        },
        sortByDesc: {
            get() {
                //MENGAMBIL VALUE PAGE DARI VUEX MODULE order
                return this.$store.state.order.sortByDesc;
            },
            set(val) {
                //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE PAGE
                //DI VUEX JUGA AKAN DIUBAH
                this.$store.commit("order/SET_SORT_BY_DESC", val);
            }
        },
        
       
    },
   
    watch: {
        page() {
            //APABILA VALUE DARI PAGE BERUBAH, MAKA AKAN MEMINTA DATA DARI SERVER
            this.getOrders();
        },
        per_page() {
            //APABILA VALUE DARI PAGE BERUBAH, MAKA AKAN MEMINTA DATA DARI SERVER
            this.getOrders();
        },
         sortBy() {
            //APABILA VALUE DARI PAGE BERUBAH, MAKA AKAN MEMINTA DATA DARI SERVER
            this.getOrders();
        },
        sortByDesc() {
            //APABILA VALUE DARI PAGE BERUBAH, MAKA AKAN MEMINTA DATA DARI SERVER
            this.getOrders();
        },
        search() {
            //APABILA VALUE DARI SEARCH BERUBAH MAKA AKAN MEMINTA DATA
            //SESUAI DENGAN DATA YANG SEDANG DICARI
            this.getOrders(this.search);
        }
    },
    methods: {
        //MENGAMBIL FUNGSI DARI VUEX MODULE order
        ...mapActions("order", ["getOrders"]),

        conditionalClass(val){ 
            switch (val) {
                case 2: //proses produksi
                    return 'btn-info'
                    break;
                case 3: //Proses Packing
                    return 'btn-primary'
                    break;
                case 4: //Proses Pengiriman
                    return 'btn-success'
                    break;
                case 5: //Proses terkirim
                    return 'btn-danger'
                    break;
                case 6: //selesai order
                    return 'btn-dark'
                    break;            
                default:
                    return 'btn-warning'
                    break;
            }
        },
       
    },
     mounted(){
        window.Echo.channel('capcin-tracker')
        .listen('OrderStatusChanged', (order) => {
            // console.log(order);
            this.getOrders();
        });
    }
};
</script>
