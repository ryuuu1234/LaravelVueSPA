<template>
    <main>
        <div class="container-fluid">
            <!-- <ol class="breadcrumb mb-4 mt-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol> -->
            <div class="row">
                <div class="col-md-12">
                    <div class="content-dark mt-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="avatar-profile">
                                            
                                            <img class="avatar-ku"
                                                :src="displayImage" 
                                                ref="displayAvatarImage"
                                                alt="avatar">
                                            <div class="edit-avatar">
                                               
                                                <input type="file" 
                                                    ref="editAvatar" 
                                                    id="image"
                                                    @change="attachImage"
                                                    >
                                                <label for="image"> Change Avatar
                                                </label>
                                               
                                            </div>    
                                            <!-- <button type="submit"
                                                @click.prevent="saveImage" 
                                            >Simpan Foto</button> -->
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group-ku">
                                            <label class="lbl-form-ku" for="name">Nama</label>
                                            <input 
                                                type="text" id="name" class="form-control-customku" placeholder="Nama User"
                                                v-model="user.name"    
                                                >
                                            <div class="invalid-feedback" v-if="errors.name">
                                                {{ errors.name[0] }}
                                            </div>
                                        </div>
                                        <div class="form-group-ku">
                                            <label class="lbl-form-ku" for="email">Email</label>
                                            <input 
                                                type="text" id="email" class="form-control-customku" placeholder="Email"
                                                v-model="user.email"    
                                                >
                                        </div>
                                        <hr class="batas-dark"/>
                                        <div class="text-right">
                                            <button type="submit" class="btn btn-danger btn-xsm"
                                                @click.prevent="togleUpdateForm"
                                            >Simpan Perubahan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">isinya tabel</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

import * as auth from '../services/auth_service';
export default {

    created() {
        //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
        this.loadProfile()
    },
    mounted() {
        this.loadImage()
    },

    data() {
        return {
            user:{},
            errors:[],
            displayImage:'',
        }
    },

    methods: {

        loadImage: function(){
            let image = this.$store.state.profile.image;
            if (image !== null) {
                return this.displayImage = `${this.$store.state.serverPath}/storage/${image}`;
            }
            return this.displayImage = `${this.$store.state.serverPath}/storage/galleries_images/nouser.png`;
        },

        attachImage: async function() {
            this.user.image = this.$refs.editAvatar.files[0];
            let reader = new FileReader();

            reader.addEventListener("load", function() {
                    this.$refs.displayAvatarImage.src = reader.result;
                }.bind(this),false);

            reader.readAsDataURL(this.user.image);

            const formData = new FormData();
            formData.append("image", this.user.image);
            formData.append('_method', 'put');
            
            try {
                const response = await auth.updateImage(this.user.id, formData);
                 this.flashMessage.success({
                    message: "Avatar has been updated successfully!",
                    time: 5000
                });
            } catch (error) {
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
            
        },

        // saveImage: async function(data) {
            
        // },
        loadProfile: function() {
            const data = this.$store.state.profile;
            this.user = data
            this.$store.state.errors;
        },

        togleUpdateForm: async function(data) {
            try {
                const response = await auth.updateProfile(this.user.id, this.user);
                this.flashMessage.success({
                    message: "Profile Updated successfully!",
                    time: 5000
                });
                this.user = {
                    name:response.data.name,
                    email:response.data.email,
                }
                this.errors = [];
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
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
    }
    
}
</script>

