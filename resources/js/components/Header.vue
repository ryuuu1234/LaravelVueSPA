<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <button v-on:click="hideSidebar" class="btn btn-link btn-sm order-0 order-lg-0" id="sidebarToggle" >
      <i class="fas fa-bars"></i>
    </button>
    <span class="navbar-brand" >{{$store.state.profile.name}}</span>
    
    <!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control-search" placeholder="Search">
      </div>
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item dropdown">
        <!-- <a
          class="nav-link dropdown-toggle"
          id="userDropdown"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        > -->
        <a 
          class="mega-link"
          @click="toggle"
        >
            <span class="mega-image">
                <img :src="`${$store.state.serverPath}/storage/galleries_images/nouser.png`" alt="example image">               
            </span>
          
        </a>
        <!-- <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#">Settings</a>
          <a class="dropdown-item" href="#">Activity Log</a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" v-on:click="logout">Logout</button>
        </div> -->
        <div class="vd_mega-menu-content  width-xs-2  left-xs left-sm"
            v-if="dropMenu"
        >
        <div class="child-menu"> 
        	<div class="content-list content-menu">
                <ul class="list-wrapper pd-lr-10">
                    <li @click="toggle"> <router-link :to="{name:'profile-user'}"> <div class="menu-icon"><i class=" fa fa-user"></i></div> <div class="menu-text">Edit Profile</div> </router-link> </li>
                     
                    <li class="line"></li>
                    
                    <li> <a href="javascript:void(0)"> <div class="menu-icon"><i class="  fa fa-key"></i></div> <div class="menu-text">Lock</div> </a> </li>
                    <li> <a href="javascript:void(0)" @click="logout"> <div class="menu-icon"><i class=" fa fa-sign-out"></i></div>  <div class="menu-text">Sign Out</div> </a> </li>
                    
                </ul>
            </div> 
        </div> 
      </div>
      </li>
    </ul>
  </nav>
</template>

<script>
  import * as auth from '../services/auth_service';

  export default {
   
    data(){
      return {
        dropMenu: false,
      }
    },
    created() {
      window.addEventListener("click", this.close);
    },

    beforeDestroy() {
      window.removeEventListener("click", this.close);
    },
    methods: {
      logout: async function(){
        auth.logout();
        this.$router.push('/login');
      },

      toggle: function(){
        this.dropMenu = !this.dropMenu;
      },

      close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropMenu = false;
        }
      },

      hideSidebar: function(e) {
        e.preventDefault();
        document.querySelector("body").classList.toggle("sb-sidenav-toggled");
      }
    },

  }
</script>
