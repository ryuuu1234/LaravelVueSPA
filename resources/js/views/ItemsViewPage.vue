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
                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group-sm mb-2">
                                    <label for="nama">Nama Item</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-sm"
                                        id="nama"
                                        placeholder="Enter Item Name"
                                        v-model="editItemData.nama"
                                    />
                                    <div class="invalid-feedback" v-if="errors.nama">
                                        {{ errors.nama[0] }}
                                    </div>
                                </div>
                            </div> 

                            <div class="col-md-6">
                                <div class="form-group-sm">
                                    <label for="harga_beli">Harga Beli {{editItemData.harga_beli | numeralFormat }}</label>
                                    
                                        <input
                                            class="form-control form-control-sm" 
                                            id="harga_beli"
                                            placeholder="Masukkan Harga Beli Item"
                                            v-model="editItemData.harga_beli"
                                            @blur="isInputActive = false" 
                                            @focus="isInputActive = true"
                                        >
                                        
                                       
                                    <div class="invalid-feedback" v-if="errors.harga_beli">
                                        {{ errors.harga_beli[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group-sm mb-2">
                                    <label for="unit_id">Satuan</label>
                                    <select 
                                        name="unit_id" id="unit_id"
                                        class="form-control form-control-sm"
                                        v-model="editItemData.unit_id"
                                    >
                                        <option value="">Pilih Satuan</option>
                                        <option v-for="unit in units" :key="unit.id" 
                                            :value="unit.id"
                                            >{{ unit.nama }}
                                        </option>
                                    </select>
                                    <div class="invalid-feedback" v-if="errors.unit_id">
                                        {{ errors.unit_id[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group-sm">
                                    <label for="stok_awal">Stok Awal</label>
                                    <input 
                                        type="number"
                                        class="form-control form-control-sm"
                                        placeholder="masukkan stok awal"
                                        v-model="editItemData.stok_awal"
                                    />
                                    <div class="invalid-feedback" v-if="errors.stok_awal">
                                        {{ errors.stok_awal[0] }}
                                    </div>
                                </div>
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
import MyCurrencyInput from '../components/khusus/MyCurrencyInput.vue'
// import axios from 'axios';
import * as itemService from "../services/items_service";


export default {
    components: {
        'app-datatable': Datatable, //REGISTER COMPONENT DATATABLE
        'my-currency-input': MyCurrencyInput //REGISTER COMPONENT DATATABLE
    },
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
                {key: 'unit.nama', label:'Satuan', sortable: true},
                {key: 'harga_beli', label:'Harga', formatter: (value, key, item) => {
                            return new Intl.NumberFormat().format(item.harga_beli)
                            }, sortable: true, class:'text-right'},
                {key: 'stok_awal', sortable: true, class:'text-right'},
                {key: 'actions', label: 'Actions', class:'text-right'}

            ],
            items: [], //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
            units: [], //DATA UNIT
            meta: [], //JUGA BERLAKU UNTUK META
            current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
            per_page: 5, //DEFAULT LOAD PERPAGE ADALAH 5
            search: '',
            sortBy: 'created_at', //DEFAULT SORTNYA ADALAH CREATED_AT
            sortByDesc: false, //ASCEDING

            editItemData: {},
            errors:[],
            // currencyInput: '',
            isInputActive: false,
        }
    },
    
    computed: {
        // currencyInput: {
        //     // get: function() {
        //     //     return this.editItemData.harga_beli;
        //     // },
        //     // set: function(newValue) {
        //     //     if (newValue.length > 2) {
        //     //         newValue = newValue.replace(".", "");
        //     //         this.editItemData.harga_beli =
        //     //         newValue.substr(0, newValue.length - 3) +
        //     //         "." +
        //     //         newValue.substr(newValue.length - 3);
        //     //     } else {
        //     //         this.editItemData.harga_beli = newValue;
        //     //     }
        //     // },
        //     // get: function() {
        //     //     if (this.isInputActive) {
        //     //         // ini jika focus
        //     //         return this.editItemData.harga_beli = "focus";
        //     //     } else {
        //     //         // ini jika lost focus
        //     //         return this.editItemData.harga_beli = "lost focus";
        //     //     }
        //     // },
        // }
    },
    methods: {
        // format angka
        
        formatPrice(value) {
            return new Intl.NumberFormat().format(value)
        },
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
                this.units = response.data.data_unit
                // console.log(this.units)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
                this.meta = {
                    total: getData.total,
                    current_page: getData.current_page,
                    per_page: getData.per_page,
                    from: getData.from,
                    to: getData.to 
                }
            } catch (error) {
                    console.log(''+error)
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
            this.currencyInput = this.editItemData.harga_beli;
            this.showEditDataModal();
        },

        showEditDataModal() {
            this.$refs.editDataModal.show();
        },

        hideEditDataModal() {
            this.$refs.editDataModal.hide();
        },

        updateData: async function(item){
            const formData = new FormData();
            formData.append("nama", this.editItemData.nama);
            formData.append("harga_beli", this.editItemData.harga_beli);
            formData.append("unit_id", this.editItemData.unit_id);
            formData.append("stok_awal", this.editItemData.stok_awal);
            formData.append('_method', 'put');
            // console.log(this.editItemData.id);
            try {
                const response = await itemService.updateItem(this.editItemData.id, formData)
                this.items.map(item => {
                    if (item.id === response.data.id) {
                        for (let key in response.data) {
                            item[key] = response.data[key];
                        }
                    }
                })

                // jika success tutup modal dan munculkan pesan
                this.hideEditDataModal();
                this.flashMessage.success({
                    message: "Item Updated successfully!",
                    time: 5000
                });
            } catch (error) {
                 this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
        }
    }
}

</script>