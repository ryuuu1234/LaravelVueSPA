<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        props: ['data', 'options', 'labels'], //KETIKA COMPONENT INI DIGUNAKAN, AKAN MEMINTA DATA SEBAGAI PROPS
        mounted() {
            this.lineRenderChart() //KETIKA COMPONENT DI-LOAD JALANKAN METHOD INI
        },
        watch: {
            //KETIKA TERJADI PERUBAHAN VALUE DARI PROPS DATA
            data: {
                handler() {
                    this._data._chart.destroy() //MAKA HAPUS CHART
                    this.lineRenderChart() //DAN RENDER KEMBALI DENGAN DATA YANG BARU
                },
                deep: true
            }
        },
        methods: {
            lineRenderChart() {
                //FUNGSI UNTUK MERENDER CHART
                this.renderChart({
                    labels: this.labels, //LABELS NYA BERDASARKAN PROPS LABELS (VALUENYA AKAN KITA ISI LIST TANGGAL SELAMA 1 BULAN)
                    datasets: [{
                        label: 'Statistik Penjualan',
                        data: this.data, //DATA YANG AKAN MENJADI CHART (TOTAL TRANSAKSI PERHARI)
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1
                    }]
                }, this.options)
            }
        }
    }
</script>