<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="sb-header-sidenav-menu">
                    <button
                        v-on:click="hideSidebar"
                        class="btn btn-link btn-sm order-1 order-lg-0"
                        id="sidebarToggle"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <span>INI LOGO</span>
                </div>
                <div class="nav">
                    <div class="nav-link-ku">
                        <router-link
                            :to="{ name: 'dashboard' }"
                            class="nav-link"
                            exact
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            Dashboard
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <router-link
                            :to="{ name: 'register-list' }"
                            class="nav-link"
                            exact
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-registered"></i>
                            </div>
                            <span>Data Register</span>
                            <span class="badge" v-if="reg_notifs.length > 0">{{reg_notifs.length}}</span>
                        </router-link>
                    </div>
                    <div class="nav-link-ku">
                        <router-link
                            :to="{ name: 'users-list' }"
                            class="nav-link"
                            exact
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            Data User
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <router-link
                            to="/data-mitra"
                            class="nav-link"
                            exact
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-handshake"></i>
                            </div>
                            Data Mitra
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <router-link
                            to="/data-packing"
                            class="nav-link"
                            exact
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-box"></i>
                            </div>
                            Data Packing
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <router-link
                            to="/data-supplier"
                            class="nav-link"
                            exact
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-truck"></i>
                            </div>
                            Data Supplier
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseLayouts"
                            aria-expanded="false"
                            aria-controls="collapseLayouts"
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-columns"></i>
                            </div>
                            Master Data
                            <div class="sb-sidenav-collapse-arrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </a>
                    </div>
                    <div
                        class="collapse"
                        id="collapseLayouts"
                        aria-labelledby="headingOne"
                        data-parent="#sidenavAccordion"
                    >
                        <nav class="sb-sidenav-menu-nested nav">
                            <!-- <div class="nav-link-ku">
                                <router-link
                                    :to="{ name: 'categories' }"
                                    class="nav-link"
                                    exact
                                    >Categories</router-link
                                >
                            </div> -->
                            <div class="nav-link-ku">
                                <router-link
                                    :to="{ name: 'data-items' }"
                                    class="nav-link"
                                    exact
                                    >Data Items</router-link
                                >
                            </div>
                            <div class="nav-link-ku">
                                <router-link
                                    to="/products"
                                    class="nav-link"
                                    exact
                                    >Data Products</router-link
                                >
                            </div>
                            <div class="nav-link-ku">
                                <router-link
                                    to="/data-bubuk"
                                    class="nav-link"
                                    exact
                                    >Data Bubuk</router-link
                                >
                            </div>
                        </nav>
                    </div>
                    <div class="nav-link-ku">
                        <router-link to="/orders" class="nav-link" exact>
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            <span>Orders</span>
                            <span class="badge" v-if="notif_orders.length > 0">{{notif_orders.length}}</span>
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <router-link :to="{name: 'transaksi.pengeluaran-kas'}" class="nav-link" exact>
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-folder-open"></i>
                            </div>
                            <span>Tr Pengeluaran Kas</span>
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseLayouts2"
                            aria-expanded="false"
                            aria-controls="collapseLayouts"
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-book"></i>
                            </div>
                            Laporan & Jurnal
                            <div class="sb-sidenav-collapse-arrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </a>
                    </div>


                    <div
                        class="collapse"
                        id="collapseLayouts2"
                        aria-labelledby="headingOne"
                        data-parent="#sidenavAccordion"
                    >
                        <nav class="sb-sidenav-menu-nested nav">
                            <div class="nav-link-ku">
                                <router-link
                                    :to="{ name: 'laporan-penjualan.mitra' }"
                                    class="nav-link"
                                    exact
                                    >Laporan Penjualan Mitra
                                </router-link>
                            </div>
                            <div class="nav-link-ku">
                                <router-link
                                    :to="{ name: 'laporan-penjualan.admin' }"
                                    class="nav-link"
                                    exact
                                    >Laporan Penjualan Product
                                </router-link>
                            </div>
                            <div class="nav-link-ku">
                                <router-link
                                    :to="{ name: 'laporan-keuangan.admin' }"
                                    class="nav-link"
                                    exact
                                    >Laporan Keuangan
                                </router-link>
                            </div>
                        </nav>
                    </div>

                    <div class="nav-link-ku">
                        <a
                            class="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseLayouts3"
                            aria-expanded="false"
                            aria-controls="collapseLayouts"
                        >
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            Settings
                            <div class="sb-sidenav-collapse-arrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </a>
                    </div>


                    <div
                        class="collapse"
                        id="collapseLayouts3"
                        aria-labelledby="headingOne"
                        data-parent="#sidenavAccordion"
                    >
                        <nav class="sb-sidenav-menu-nested nav">
                            <div class="nav-link-ku">
                                <router-link
                                    :to="{ name: 'beban.settings' }"
                                    class="nav-link"
                                    exact
                                    >settings Beban
                                </router-link>
                            </div>
                            
                        </nav>
                    </div>


                </div>

                


                
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                {{ $store.state.profile.role }} Capcin
            </div>
        </nav>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    created(){
        this.getRegNotif();
        this.getOrderNotif();
    },
    methods: {
        
        logout: async function() {
            auth.logout();
            this.$router.push("/login");
        },

        hideSidebar: function(e) {
            e.preventDefault();
            document
                .querySelector("body")
                .classList.toggle("sb-sidenav-toggled");
        },

        ...mapActions("notification", ["getRegNotif", "getOrderNotif"]),

    },

    mounted(){
        
        window.Echo.channel('capcin-reg')
        .listen('RegisterEvent', (register) => {
            this.getRegNotif();
        });
        // echo channel order
        window.Echo.channel('capcin-tracker')
        .listen('OrderStatusChanged', (order) => {
            // console.log(order);
            this.getOrderNotif();
        });
    },
    computed: {
         ...mapState("notification", {
            reg_notifs: state => state.reg_notif,
            notif_orders: state => state.notif_orders
        }),
        
    },
};
</script>

<style scoped>
.nav-link-ku .badge{
    position: absolute;
    right: 15px;
    color:white;
    border-radius: 30%;
    font-size: 10px;
    background-color: rgb(241, 53, 69);
}
</style>
