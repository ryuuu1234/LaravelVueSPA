<template>
    <div class="container" style="padding-top: 30px">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">VueJS Datatables</h5>
                    </div>
                    <div class="card-body">
                      	<!-- COMPONENT YANG SUDAH KITA BUAT, MENGHARAPKAN 3 BUAH PROPS, YAKNI ITEMS, FIELDS DAN META. KETIGA DATA YANG DIMINTA OLEH PROPS INI AKAN KITA KIRIMKAN -->
                        <!-- ADAPUN CARA MENGAMBIL VALUE DARI EMIT YANG SUDAH KITA BUAT ADALAH DENGAN MENAMBAHKAN @ DAN DIIKUTI DENGAN NAMA EMITNYA -->
                        <!-- DAN PARAMETER SETELAH SAMA DENGAN DARI EMIT ADALAH FUNGSI UNTUK MENERIMA VALUENYA -->
                        <app-datatable 
                            :items="items" 
                            :fields="fields" 
                            :meta="meta" 
                            @per_page="handlePerPage" 
                            @pagination="handlePagination" 
                            @search="handleSearch" 
                            @sort="handleSort"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Datatable from '../components/khusus/Datatable.vue' //IMPORT COMPONENT DATATABLENYA
import axios from 'axios';
import * as itemsService from "../services/items_service";

export default {
    //KETIKA COMPONENT INI DILOAD
    created() {
        //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
        this.loadItemsData()
    },
    data() {
        return {
            //UNTUK VARIABLE FIELDS, DEFINISIKAN KEY UNTUK MASING-MASING DATA DAN SORTABLE BERNILAI TRUE JIKA INGIN MENAKTIFKAN FITUR SORTING DAN FALSE JIKA TIDAK INGIN MENGAKTIFKAN
            fields: [
                {key: 'nama', sortable: true},
                {key: 'harga_beli', sortable: true},
                {key: 'stok_awal', sortable: true},
                {key: 'created_at', sortable: true}
            ],
            items: [], //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
            meta: [], //JUGA BERLAKU UNTUK META
            current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
            per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 10
            search: '',
            sortBy: 'created_at', //DEFAULT SORTNYA ADALAH CREATED_AT
            sortByDesc: false //ASCEDING
        }
    },
    components: {
        'app-datatable': Datatable //REGISTER COMPONENT DATATABLE
    },
    methods: {
        //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
        loadItemsData() {
            let current_page = this.search == '' ? this.current_page:1
            //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN
            axios.get(`/api/items`, {
                //KIRIMKAN PARAMETER BERUPA PAGE YANG SEDANG DILOAD, PENCARIAN, LOAD PERPAGE DAN SORTING.
                params: {
                    page: current_page,
                    per_page: this.per_page,
                    q: this.search,
                    sortby: this.sortBy,
                    sortbydesc: this.sortByDesc ? 'DESC':'ASC'
                }
            })
            .then((response) => {
                //JIKA RESPONSENYA DITERIMA
                let getData = response.data.data
                this.items = getData.data //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
                this.meta = {
                    total: getData.total,
                    current_page: getData.current_page,
                    per_page: getData.per_page,
                    from: getData.from,
                    to: getData.to
                }
            })
        },
        //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
        handlePerPage(val) {
            this.per_page = val //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
            this.loadItemsData() //DAN REQUEST DATA BARU KE SERVER
        },
        //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
        handlePagination(val) {
            this.current_page = val //SET CURRENT PAGE YANG AKTIF
            this.loadItemsData()
        },
        //JIKA ADA DATA PENCARIAN
        handleSearch(val) {
            this.search = val //SET VALUE PENCARIAN KE VARIABLE SEARCH
            this.loadItemsData() //REQUEST DATA BARU
        },
        //JIKA ADA EMIT SORT
        handleSort(val) {
            //MAKA SET SORT-NYA
            this.sortBy = val.sortBy
            this.sortByDesc = val.sortDesc

            this.loadItemsData() //DAN LOAD DATA BARU BERDASARKAN SORT
        }
    }
}
</script>