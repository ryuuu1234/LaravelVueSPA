<template>
  <div>
    <div class="container-fluid mt-4">
      <div class="col-md-12">
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
          @createdData="addData"
          @removedSelected="hapusDataTerseleksi"
          @selectedId="selectedDataId"
          :tombolAddNew="tombolAddNew"
          :tombolEdit="tombolEdit"
          :isBusy="showLoading" />
      </div>
    </div>
    <!-- Edit Modal form -->
    <b-modal ref="editDataModal" hide-footer title="Edit Item">
      <div class="d-block">
        <form v-on:submit.prevent="updateData">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group-sm mb-2">
                <label for="nama">Nama Product</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="nama"
                  placeholder="Nama Produk"
                  v-model="editItemData.name"
                />
                <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
              </div>
            </div>

            <div class="col-md-8">
              <div class="form-group-sm">
                <label for="harga">Harga</label>

                <input-number
                  class="form-control form-control-sm"
                  id="harga"
                  placeholder="Masukkan Harga Beli Item"
                  v-model="currencyInput"
                ></input-number>

                <div class="invalid-feedback" v-if="errors.harga">{{ errors.harga[0] }}</div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group-sm">
                <label for="stok_awal">Stok Awal</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="stok awal"
                  v-model="editItemData.stok_awal"
                />
                <div class="invalid-feedback" v-if="errors.stok_awal">{{ errors.stok_awal[0] }}</div>
              </div>
            </div>

            <div class="col-md-12 mt-2">
              <div class="form-group-sm">
                <label for="description">Deskripsi</label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  placeholder="masukkan Keterangan"
                  v-model="editItemData.description"
                ></textarea>

                <div class="invalid-feedback" v-if="errors.description">{{ errors.description[0] }}</div>
              </div>
            </div>
          </div>

          <hr />
          <div class="text-right">
            <button
              type="button"
              class="btn btn-danger btn-sm"
              v-on:click="hideEditDataModal"
            >Cancel</button>
            <button type="submit" class="btn btn-dark btn-sm">
              <span class="fa fa-check"></span>
              {{ textButton }}
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Datatable from "../components/khusus/Datatable.vue"; //IMPORT COMPONENT DATATABLENYA
// import MyCurrencyInput from '../components/khusus/MyCurrencyInput.vue'
import InputNumber from "../components/khusus/InputNumber.vue";
// import axios from 'axios';
import * as itemService from "../services/product_service";

export default {
  components: {
    "app-datatable": Datatable, //REGISTER COMPONENT DATATABLE
    // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
    "input-number": InputNumber
  },
  //KETIKA COMPONENT INI DILOAD
  created() {
    //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
    this.loadItemsData();
    this.kosongkanForm();
    // this.handleLoading(true)
  },

  data() {
    return {
      //UNTUK VARIABLE FIELDS, DEFINISIKAN KEY UNTUK MASING-MASING DATA DAN SORTABLE BERNILAI TRUE JIKA INGIN MENAKTIFKAN FITUR SORTING DAN FALSE JIKA TIDAK INGIN MENGAKTIFKAN
      // input:"10000",
      methodForms: "Add",
      // labelButton: "",
      fields: [
        { key: "index", label: "index" },
        { key: "name", sortable: true },
        // {key: 'unit.nama', label:'Satuan'},
        {
          key: "harga",
          label: "Harga",
          formatter: (value, key, item) => {
            return "Rp " + new Intl.NumberFormat().format(item.harga);
          },
          sortable: true,
          class: "text-right"
        },
        { key: "stok_awal", sortable: true, class: "text-right" },
        { key: "actions", label: "Actions", class: "text-right" }
      ],
      items: [], //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
      units: [], //DATA UNIT
      meta: [], //JUGA BERLAKU UNTUK META
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 5, //DEFAULT LOAD PERPAGE ADALAH 5
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING

      editItemData: {},
      errors: [],
      currencyInput: "", // husus input angka
      isInputActive: false,

      selectedRowsId: [],

      // pengaturan tombol
      tombolAddNew: true,
      tombolEdit: true,
      showLoading: false
    };
  },

  computed: {
    textButton: function() {
      return this.methodForms == "Add" ? "Save" : "Update";
    }
  },

  methods: {
    selectedDataId: function(item) {
      // console.log('ok')
    },
    // remove select
    hapusDataTerseleksi: async function(val) {
      if (
        !window.confirm(`Are you sure you want to delete this selection data ?`)
      ) {
        return;
      }
      const params = { items: val };
      try {
        await itemService.deleteAllSelected(params);

        val.map(val => {
          const index = this.items.indexOf(val);
          this.items.splice(index, 1);
        });

        // this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT
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

    //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
    loadItemsData: async function() {
      this.showLoading = true;
      // this.handleLoading(true);
      let current_page = this.search == "" ? this.current_page : 1;
      let sorting = this.sortByDesc ? "DESC" : "ASC";
      // let
      let params = {
        params: {
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: sorting
        }
      };
      try {
        const response = await itemService.loadData(params);
        console.dir(response);
        let getData = response.data.data;
        this.items = getData.data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
        this.units = response.data.data_unit;
        // console.log(this.units)
        // console.log(this.items[0].nama);
        //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
        this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to
        };
        this.showLoading = false;
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "Some error occured, Please Refresh!",
          time: 5000
        });
        this.showLoading = false;
      }
    },

    //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
    handlePerPage(val) {
      this.per_page = val; //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
      this.loadItemsData(); //DAN REQUEST DATA BARU KE SERVER
    },
    //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
    handlePagination(val) {
      this.current_page = val; //SET CURRENT PAGE YANG AKTIF
      this.loadItemsData();
    },
    //JIKA ADA DATA PENCARIAN
    handleSearch(val) {
      this.search = val; //SET VALUE PENCARIAN KE VARIABLE SEARCH
      this.loadItemsData(); //REQUEST DATA BARU
    },

    // handleLoading(val) {
    //     console.log(val);
    // },
    //JIKA ADA EMIT SORT
    handleSort(val) {
      //MAKA SET SORT-NYA
      this.sortBy = val.sortBy;
      this.sortByDesc = val.sortDesc;

      this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT
    },

    removeData: async function(item) {
      if (!window.confirm(`Are you sure you want to delete ${item.name} ?`)) {
        return;
      }

      try {
        await itemService.deleteItem(item.id);

        // this.items = this.items.filter(obj => {
        //     return obj.id != item.id;
        // });
        this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT

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
      this.editItemData = { ...item };
      // this.currencyInput = this.editItemData.harga_beli;
      this.currencyInput = String(this.editItemData.harga);
      this.methodForms = "Edit";
      this.showEditDataModal();
    },

    addData() {
      this.methodForms = "Add";
      this.kosongkanForm();
      this.showEditDataModal();
    },

    showEditDataModal() {
      this.$refs.editDataModal.show();
    },

    hideEditDataModal() {
      this.$refs.editDataModal.hide();
    },

    kosongkanForm() {
      this.editItemData.name = "";
      // this.editItemData.unit_id = "";
      this.editItemData.harga = "";
      this.editItemData.stok_awal = "";
      this.editItemData.description = "";
      this.currencyInput = "";
    },

    // create dan update data
    updateData: async function(item) {
      const formData = new FormData();
      formData.append("name", this.editItemData.name);
      formData.append("harga", this.currencyInput);
      formData.append("description", this.editItemData.description);
      formData.append("stok_awal", this.editItemData.stok_awal);

      if (this.methodForms == "Add") {
        // ini untuk Add data
        try {
          const response = await itemService.createItem(formData);
          //    jika sukses
          //    this.items.unshift(response.data);
          this.loadItemsData();
          this.hideEditDataModal();
          this.kosongkanForm();
          this.flashMessage.success({
            message: "Category stored successfully!",
            time: 5000
          });
        } catch (error) {
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.errors;
              break;

            default:
              this.flashMessage.error({
                message: "Some error occured, Please Try Again!",
                time: 5000
              });
              break;
          }
        }
      } else {
        // ini untuk edit data
        formData.append("_method", "put");
        try {
          const response = await itemService.updateItem(
            this.editItemData.id,
            formData
          );
          this.items.map(item => {
            if (item.id === response.data.id) {
              for (let key in response.data) {
                item[key] = response.data[key];
              }
            }
          });

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
};
</script>
