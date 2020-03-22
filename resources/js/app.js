import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";

// plugins
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import FlashMessage from '@smartweb/vue-flash-message';

import VueSweetalert2 from 'vue-sweetalert2';

import vueNumeralFilterInstaller from 'vue-numeral-filter';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(FlashMessage);
Vue.use(VueSweetalert2);

Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });

// export const bus = new Vue(); //

import { mapState, mapGetters, mapActions } from 'vuex';
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
    created(){
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.MIX_PUSHER_APP_KEY,
            cluster: process.env.MIX_PUSHER_APP_CLUSTER,
            // forceTLS: true
            // authEndpoint: "/broadcasting/auth",
            // auth: {
            //     headers: {
            //         Authorization: 'Bearer ' + this.token
            //     },
            // },
        });
        // this.consoleToken();
    },
    // mounted(){
    //     window.Echo.channel('capcin-tracker')
    //     .listen('OrderStatusChanged', (e) => {
    //         console.log('realtime');
    //     });
    // }
    // computed:{
    //     ...mapGetters(['isAuth']),
    //     ...mapState(['token']), //GET TOKEN
    //     ...mapState('user', {
    //         user_authenticated: state=> state.authenticated
    //     })
    // },
    // methods:{
    //     consoleToken(){
    //         console.log(this.token)
    //     }
    // },
    // methods:{
    //     ...mapActions('user',['getUserLogin']),
    //     ...mapActions('notification', ['getNotifications']), //DEFINISIKAN FUNGSI UNTUK MENGAMBIL NOTIFIKASI DARI TABLE NOTIFICATIONS
    //     ...mapActions('order', ['getNewOrder']), //FUNGSI UNTUK MENGAMBIL Order YANG BARU

    //     //METHOD INI UNTUK MENGISIASI LISTER MENGGUNAKAN LARAVEL ECHO
    //     initialLister() {
    //         //JIKA USER SUDAH LOGIN
    //         // if (this.isAuth) {
    //         //     //MAKA INISIASI FUNGSI BROADCASTER DENGAN KONFIGURASI BERIKUT
    //         //     window.Echo = new Echo({
    //         //         broadcaster: 'pusher',
    //         //         key: process.env.MIX_PUSHER_APP_KEY, //VALUENYA DI AMBIL DARI FILE .ENV
    //         //         cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    //         //         encrypted: true,
    //         //         // auth: {
    //         //         //     headers: {
    //         //         //         Authorization: 'Bearer ' + this.token
    //         //         //     },
    //         //         // },
    //         //     });
    //         //     // if (typeof this.user_authenticated.id != 'undefined') {
    //         //     //     //KEMUDIAN KITA MENGAKSES CHANNEL BROADCAST SECARA PRIVATE
    //         //     //     window.Echo.private(`App.User.${this.user_authenticated.id}`)
    //         //     //     .notification(() => {
    //         //     //         //APABILA DITEMUKAN, MAKA KITA MENJALANKAN KEDUA FUNGSI INI
    //         //     //         //UNTUK MENGAMBIL DATA TERBARU
    //         //     //         this.getNotifications()
    //         //     //         this.getNewOrder()
    //         //     //     })
    //         //     // }
    //         // }
    //         window.Echo = new Echo({
    //             broadcaster: 'pusher',
    //             key: process.env.MIX_PUSHER_APP_KEY,
    //             cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    //             // forceTLS: true
    //         });
    //     }
    // },
    
    // watch: {
    //     //KITA WATCH KETIKA VALUE TOKEN BERUBAH, MAKA 
    //     token() {
    //         this.initialLister() //KITA JALANKAN FUNGSI UNTUK MENGINISIASI LAGI
    //     },
    //     //KETIKA VALUE USER YANG SEDANG LOGIN BERUBAH
    //     user_authenticated() {
    //         this.initialLister() //KITA JALANKAN LAGI
    //     }
    // },
    // created(){
    //     if (this.isAuth) {
    //         this.getUserLogin();
    //         //TAMBAHKAN BAGIAN INI KETIKA COMPONENT DILOAD
    //         this.initialLister()
    //         this.getNotifications()
    //     }
    // },
});
