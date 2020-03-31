<template>
    <div class="container">
        <!-- BASE Input -->
        <BaseInput label="Username" type="text" placeholder="Username" v-model="username"/>
        <BaseInput label="Password" type="password" placeholder="********" v-model="password" class="anyaran"/>

        <h1>{{username}}</h1>
        <h2>{{ nyentuh }}</h2>

        <!-- base button -->
        <BaseButton @click="consoleClick" @mouseover="mouseNyentuh()" >
            yo <i class="fa fa-home"></i>
        </BaseButton> 
        <!-- <BaseButton :onClick="alertClick">
           Alert
        </BaseButton>  -->
         
    </div>

</template>
<script>

import BaseInput from '../../components/base/BaseInput.vue';
import BaseButton from '../../components/base/BaseButton.vue';
export default {
    components:{
        BaseInput,
        BaseButton
    },
    data() {
        return {
        username: "",
        password: "",
        nyentuh:0,
        };
    },
    methods:{
        consoleClick(e){
            // alert('ok')
            this.nyentuh = 0;
            console.log('click', e)
        },
        alertClick(){
            alert('alert')
        },
        mouseNyentuh(){
            this.nyentuh++;
        }
    },
}
</script>
<style scoped>
.container {
    padding:30px;
}
.anyaran {
    color:blue;
}
</style>