<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="sb-header-sidenav-menu">
                    <button v-on:click="hideSidebar" class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" >
                        <i class="fas fa-bars"></i>
                    </button>
                    <span>INI LOGO</span>
                </div>
                <div class="nav">
                    <div class="nav-link-ku">
                        <router-link :to="{name:'dashboard'}" class="nav-link" exact>
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            Dashboard
                        </router-link>
                    </div>

                    <div class="nav-link-ku">
                        <router-link :to="{name:'register-list'}" class="nav-link" exact>
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            User Register
                        </router-link>
                    </div>
                   
                    <div class="nav-link-ku">
                    <a class="nav-link collapsed"  href="#" data-toggle="collapse" data-target="#collapseLayouts"
                        aria-expanded="false"
                        aria-controls="collapseLayouts" >
                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                        Master Data
                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                    </a>
                    </div>
                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <div class="nav-link-ku">
                                <router-link :to="{name:'categories'}" class="nav-link" exact>Categories</router-link>
                                <router-link :to="{name:'data-items'}" class="nav-link" exact>Data Items</router-link>
                            </div>
                        </nav>
                    </div>
                    
                        
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                {{$store.state.profile.role}} Capcin
            </div>
        </nav>
    </div>
</template>

<script>
  import * as auth from '../services/auth_service';
  export default {
    methods: {
      logout: async function(){
        auth.logout();
        this.$router.push('/login');
      },

      hideSidebar: function(e) {
        e.preventDefault();
        document.querySelector("body").classList.toggle("sb-sidenav-toggled");
      }
    },

  }
</script>
