<template>
        <label>
            {{ label }}
            <!-- <input
                :type="type"
                :placeholder="placeholder"
                @input="$emit('input', $event.target.value)"
            > -->
            <input 
                v-bind=$attrs
                v-on="listeners" 
            >
        </label>
</template>
<script>
export default {
   name: "BaseInput",
    // props: {
    //     label: String,
    //     type: String,
    //     placeholder: String
    // }
    props: {
        label:String
    },

    computed: {
        listeners(){
            return {
            ...this.$listeners,
            input: event => 
                this.$emit('input', event.target.value)
            }
        }
    }
}
</script>