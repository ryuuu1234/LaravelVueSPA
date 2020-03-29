<template>
    <div>
        <div class="container-fluid mt-4">
            <div class="col-md-12">
                <!-- TABLE -->
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-inline">
                            <!-- <label class="mr-2">Showing</label>
                            <select
                                class="custom-select custom-select-sm"
                                v-model="per_page"
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                            </select> -->

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
                            <span class="ml-1">
                            <b-link
                                :to="{ name: 'products.add' }"
                                class="btn btn-dark btn-sm btn-flat"
                                >Tambah</b-link
                            ></span>
                        </div>
                    </div>
                
                <div class="col-md-6 mb-3">
                    <div class="form-inline float-right has-search">
                        <!-- KETIKA ADA INPUTAN PADA KOLOM PENCARIAN, MAKA AKAN MENJALANKAN FUNGSI SEARCH -->
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
                    :items="products.data"
                    :fields="fields"
                    show-empty
                    responsive="sm"
                >
                    <template v-slot:cell(actions)="row">
                        <router-link
                        :to="{
                                name: 'products.details',
                                params: { id: row.item.id }
                            }"
                        
                        class="btn btn-xxsm btn-flat btn-dark"
                        v-b-tooltip.hover
                        title="Edit Data"
                        >
                        <span class="fa fa-pencil-alt"></span>
                            Details Item Product
                        </router-link>
                        <router-link
                        :to="{
                                name: 'products.edit',
                                params: { id: row.item.id }
                            }"
                        
                        class="tombol-di-table"
                        v-b-tooltip.hover
                        title="Edit Data"
                        >
                        <span class="fa fa-edit"></span>
                        </router-link>
                        <button
                            class="tombol-di-table"
                            @click="deleteProduct(row.item.id)"
                            v-b-tooltip.hover
                            title="Hapus Data"
                        >
                            <span class="fa fa-trash"></span>
                        </button>
                        <!-- <router-link :to="{ name: 'products.order', params: {id: row.item.id} }" class="btn btn-success btn-sm"><i class="fa fa-upload"></i></router-link> -->
                    </template>
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
                                Halaman ke - {{ products.from }} dari {{ products.to }} data
                                ditemukan, dan dari {{ products.total }} data
                                keseluruhan
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                        <div class="text-right">
                            <b-pagination
                                v-model="page"
                                :total-rows="products.total"
                                :per-page="products.per_page"
                                align="right"
                                aria-controls="dw-datatable"
                                size="sm"
                                first-text="First"
                                prev-text="⏪"
                                next-text="⏩"
                                last-text="Last"
                                class="mt-4"
                                v-if="products.data && products.data.length > 0"
                            ></b-pagination>
                        </div>
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
    name: "DataProduct",
    created() {
        //SEBELUM COMPONENT DI-LOAD, REQUEST DATA DARI SERVER
        this.getProducts();
    },
    data() {
        return {
            //FIELD UNTUK B-TABLE, PASTIKAN KEY NYA SESUAI DENGAN FIELD DATABASE
            //AGAR OTOMATIS DI-RENDER
            fields: [
                { key: "name", sortable: true },
                // { key: "details", label: "Detail Items Product", class:'text-right' },
                { key: "actions", label: "Aksi", class:'text-right' },
            ],
            search: ""
        };
    },
    computed: {
        //MENGAMBIL DATA productS DARI STATE productS
        ...mapState("product", {
            products: state => state.products
        }),
        page: {
            get() {
                //MENGAMBIL VALUE PAGE DARI VUEX MODULE product
                return this.$store.state.product.page;
            },
            set(val) {
                //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE PAGE
                //DI VUEX JUGA AKAN DIUBAH
                this.$store.commit("product/SET_PAGE", val);
            }
        }
    },
    watch: {
        page() {
            //APABILA VALUE DARI PAGE BERUBAH, MAKA AKAN MEMINTA DATA DARI SERVER
            this.getProducts();
        },
        search() {
            //APABILA VALUE DARI SEARCH BERUBAH MAKA AKAN MEMINTA DATA
            //SESUAI DENGAN DATA YANG SEDANG DICARI
            this.getProducts(this.search);
        }
    },
    methods: {
        //MENGAMBIL FUNGSI DARI VUEX MODULE product
        ...mapActions("product", ["getProducts", "removeProduct"]),

        //KETIKA TOMBOL HAPUS DICLICK, MAKA AKAN MENJALANKAN METHOD INI
        deleteProduct(id) {
            //AKAN MENAMPILKAN JENDELA KONFIRMASI
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
                    this.removeProduct(id);
                }
            });
        }
    }
};
</script>
