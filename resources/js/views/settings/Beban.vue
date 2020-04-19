<template>
    <div>
        <div class="container-fluid mt-4">
            <div class="title-nya">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
            </div>
            <div class="content-nya">
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

                                <span >
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
                            <b-table
                                striped
                                hover
                                dark
                                ref="selectableTable"
                                :items="bebans.data"
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
                                        @click="deleteData(row.item.id)"
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
                                        <div v-if="bebans.data && bebans.data.length > 0" >
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
                                    v-if="bebans.data && bebans.data.length > 0"
                                ></b-pagination>
                            </div>
                        </div>
                </div>
            </div> 
            </div> 
               
        </div>

        <!-- modal -->
        <b-modal ref="myModal" hide-footer title="Tambah / Edit Data Beban">
            <div class="d-block">
                <form v-on:submit.prevent="simpanData">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group-sm mb-2">
                                <label for="nama">Nama Beban</label>
                                <input
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Nama Beban"
                                    v-model="form.nama"
                                />
                                <div class="invalid-feedback" v-if="errors.nama">
                                    {{ errors.nama[0] }}
                                </div>
                            </div>
                        </div> 

                    </div>
                    
                    <hr />
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            v-on:click="hideModal"
                        >
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-dark btn-sm">
                            <span class="fa fa-check"></span> Simpan
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>


    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    name: "Beban",

    created(){
        this.getBeban();
    },

    data(){
        return {
            fields: [
                {key: 'nama', label:'Nama', sortable: true},
                {key: 'actions', label: 'Options', class:'text-right'},
            ],
            search:'',
            isPrimary: false,
            isInfo: false,
            isDanger: false,
            isSuccess: true,
            isWarning: false,

            method: 'Add',

        }
    },
    computed:{
        //MENGAMBIL DATA bebans dan meta DARI STATE bebans
        ...mapState("beban", {
            bebans: state => state.bebans,
            meta: state => state.meta,
            form: state => state.form,
        }),
        ...mapState(['errors']), //MENGAMBIL STATE ERRORS
        
        
        page: {
            get() {return this.$store.state.beban.page;},
            set(val) {this.SET_PAGE(val);}
        },
        per_page: { get() {return this.$store.state.beban.per_page;},
            set(val) {this.SET_PER_PAGE(val);}
        },
        sortBy: { get() {return this.$store.state.beban.sortBy;},
            set(val) {this.SET_SORT_BY(val);}
        },
        sortByDesc: { get() {return this.$store.state.beban.sortByDesc;},
            set(val) { this.SET_SORT_BY_DESC(val);}
        },
       
    },
   
    watch: {
        page() {
            this.getBeban();
        },
        per_page() {this.getBeban();},
        sortBy() {this.getBeban();},
        sortByDesc() {this.getBeban();},
        search: 'getBeban',
    },

    methods: {
        ...mapActions('beban', ['getBeban', 'saveData', 'editData', 'updateData', 'removeData']),
        ...mapMutations("beban", ['SET_PAGE', 'SET_PER_PAGE', 'SET_SORT_BY', 'SET_SORT_BY_DESC', 'CLEAR_FORM']),
        ...mapMutations(['CLEAR_ERRORS']),

        addNew() {
            this.$refs.myModal.show();
        },
        hideModal() {
            this.CLEAR_FORM();
            this.CLEAR_ERRORS();
            this.$refs.myModal.hide();
        },

        simpanData(){
            if (this.method == 'Add') {
                this.saveData().then(() => {
                    this.hideModal()
                })
                
            } else {
                this.updateData(this.$store.state.beban.form.id)
                .then(() => {
                    this.hideModal();
                    this.method = 'Add';
                });
            }
        },

        editForm(val) {
            // alert(val)
            this.method ="Edit";
            this.editData(val).then(() => {
                this.$refs.myModal.show();
            });
        },

        deleteData(val){
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
                    this.removeData(val);
                }
            });
        }
    },
}    
</script>

<style scoped>
.black-text {
    color: black;
}
</style>
