<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light my-1">Login</h3>
                </div>
                <div class="card-body">
                  <form 
                    v-on:submit.prevent="login">
                    <div class="form-group">
                      <label class="small mb-1" for="email">Email</label>
                      <input
                        class="form-control py-4"
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        v-model="user.email"
                        autocomplete="off"
                      />
                      <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>  
                    </div>
                    <div class="form-group">
                      <label class="small mb-1" for="password">Password</label>
                      <input
                        class="form-control py-4"
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        v-model="user.password"
                      />
                      <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>  
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="remember_me"
                          type="checkbox"
                          v-model="user.remember_me"
                        />
                        <label
                          class="custom-control-label"
                          for="remember_me"
                        >Remember password</label>
                      </div>
                    </div>
                      <button type="submit" class="btn btn-primary btn-block">Login</button>
                    <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                      <router-link :to="{name:'reset-password'}" class="small">Forgot Password?</router-link>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center">
                  <div class="small">
                    <router-link :to="{name:'register'}">Need an account? Sign up!</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import * as auth from '../../services/auth_service';

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember_me: false
      },
      errors: {},
    };
  },

  

  methods: {
      login: async function() {
          try {
            const response = await auth.login(this.user);
            this.token_scope(response.token_scope);
            this.errors = {};
          } catch (error) {
            //   console.log(''+error); // ini untuk cek errornya apa
             switch (error.response.status) 
            {
                case 422:
                    this.errors = error.response.data.errors;
                    break;
                case 500:
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                    break;
                case 401:
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                    break;     
                default:
                    this.flashMessage.error({
                        message: "Some error occured, Please Try Again!",
                        time: 5000
                    });
                    break;
            }         
          }
      },
      logout: async function(){
        auth.logout();
        // this.$router.push('/login');
      },

      token_scope: function(item){
        if (item == 'Admin' || item == 'Root') {
           this.$router.push('/home');
        } else {
           this.flashMessage.error({
                message: "Kamu Bukan Administrator, tidak bisa login",
                time: 5000
            });
          this.logout();
        }
      }
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#343a40";
  }
};
</script>