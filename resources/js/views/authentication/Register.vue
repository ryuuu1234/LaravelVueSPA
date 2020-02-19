<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light my-1">Create Account</h3>
                </div>
                <div class="card-body">
                  <form v-on:submit.prevent="register">
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-label-group">
                                <small><label for="name">Enter Fullname</label></small> 
                                <input
                                    v-model="user.name"
                                    class="form-control py-4"
                                    id="name"
                                    type="text"
                                    placeholder="Enter Fullname"
                                    autofocus="autofocus"
                                />
                                <div class="invalid-feedback" v-if="errors.name">
                                {{ errors.name[0] }}
                            </div>  
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-label-group">
                                <small><label for="email">Enter Email</label> </small>
                                <input
                                    v-model="user.email"
                                    class="form-control py-4"
                                    id="email"
                                    type="text"
                                    placeholder="Enter Email address"
                                />
                                <div class="invalid-feedback" v-if="errors.email">
                                {{ errors.email[0] }}
                            </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-label-group">
                                <small><label for="password">Password</label></small>
                                <input
                                    v-model="user.password"
                                    class="form-control py-4"
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                />
                                <div class="invalid-feedback" v-if="errors.password">
                                {{ errors.password[0] }}
                            </div>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-label-group">
                                <small><label for="password_confirmation">Confirm Password</label></small>
                                <input
                                    v-model="user.password_confirmation"
                                    class="form-control py-4"
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Confirm password"
                                />
                                <div class="invalid-feedback" v-if="errors.password_confirmation">
                                {{ errors.password_confirmation[0] }}
                            </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group mt-4 mb-0">
                      <button type="submit"
                        class="btn btn-primary btn-block"
                      >Create Account</button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center">
                  <div class="small">
                    <router-link :to="{name:'login'}">Have an account? Go to login</router-link>
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
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: {}
    };
  },
  methods: {
      register: async function(){
          try {
            await auth.register(this.user);
            this.errors = {};
            this.$router.push('/login');
          } catch (error) {
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
                default:
                    this.flashMessage.error({
                        message: "Some error occured, Please Try Again!",
                        time: 5000
                    });
                    break;
            }        
          }
      }
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#343a40";
  },
};
</script>