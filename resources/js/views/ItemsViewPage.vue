<template>
    <div class="container" style="padding-top: 20px">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Management Items</h5>
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
                            @removedData="removeData"
                            @editedData="editData"
                        />
                        
                    </div>
                </div>
            </div>
        </div>

                <!-- Edit Modal form -->
            <b-modal
                ref="editDataModal" hide-footer title="Edit Item">
                <div class="d-block">
                    <form v-on:submit.prevent="updateData">
                        <div class="form-group-sm">
                            <label for="nama">Enter Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="nama"
                                placeholder="Enter Item Name"
                                v-model="editItemData.nama"
                            />
                            <div class="invalid-feedback" v-if="errors.nama">
                                {{ errors.nama[0] }}
                            </div>
                        </div>
                       
                        <hr />
                        <div class="text-right">
                            <button
                                type="button"
                                class="btn btn-dark btn-sm"
                                v-on:click="hideEditDataModal"
                            >
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-primary btn-sm">
                                <span class="fa fa-check"></span> Update
                            </button>
                        </div>
                    </form>
                </div>
            </b-modal>


    </div>
</template>

<script>
import Datatable from '../components/khusus/Datatable.vue' //IMPORT COMPONENT DATATABLENYA
// import axios from 'axios';
import * as itemService from "../services/items_service";

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
                {key: 'actions', label: 'Actions', class:'text-right'}

            ],
            items: [], //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
            meta: [], //JUGA BERLAKU UNTUK META
            current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
            per_page: 5, //DEFAULT LOAD PERPAGE ADALAH 5
            search: '',
            sortBy: 'created_at', //DEFAULT SORTNYA ADALAH CREATED_AT
            sortByDesc: false, //ASCEDING

            editItemData: {},
            errors:[],
        }
    },
    components: {
        'app-datatable': Datatable //REGISTER COMPONENT DATATABLE
    },
    methods: {
        //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
        loadItemsData: async function() {
            let current_page = this.search == ''? this.current_page:1;
            let sorting = this.sortByDesc? 'DESC':'ASC';
            // let
            let params = { params : {
                page: current_page,
                per_page: this.per_page,
                q: this.search,
                sortby: this.sortBy,
                sortbydesc: sorting
            }};
            try {
                const response = await itemService.loadData(params); 
                // console.log(response);
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
            } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occured, Please Refresh!",
                    time: 5000
                });
            }
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
        },

        removeData: async function(item) {
            if (!window.confirm(`Are you sure you want to delete ${item.name} ?` )) {
                return;
            }

            try {
                await itemService.deleteItem(item.id);

                this.items = this.items.filter(obj => {
                    return obj.id != item.id;
                });

                this.flashMessage.success({
                    message: "Item DELETED successfully!",
                    time: 5000
                });
            } catch (error) {
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
        },

        editData(item) {
            this.editItemData = {...item};
            this.showEditDataModal();
        },

        showEditDataModal() {
            this.$refs.editDataModal.show();
        },

        hideEditDataModal() {
            this.$refs.editDataModal.hide();
        },
    }
}

</script>