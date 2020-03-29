<template>
    <input type="string" v-model="model">
</template>

<script>
export default {
    
    props: {
        value: {
        type: String,
        required: true,
        }
    },

    computed: {
        model: {
            get() {
                // We extract decimal number, beacause toLocaleString will automagically
                // remove the dot and zeros after it while the user is still typing
                // if (this.value == '') {
                //     this.value = 0;
                // }
                let value = this.value.split(".");
                let decimal = typeof value[1] !== "undefined"? "." + value[1]: "";

                return Number(value[0]).toLocaleString("en-GB") + decimal;
            },

            set(newValue) {
                this.$emit("input", newValue.replace(/,/g, ""));
                // if (isNaN(newValue)) {
                //         newValue = 0
                // }
            }
        }
    },

    watch: {
        model(){
            // ini artinya [^0-9] seluruh angka dr 0-9 di keyboard dan g = global, '' 
            // selain angka pada keyboard akan diganti string kosong
            this.model = this.model.replace(/[^0-9]/g, '');
        }
    }
}
</script>