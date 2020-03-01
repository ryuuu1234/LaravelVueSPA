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

export const bus = new Vue();

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
