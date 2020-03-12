<template>
    <div class="col-md-12">
        <div class="panel">
            <div class="panel-heading">
                <b-link
                    :to="{ name: 'products.add' }"
                    class="btn btn-dark btn-sm btn-flat"
                    >Tambah</b-link
                >
                <div class="pull-right">
                    <!-- <input type="text" class="form-control" placeholder="Cari..." v-model="search"> -->
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
            </div>
            <div class="panel-body">
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
                                name: 'products.edit',
                                params: { id: row.item.id }
                            }"
                            class="btn btn-warning btn-sm"
                            ><i class="fa fa-pencil-alt"></i
                        ></router-link>
                        <button
                            class="btn btn-danger btn-sm"
                            @click="deleteProduct(row.item.id)"
                        >
                            <i class="fa fa-trash"></i>
                        </button>
                        <!-- <router-link :to="{ name: 'products.order', params: {id: row.item.id} }" class="btn btn-success btn-sm"><i class="fa fa-upload"></i></router-link> -->
                    </template>
                </b-table>

                <div class="row">
                    <div class="col-md-6">
                        <p v-if="products.data">
                            <i class="fa fa-bars"></i>
                            {{ products.data.length }} item dari
                            {{ products.total }} total data
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="pull-right">
                            <b-pagination
                                v-model="page"
                                :total-rows="products.total"
                                :per-page="products.per_page"
                                aria-controls="products"
                                v-if="products.data && products.data.length > 0"
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
                { key: "actions", label: "Aksi" }
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
