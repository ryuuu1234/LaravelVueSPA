<template>
    <main>
        <div class="container-fluid">
            <br />
            <div class="row">
                <div class="col-xl-12">
                    <div class="card mb-4">
                        <div class="card-header d-flex">
                            <span>
                                <i class="fas fa-chart-area mr-1"></i>
                                Categories Management
                            </span>
                            <button
                                class="btn btn-primary btn-sm ml-auto"
                                v-on:click="showNewCategoryModal"
                            >
                                <span class="fa fa-plus"></span>
                                Create New
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Image</td>
                                <td>Option</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(category, index) in categories"
                                :key="index"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ category.name }}</td>
                                <td>
                                    <img
                                        class="table-image"
                                        :src="
                                            `${$store.state.serverPath}/storage/${category.image}`
                                        "
                                        :alt="category.name"
                                    />
                                </td>
                                <td>
                                    <button
                                        class="btn btn-sm btn-primary"
                                        v-on:click="editCategory(category)"
                                    >
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button
                                        class="btn btn-sm btn-danger"
                                        v-on:click="deleteCategory(category)"
                                    >
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center" v-show="moreExist">
                        <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore">
                            <span class="fa fa-arrow-down"></span> Load more
                        </button>
                    </div>
                </div>
            </div>
            <!-- create modal form -->
            <b-modal
                ref="newCategoryModal"
                hide-footer
                title="Add new Category">
                <div class="d-block">
                    <form v-on:submit.prevent="createCategory">
                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="Enter Category Name"
                                v-model="categoryData.name"
                            />
                            <div class="invalid-feedback" v-if="errors.name">
                                {{ errors.name[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="image">Choose image</label>
                            <div v-if="this.categoryData.image">
                                <img
                                    src=""
                                    ref="newCategoryImageDisplay"
                                    class="w-150"
                                />
                            </div>
                            <input
                                type="file"
                                class="form-control"
                                id="image"
                                v-on:change="attachImage"
                                ref="newCategoryImage"
                            />
                            <div class="invalid-feedback" v-if="errors.image">
                                {{ errors.image[0] }}
                            </div>
                        </div>
                        <hr />
                        <div class="text-right">
                            <button
                                type="button"
                                class="btn btn-dark"
                                v-on:click="hideNewCategoryModal"
                            >
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-primary">
                                <span class="fa fa-check"></span> Save
                            </button>
                        </div>
                    </form>
                </div>
            </b-modal>
        

        <!-- Edit Modal form -->
            <b-modal
                ref="editCategoryModal"
                hide-footer
                title="Edit Category">
                <div class="d-block">
                    <form v-on:submit.prevent="updateCategory">
                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="Enter Category Name"
                                v-model="editCategoryData.name"
                            />
                            <div class="invalid-feedback" v-if="errors.name">
                                {{ errors.name[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="image">Choose image</label>
                            <div>
                                <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`" ref="editCategoryImageDisplay" class="w-150" />
                            </div>
                            <input type="file" v-on:change="editAttachImage" ref="editCategoryImage" class="form-control" id="image" />
                            <div class="invalid-feedback" v-if="errors.image">
                                {{ errors.image[0] }}
                            </div>
                        </div>
                        <hr />
                        <div class="text-right">
                            <button
                                type="button"
                                class="btn btn-dark"
                                v-on:click="hideEditCategoryModal"
                            >
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-primary">
                                <span class="fa fa-check"></span> Update
                            </button>
                        </div>
                    </form>
                </div>
            </b-modal>

        </div>
    </main>
</template>

<script>
import * as categoryService from "../services/category_service";

export default {
    name: "category",
    data() {
        return {
            categories: [],
            categoryData: {
                name: "",
                image: ""
            },
            moreExist: false,
            nextPage: 0,
            editCategoryData: {},
            errors: {}
        };
    },
    mounted() {
        this.loadCategories();
    },
    methods: {
        // load table
        loadCategories: async function() {
            try {
                const response = await categoryService.loadCategories();
                this.categories = response.data.data;
                // console.log(response.data.id)
                // ini untuk pagination dalam hal ini load more
                if (response.data.current_page < response.data.last_page) {
                    this.moreExist = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExist = false;
                }
            } catch (error) {
                this.flashMessage.error({
                    message: "Some error occured, Please Refresh!",
                    time: 5000
                });
            }
        },
        // tampilkan image saat pilih file
        attachImage() {
            this.categoryData.image = this.$refs.newCategoryImage.files[0];
            let reader = new FileReader();

            reader.addEventListener(
                "load",
                function() {
                    this.$refs.newCategoryImageDisplay.src = reader.result;
                }.bind(this),false
            );

            reader.readAsDataURL(this.categoryData.image);
        },
        // sembunyikan modal create
        hideNewCategoryModal() {
            this.$refs.newCategoryModal.hide();
        },
        // sembunyikan modal edit
        hideEditCategoryModal() {
            this.$refs.editCategoryModal.hide();
        },

        showNewCategoryModal() {
            this.$refs.newCategoryModal.show();
        },

        showEditCategoryModal() {
            this.$refs.editCategoryModal.show();
        },
        // create data
        createCategory: async function() {
            let formData = new FormData();
            formData.append("name", this.categoryData.name);
            formData.append("image", this.categoryData.image);

            try {
                const response = await categoryService.createCategory(formData);

                // jika success tutup modal dan munculkan pesan
                this.hideNewCategoryModal();
                this.categories.unshift(response.data);
                this.flashMessage.success({
                    message: "Category stored successfully!",
                    time: 5000
                });

                //mengosongkan inputan
                this.categoryData = {
                    name: "",
                    image: ""
                };
            } catch (error) {
                // console.log(error.response.status); //untuk mengetahui error status 422 dibawah
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

        deleteCategory: async function(category) {
            if (!window.confirm(`Are you sure you want to delete ${category.name} ?` )) {
                return;
            }

            try {
                await categoryService.deleteCategory(category.id);

                this.categories = this.categories.filter(obj => {
                    return obj.id != category.id;
                });

                this.flashMessage.success({
                    message: "Category DELETED successfully!",
                    time: 5000
                });
            } catch (error) {
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
        },

        editCategory(category) {
            this.editCategoryData = {...category};
            this.showEditCategoryModal();
        },
        // tampilkan image saat pilih file mode edit
        editAttachImage() {
            this.editCategoryData.image = this.$refs.editCategoryImage.files[0];
            let reader = new FileReader();

            reader.addEventListener("load",function() {
                    this.$refs.editCategoryImageDisplay.src = reader.result;
                }.bind(this),false );

            reader.readAsDataURL(this.editCategoryData.image);
        },
        //edit dan update data
        updateCategory: async function(category) {

            
            const formData = new FormData();
            formData.append("name", this.editCategoryData.name);
            formData.append("image", this.editCategoryData.image);
            formData.append('_method', 'put');
            
            try {
                const response = await categoryService.updateCategory(this.editCategoryData.id, formData);

                this.categories.map(category => {
                    if (category.id === response.data.id) {
                        for (let key in response.data) {
                            category[key] = response.data[key];
                        }
                    }
                })

                // jika success tutup modal dan munculkan pesan
                this.hideEditCategoryModal();
                this.flashMessage.success({
                    message: "Category Updated successfully!",
                    time: 5000
                });

            } catch (error) {
               switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        console.log(this.errors)
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

        loadMore: async function() {
            try {
                const response = await categoryService.loadMore(this.nextPage);
               if (response.data.current_page < response.data.last_page) {
                    this.moreExist = true;
                    this.nextPage = response.data.current_page + 1;
                } else {
                    this.moreExist = false;
                }

                response.data.data.forEach(data => {
                    this.categories.push(data)
                });
            } catch (error) {
                this.flashMessage.error({
                    message: "Some error during loading more categories",
                    time: 5000
                });
            }
        },
    }
};
</script>
