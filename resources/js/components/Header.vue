<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <button v-on:click="hideSidebar" class="btn btn-link btn-sm order-0 order-lg-0" id="sidebarToggle" >
      <i class="fas fa-bars"></i>
    </button>
    <span class="navbar-brand" >{{$store.state.profile.name}}</span>
    
    <!-- Navbar Search-->
    <!-- <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control-search" placeholder="Search">
      </div>
    </form> -->
    <!-- Navbar-->
    <ul class="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <li class="nav-item dropdown">
        <a class="mega-link">
            <span class="mega-icon"><i class="fa fa-bell"></i></span>
            <span class="badge">{{ notifications.length }}</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a 
          class="mega-link"
          @click="toggle"
        >
            <span class="mega-image">
                <img :src="`${this.$store.state.serverPath}/storage/${$store.state.profile.image}`" alt="example image">               
            </span>
          
        </a>
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
// import {bus} from '../app';
  import * as auth from '../services/auth_service';
  import { mapState, mapActions } from 'vuex';
  import moment from 'moment'
  export default {
   
    data(){
      return {
        dropMenu: false,
        displayImage: ''
      }
    },
    created() {
      window.addEventListener("click", this.close);
      
    },

    beforeDestroy() {
      window.removeEventListener("click", this.close);
    },
    computed: {
    ...mapState('user', {
        authenticated: state => state.authenticated
      }),
      
      //CUKUP TAMBAHKAN BAGIAN INI
      ...mapState('notification', {
          notifications: state => state.notifications //MENGAMBIL STATE NOTIFICATIONS
      })
    },
    //TAMBAHKAN JUGA BAGIAN INI
    filters: {
        //UNTUK MENGUBAH FORMAT TANGGAL MENJADI TIME AGO
        formatDate(val) {
            return moment(new Date(val)).fromNow()
        }
    },
    methods: {
        ...mapActions('notification', ['readNotification']), //DEFINISIKAN FUNGSI UNTUK READ NOTIF
        
        //KETIKA NOTIFIKASI DI KLIK MAKA AKAN MENJALANKAN FUNGSI INI
        readNotif(row) {
            //MENGIRIMKAN REQUEST KE SERVER UNTUK MENANDAI BAHWA NOTIFIKASI TELAH DI BACA
            //KEMUDIAN SELANJUTNYA KITA REDIRECT KE HALAMAN VIEW EXPENSES
            this.readNotification({ id: row.id}).then(() => this.$router.push({ name: 'expenses.view', params: {id: row.data.expenses.id} }))
        },
        
        //[.. CODE SETELAHNYA ..]


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
    }

  }
</script>
