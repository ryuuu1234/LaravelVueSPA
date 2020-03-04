<template>
    <div class="row">
        <!-- BLOCK INI AKAN MENGHANDLE LOAD DATA PERPAGE, DENGAN DEFAULT ADALAH 10 DATA -->
        <div class="col-md-6">
            <div class="form-inline">
                <label class="mr-2" >Showing</label>
                <!-- KETIKA SELECT BOXNYA DIGANTI, MAKA AKAN MENJALANKAN FUNGSI loadPerPage -->
                <select
                    class="custom-select custom-select-sm"
                    v-model="meta.per_page"
                    @change="loadPerPage"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label class="ml-2">Entries</label>

                <span v-show="tombolAddNew">
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

        <!-- BLOCK INI AKAN MENG-HANDLE PENCARIAN DATA -->
        <div class="col-md-6 mb-3">
            <div class="form-inline float-right has-search">
                <!-- KETIKA ADA INPUTAN PADA KOLOM PENCARIAN, MAKA AKAN MENJALANKAN FUNGSI SEARCH -->

                <span class="fa fa-search form-control-feedback"></span>
                <input
                    type="text"
                    class="form-control-search"
                    placeholder="Search"
                    @input="search"
                />
            </div>
        </div>
        <div class="col-md-12">
            <b-table
                striped
                hover
                dark
                ref="selectableTable"
                :items="items"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                show-empty
                responsive="sm"
                :busy.sync="isBusy"
            >   
                 <template v-slot:table-busy>
                    <div class="text-center my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                    </div>
                </template>
                <!-- Example scoped slot for select state illustrative purposes -->
                <template v-slot:head(index)>
                    <label class="custom-control fill-checkbox-grey" style="min-height:0.8rem !important;">
                        <input type="checkbox" 
                        class="fill-control-input"
                        @change="selectAllRows"
                        :checked="selectedItems.length === items.length"
                        >
                        <span class="fill-control-indicator"></span>
                        <span class="fill-control-description"></span>
                    </label>
                </template>
                <template v-slot:cell(index)="row">
                    <label class="custom-control fill-checkbox-grey" style="min-height:0.8rem !important;">
                        <input type="checkbox" 
                        class="fill-control-input"
                         name="selected-items"
                        v-model="selectedItems"
                        :value="row.item"
                        >
                        <span class="fill-control-indicator"></span>
                        <span class="fill-control-description"></span>
                    </label>
                </template>

                <!-- Example scoped button tambahan -->
                <template v-slot:cell(status)="row">
                     <button v-if="row.item.status == 0"
                     @click="konfirmStatus(row.item)" 
                     class="btn btn-danger btn-xxsm">inActive</button>
                     <button 
                     class="btn btn-primary btn-xxsm"
                     v-else
                     @click="konfirmStatus(row.item)"
                     >Active
                     </button>
                       
                </template>
                <!-- Example scoped button tambahan -->
                <template v-slot:cell(actions)="row">
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
                </template>
            </b-table>
            <div class="box-bw-table">
                <div class="row">
                    <div class="col-md-6">
                        <button 
                            class="tombol-di-bw-table" 
                            @click="removeSelected"
                            :disabled="!selectedItems.length"    
                            >
                            <i class="fa fa-trash"></i> Delete Selected Table Data
                        </button>
                    </div>
                    <div class="col-md-6 text-right">
                        <p style="color:white;">
                            Halaman ke - {{ meta.from }} dari {{ meta.to }} data ditemukan, dan dari
                            {{ meta.total }} data keseluruhan
                        </p>
                    </div>    
                </div>
                
            </div>
        </div>
            <div class="col-md-12">
                <div class="text-right">
                    <b-pagination
                        v-model="meta.current_page"
                        :total-rows="meta.total"
                        :per-page="meta.per_page"
                        align="right"
                        @change="changePage"
                        aria-controls="dw-datatable"
                        size="sm"
                        first-text="First"
                        prev-text="⏪"
                        next-text="⏩"
                        last-text="Last"
                        class="mt-4"
                    ></b-pagination>
                </div>
            </div>
    
    </div>
</template>

<script>
import _ from "lodash"; //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI

export default {
    // computed: {
    //     tombolAdd: function() {
    //         return this.isVisible? 'd-block': 'd-none';
    //     }
    // },
    //PROPS INI ADALAH DATA YANG AKAN DIMINTA DARI PENGGUNA COMPONENT DATATABLE YANG KITA BUAT
    props: {
        //ITEMS STRUKTURNYA ADALAH ARRAY, KARENA BAGIAN INI BERISI DATA YANG AKAN DITAMPILKAN DAN SIFATNYA WAJIB DIKIRIMKAN KETIKA COMPONENT INI DIGUNAKAN
        items: {
            type: Array,
            required: true
        },
        //FIELDS JUGA SAMA DENGAN ITEMS
        fields: {
            type: Array,
            required: true
        },
        //ADAPUN META, TYPENYA ADALAH OBJECT YANG BERISI INFORMASI MENGENAL CURRENT PAGE, LOAD PERPAGE, TOTAL DATA, DAN LAIN SEBAGAINYA.
        meta: {
            required: true
        },

        tombolAddNew: {
            type: Boolean,
            required:true
        },

        tombolEdit: {
            type: Boolean,
            required:true
        },

        isBusy: {
            type: Boolean,
            reguired: true
        }
        
    },
    data() {
        return {
            //VARIABLE INI AKAN MENGHADLE SORTING DATA
            sortBy: null, //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
            sortDesc: false, //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
            selectMode: "multi",
            selected: [],
            checkedId: [],
            selectedItems: [],

            allSelected: false,
            selectedRow: false,
            booleanValue: false,

            isVisible: false,
            // isBusy : true,
            
        };
    },
    watch: {
        //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
        sortBy(val) {

            this.$emit("sort", {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            });
        },
        //KETIKA VALUE DARI SORTDESC BERUBAH
        sortDesc(val) {
            this.$emit("sort", {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            });
        },

        // isBusy(val) {
        //     this.$emit("busy", {
        //         isBusy: this.isBusy
        //     });
        // }
    },
    methods: {
        // toggleBusy() {
        //     this.isBusy != this.isBusy
        // },
        selectAllRows() {
            this.items.forEach(item => (item = event.target.checked));
            if (this.selectedItems.length === this.items.length) {
                this.selectedItems = [];
            } else {
                this.selectedItems = this.items.slice();
            }
        },
        // onRowSelected(e, index) {
        //     this.selected = [];
        //     if (e.length > 0) {
        //         this.selected = e.map(val=>val)
        //         this.allSelected = true;
        //     }else {
        //         this.allSelected = false;
        //     }

        // // this.selected = items // ini yg awal

        // },
        removeSelected(item) {
            item = this.selectedItems; // ambil idnya
            this.$emit("removedSelected", item);
        },

        togleAll() {
            return this.allSelected
                ? this.selectAllRows()
                : this.clearSelected();

        },

        // clearSelected() {
        //     this.$refs.selectableTable.clearSelected()
        // },
        //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
        loadPerPage(val) {
            //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
            this.$emit("per_page", this.meta.per_page);
        },
        //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
        changePage(val) {
            //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
            this.$emit("pagination", val);
        },
        //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
        //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
        //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
        search: _.debounce(function(e) {
            //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
            this.$emit("search", e.target.value);
        }, 500),

        removeData(index) {
            this.$emit("removedData", index); // kirim event removedTodo parent (itemnya)
        },

        editData(index) {
            this.$emit("editedData", index); // kirim event editedData parent (itemnya)
        },

        addNew() {
            this.$emit("createdData"); // kirim event createdData parent (itemnya)
        },

        konfirmStatus(index) {
            this.$emit('konfirmasiStatus', index);
        }
    }
};
</script>
