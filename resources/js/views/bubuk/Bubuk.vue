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

                            <span>
                                <b-button
                                    pill
                                    variant="outline-secondary"
                                    size="sm"
                                    class="ml-2"
                                    @click="addNew"
                                >
                                    <i class="fa fa-plus"></i> Create New</b-button
                                >
                            </span>
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
                            <!-- Example scoped button tambahan -->
                            <template v-slot:cell(actions)="row">
                                <button
                                    class="tombol-di-table"
                                    @click="editForm(row.item.id)"
                                    v-b-tooltip.hover
                                    title="Edit Data"
                                >
                                    <span class="fa fa-edit"></span>
                                </button>
                                <button
                                    class="tombol-di-table"
                                    @click="removeData(row.item.id)"
                                    v-b-tooltip.hover
                                    title="Hapus Data"
                                >
                                    <span class="fa fa-trash"></span>
                                </button>
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
         <b-modal
            ref="myModal" hide-footer title="Tambah / Edit Item">
            <div class="d-block">
                <form>
                    <form-item></form-item>
                    
                    <hr />
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            @click="closeModal"
                        >
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-dark btn-sm" @click.prevent="submit">
                            <span class="fa fa-check"></span> Simpan Data
                        </button>
                    </div>
                </form>
                {{id_item}}
            </div>
        </b-modal>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
    import FormItemsBubuk from './Form.vue';
export default {
    name: "DataBubuk",
    components: {
        'form-item': FormItemsBubuk,
    },

    created(){
        this.getBubuks();
    },

    data(){
        return {
            fields: [
                {key: 'nama', sortable: true},
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
        ...mapState("bubuk", {
            items: state => state.items,
            meta: state=>state.meta,
            page: state=>state.page,
        }),
        
        
        page: {
            get() {
                return this.$store.state.bubuk.page;
                // return this.page
            },
            set(val) {
                // this.$store.commit("bubuk/SET_PAGE", val);
                this.SET_PAGE(val);
            }
        },
        per_page: {
            get() {
                return this.$store.state.bubuk.per_page;
            },
            set(val) {
                // this.$store.commit("bubuk/SET_PER_PAGE", val);
                this.SET_PER_PAGE(val);
            }
        },
        sortBy: {
            get() {
                return this.$store.state.bubuk.sortBy;
            },
            set(val) {
                // this.$store.commit("bubuk/SET_SORT_BY", val);
                this.SET_SORT_BY(val);
            }
        },
        sortByDesc: {
            get() {
                //MENGAMBIL VALUE PAGE DARI VUEX MODULE item
                return this.$store.state.bubuk.sortByDesc;
            },
            set(val) {
                //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE PAGE
                //DI VUEX JUGA AKAN DIUBAH
                this.$store.commit("bubuk/SET_SORT_BY_DESC", val);
            }
        },
        
       
    },
   
    watch: {
        page() {
            this.getBubuks();
        },
        per_page() {
            this.getBubuks();
        },
        sortBy() {
            this.getBubuks();
        },
        sortByDesc() {
            this.getBubuks();
        },
        search: 'getBubuks',
    },

    methods: {
        ...mapActions('bubuk', ['getBubuks', 'saveData', 'editData', 'updateData', 'deleteData']),
        ...mapMutations("bubuk", ['SET_PAGE', 'SET_PER_PAGE', 'SET_SORT_BY', 'SET_SORT_BY_DESC', 'CLEAR_FORM']),

        addNew(){
            this.$refs.myModal.show();
        },

        closeModal(){
            this.method = 'Add';
            this.$refs.myModal.hide();
        },

        submit() {
            if (this.method == 'Add') {
                this.saveData().then(() => {
                    this.closeModal()
                })
            } else {
                this.updateData(this.id_item).then(() => {
                    this.closeModal();
                    this.id_item = '';
                })
            }
            
        },

        editForm(id){
            this.method = 'Update';
            this.id_item = id;
            this.editData(id)
            this.$refs.myModal.show();
        },

        removeData(id){
            this.$swal({
                title: "Kamu Yakin?",
                text: "Tindakan ini akan menghapus secara permanent!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, Lanjutkan!"
            }).then(result => {
                //JIKA DISETUJUI
                if (result.value) {
                    //MAKA FUNGSI removeproduct AKAN DIJALANKAN
                    this.deleteData(id);
                }
            });
        }
    },
}    
</script>
