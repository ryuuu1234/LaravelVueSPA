<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <button v-on:click="hideSidebar" class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" >
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
        <a
          class="nav-link dropdown-toggle"
          id="userDropdown"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
            <span class="mega-image">
                <img :src="`${$store.state.serverPath}/storage/galleries_images/nouser.png`" alt="example image">               
            </span>
          
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#">Settings</a>
          <a class="dropdown-item" href="#">Activity Log</a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" v-on:click="logout">Logout</button>
        </div>
      </li>
    </ul>
  </nav>
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
