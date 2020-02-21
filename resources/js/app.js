import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import FlashMessage from '@smartweb/vue-flash-message';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(FlashMessage);

Vue.filter('currency', function (money) {
    return accounting.formatMoney(money, "Rp ", 2, ".", ",")
})

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
