<template>
    <div class="container">
        <!-- BASE Input -->
        <BaseInput label="Username" type="text" placeholder="Username" v-model="username" @change="onChange" />
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

        <div>
            <n-input v-model="number" @change="changeInput" />
        </div>
        <br>
        <!-- <div>
            <input type="number" v-model="price" @input="handleInput">
            {{ previousPrice }}
        </div> -->
         
    </div>

</template>
<script>

import BaseInput from '../../components/base/BaseInput.vue';
import BaseButton from '../../components/base/BaseButton.vue';
import InputNumberTwo from '../../components/khusus/InputNumberTwo.vue';
export default {
    components:{
        BaseInput,
        BaseButton,
        'n-input': InputNumberTwo,
    },
    data() {
        return {
        username: "",
        password: "",
        nyentuh:0,
        number: '',
        price:null,
        previousPrice: null,
        };
    },

    mounted() {
       // let stringValue = e.target.value.toString();
    },
    methods:{
    //    handleInput (e) {
    //         let stringValue = e.target.value.toString();
    //         let value = stringValue.split(".");
    //         let decimal = typeof value[1] !== "undefined"? "." + value[1]: "";
    //         let jadi = Number(value[0]).toLocaleString("de-DE") + decimal;
    //         // console.log(jadi);
    //         this.previousPrice = jadi;
    //     },
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
        },

        onChange(e){
            let value = e.target.value;
            console.group('values')
            console.log(new Intl.NumberFormat('en-CA', { style: 'decimal'}).format(value));
            console.log(new Intl.NumberFormat('fr-CA', { style: 'decimal'}).format(value));
            console.log(new Intl.NumberFormat('de-DE', { style: 'decimal'}).format(value));
            console.groupEnd('values')
            // group currency

            console.group('currency')
            console.log(new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD'}).format(value));
            console.log(new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP'}).format(value));
            console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'IDR'}).format(value));
            console.groupEnd('currency')
        },

        changeInput(e){
            console.log(e);
            console.log(this.number);
        }
        
        
    },

    // watch: {
    //     number: 'changeInput',
    // }
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