<template>
    <div class="row">
      	<!-- BLOCK INI AKAN MENGHANDLE LOAD DATA PERPAGE, DENGAN DEFAULT ADALAH 10 DATA -->
        <div class="col-md-6">
            <div class="form-inline">
                <label class="mr-2">Showing</label>
                <!-- KETIKA SELECT BOXNYA DIGANTI, MAKA AKAN MENJALANKAN FUNGSI loadPerPage -->
                <select class="custom-select custom-select-sm" v-model="meta.per_page" @change="loadPerPage">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
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
                    <i class="fa fa-plus"></i> Create New</b-button>
                </span>
            </div>
            
        </div>
      
        <!-- BLOCK INI AKAN MENG-HANDLE PENCARIAN DATA -->
        <div class="col-md-6 mb-3">
            <div class="form-inline float-right has-search">
                <!-- KETIKA ADA INPUTAN PADA KOLOM PENCARIAN, MAKA AKAN MENJALANKAN FUNGSI SEARCH -->
                
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control-search" placeholder="Search"  @input="search">
            </div>
        </div>
      
      	<!-- BLOCK INI AKAN MENGHASILKAN LIST DATA DALAM BENTUK TABLE MENGGUNAKAN COMPONENT TABLE DARI BOOTSTRAP VUE -->
        <div class="col-md-12">
            <!-- :ITEMS ADALAH DATA YANG AKAN DITAMPILKAN -->
            <!-- :FIELDS AKAN MENJADI HEADER DARI TABLE, MAKA BERISI FIELD YANG SALING BERKORELASI DENGAN ITEMS -->
            <!-- :sort-by.sync & :sort-desc.sync AKAN MENGHANDLE FITUR SORTING -->
            <b-table striped hover small dark no-border-collapse
            ref="selectableTable"
            selectable
            :select-mode="selectMode"
            :items="items" 
            :fields="fields" 
            :sort-by.sync="sortBy" 
            :sort-desc.sync="sortDesc" 
            @row-selected="onRowSelected"
             @row-clicked="myRowClickHandler"
            show-empty
            responsive="sm"
            >
            <!-- Example scoped slot for select state illustrative purposes -->
             <!-- <template v-slot:cell(selected)="row">
                    <input type="checkbox" v-model="row.item.selected" />
            </template> -->
            <template v-slot:cell(selected)="row"> <!-- { rowSelected }-->
                <!-- <template v-if="rowSelected">
                    <span aria-hidden="true">&check;</span>
                    <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                    <span aria-hidden="true">&nbsp;</span>
                    <span class="sr-only">Not selected</span>
                </template> -->
                <label class="custom-control material-checkbox">
                        <input type="checkbox" class="material-control-input"
                        ref="checkboxTable"
                        id="checkbox"
                        v-model="row.item.selected"
                        v-on:click="checkboxVal(row.index, $event)" 
                        >
                        <span class="material-control-indicator"></span>
                </label>
            </template>
           

            <!-- Example scoped button tambahan -->
            <template v-slot:cell(actions)="row">
                <button class="tombol-di-table" @click="editData(row.item)" v-b-tooltip.hover title="Edit Data">
                    <span class="fa fa-edit"></span>
                </button>
                <button class="tombol-di-table" @click="removeData(row.item)" v-b-tooltip.hover title="Hapus Data">
                    <span class="fa fa-trash"></span>
                </button>
            </template>
            
            </b-table>
            <!-- <b-button size="sm" @click="selectAllRows">Select all</b-button>
            <b-button size="sm" @click="clearSelected">Clear selected</b-button>  -->
            <div class="box-bw-table">
                <!-- <div class="custom-control custom-checkbox custom-control-sm">
                    <input type="checkbox"  
                        id="customCheck1" 
                        v-model="allSelected"
                        @change="togleAll" 
                        class="custom-control-input"
                        >
                    <label class="custom-control-label" for="customCheck1" style="color:white;">
                        {{ allSelected? 'Select All : With selected  ': 'Select All'}}</label>
                    <span>
                        <button 
                            class="tombol-di-bw-table"
                            @click="removeSelected(items)"
                            >
                        <i class="fa fa-trash"></i> Delete</button>
                    </span> 
                </div> -->
                <label class="custom-control material-checkbox">
                    <input type="checkbox" class="material-control-input"
                            v-model="allSelected"
                            @change="togleAll" 
                    >
                    <span class="material-control-indicator"></span>
                    <span class="material-control-description" style="color:white;">Select All</span>
                </label>

            </div>
            
            
        </div>
        <br>
      	<!-- BAGIAN INI AKAN MENAMPILKAN JUMLAH DATA YANG DI-LOAD -->
        <div class="col-md-6">
            <p>Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} items</p>
        </div>
      
      	<!-- BLOCK INI AKAN MENJADI PAGINATION DARI DATA YANG DITAMPILKAN -->
        <div class="col-md-6">
          	<!-- DAN KETIKA TERJADI PERGANTIAN PAGE, MAKA AKAN MENJALANKAN FUNGSI changePage -->
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
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI

export default {
   
    computed: {
        remaining() {
            console.dir(this.selected);
        }
    },
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

        // completed: {
        //     type:Boolean
        // }
    },
    data() {
        return {

            //VARIABLE INI AKAN MENGHADLE SORTING DATA
            sortBy: null, //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
            sortDesc: false, //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
            selectMode: 'multi',
            selected: [],
            checkedId:[],

            allSelected: false,
            selectedRow: false,
            booleanValue: false,
        }
    },
    watch: {
        //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
        sortBy(val) {
            //MAKA KITA EMIT DENGAN NAMA SORT DAN DATANYA ADALAH OBJECT BERUPA VALUE DARI SORTBY DAN SORTDESC
            //EMIT BERARTI MENGIRIMKAN DATA KEPADA PARENT ATAU YANG MEMANGGIL COMPONENT INI
            //SEHINGGA DARI PARENT TERSEBUT, KITA BISA MENGGUNAKAN VALUE YANG DIKIRIMKAN
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        },
        //KETIKA VALUE DARI SORTDESC BERUBAH
        sortDesc(val) {
            //MAKA CARA YANG SAMA AKAN DIKERJAKAN
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        }
    },
    methods: {
        checkboxVal : function(index, event) {
            if (event.target.checked) {
                this.$refs.selectableTable.selectRow(index)
                
            }else {
                this.$refs.selectableTable.unselectRow(index)
            }
            
        },

        myRowClickHandler: function(record, index) {
            this.$refs.checkboxTable.checked;
        },
        
        onRowSelected(e, index) {
            this.selected = [];
            if (e.length > 0) {
                this.selected = e.map(val=>val)
                this.allSelected = true;
            }else {
                this.allSelected = false;
            }
            
        // this.selected = items // ini yg awal
            
        },
        removeSelected(items){
            this.$emit('removedSelected', this.selected);
        },

        togleAll() {
           return this.allSelected?this.selectAllRows():this.clearSelected();
        },
        selectAllRows() {
            this.$refs.selectableTable.selectAllRows()
        },
        clearSelected() {
            this.$refs.selectableTable.clearSelected()
        },
        //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
        loadPerPage(val) {
            //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
            this.$emit('per_page', this.meta.per_page)
        },
        //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
        changePage(val) {
            //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
            this.$emit('pagination', val)
        },
        //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
        //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
        //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
        search: _.debounce(function (e) {
            //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
            this.$emit('search', e.target.value)
        }, 500),

        removeData(index) {
        this.$emit('removedData', index)  // kirim event removedTodo parent (itemnya)
        },

        editData(index) {
        this.$emit('editedData', index)  // kirim event editedData parent (itemnya)
        },

        addNew() {
        this.$emit('createdData')  // kirim event createdData parent (itemnya)
        },

        // selectId(index) {
        //     this.$emit('selectedId', index);
        // }

    }
}
</script>