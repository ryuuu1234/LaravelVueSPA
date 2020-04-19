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
                    <div class="row">
                        <div class="col-md-4">
                            <form>
                                <div class="form-group-sm mb-2">
                                    <select class="form-control" v-model="form.beban_id">
                                        <option value="">Pilih Jenis Beban / Biaya</option>
                                        <option v-for="sel in beban_dropdowns" :key="sel.id" :value="sel.id">{{sel.nama}}</option>
                                    </select>
                                    <div class="invalid-feedback" v-if="errors.beban_id">
                                        {{ errors.beban_id[0] }}
                                    </div>
                                </div>
                                <div class="form-group-sm mb-2">
                                    <label for="nama">Jumlah(Rp)</label>
                                    <input-number class="form-control"  v-model="form.jumlah"></input-number>
                                    <div class="invalid-feedback" v-if="errors.jumlah">
                                        {{ errors.jumlah[0] }}
                                    </div>
                                </div>
                                <div class="form-group-sm mb-2">
                                    <label for="nama">Keterangan</label>
                                    <textarea class="form-control" rows="3"  v-model="form.keterangan"></textarea>
                                    <div class="invalid-feedback" v-if="errors.keterangan">
                                        {{ errors.keterangan[0] }}
                                    </div>
                                </div>
                            </form>
                            <hr class="batas-dark"/>
                            <div>
                                <button class="btn btn-dark btn-xsm" :disabled="disable" @click.prevent="simpanData">
                                    <div v-if="disable" class="spinner-border spinner-border-sm" role="status">
                                        <span class="sr-only">Loading...</span></div>
                                    Simpan Data
                                </button>
                                <button class="btn btn-danger btn-xsm" @click="cancelForm">Cancel</button>
                            </div>
                        </div>
                        <div class="col-md-8">
                           <div class="kolom-kanan">
                                <h6>Pengeluaran Kas Hari ini</h6>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th width="10%">#</th>
                                            <th>Keterangan</th>
                                            <th class="text-right">Jumlah(Rp)</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="pengeluaran_kas.length > 0">
                                        <tr v-for="(kas, row) in pengeluaran_kas" :key="kas.id">
                                            <td>
                                                <button
                                                    class="tombol-di-table"
                                                    @click="editForm(kas.id)"
                                                    v-b-tooltip.hover
                                                    title="Edit Data"
                                                >
                                                    <span class="fa fa-edit"></span>
                                                </button>
                                                <button
                                                    class="tombol-di-table"
                                                    @click="deleteData(kas.id)"
                                                    v-b-tooltip.hover
                                                    title="Hapus Data"
                                                >
                                                    <span class="fa fa-trash"></span>
                                                </button>
                                            </td>
                                            <td>{{row+1}} -  <i style="color:gray">{{kas.beban.nama}}</i> - {{kas.keterangan}}</td>
                                            <td class="text-right">{{kas.jumlah | numeral(0,0)}}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" class="text-right"><i>Total Pengeluaran Hari ini (Rp) </i>: <b>{{total | numeral(0,0)}} </b></td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr>
                                            <td colspan="3" class="text-center"><i>Belum Ada data untuk hari ini </i></td>
                                        </tr>
                                    </tbody>
                                </table>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
    import InputNumber from '../../components/khusus/InputNumber';
    export default {
    name: "PengeluaranKas",
    components: {
        'input-number': InputNumber
    },
    created(){
        this.getBebanAll();
        this.getPengeluaranToday();
    },
    data(){
        return {
            method:'Add',
        }
    },
    computed:{
        ...mapState("beban", {
            beban_dropdowns: state => state.beban_dropdowns,
        }),
        ...mapState("pengeluaran", ["form", "disable","pengeluaran_kas"]),
        ...mapState(['errors']), //MENGAMBIL STATE ERRORS
        ...mapGetters("pengeluaran", ['total']),
    },
    methods:{
        ...mapActions("beban", ["getBebanAll"]),
        ...mapActions("pengeluaran", ["saveData", "getPengeluaranToday", "editData", "updateData", "removeData"]),
        ...mapMutations("pengeluaran", ["CLEAR_FORM"]),
        ...mapMutations(["CLEAR_ERRORS"]),
        simpanData(){
            if (this.method == 'Add') {
                this.saveData();
            } else {
                this.updateData(this.$store.state.pengeluaran.form.id)
                .then(() => {
                    this.method = 'Add';
                });
            }
        },
        editForm(val){
            this.editData(val)
            .then(() => {this.method = "Update"});
        },
        cancelForm(){
            this.method == 'Add';
            this.CLEAR_FORM();
            this.CLEAR_ERRORS();
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
        },
    },
    watch:{}
        
    }
</script>

<style lang="scss" scoped>
.kolom-kanan {
    border-left: 1px solid lightgray;
    min-height: 20rem;
    padding-left: 1rem;
}
</style>