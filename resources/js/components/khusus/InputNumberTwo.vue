<template>
    <input type="string" v-model="model" >
</template>

<script>
export default {
    
    props: {
        value: {
        type: String,
        required: true,
        }
    },

    // bisa update input per digit
    computed: {
        model: {
            get() {
                let value = this.value.split(".");
                let decimal = typeof value[1] !== "undefined"? "." + value[1]: "";
                return Number(value[0]).toLocaleString("en-GB") + decimal;
            },

            set(newValue) {
                this.$emit("input", newValue.replace(/,/g, ""));
            }
        }
    },

    // kirim hasil inputan jadi
    methods: {
        kirimValue(){
            this.$emit('change', this.model.replace(/,/g, ""));
        }
    },

    watch: {
        model(){
            this.model = this.model.replace(/[^0-9]/g, '');
            // this.kirimValue();
        }
    }
}
</script>