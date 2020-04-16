<template>
<button v-on=$listeners class="Button">
  <slot>Button</slot>
</button>
</template>
​
<script>
export default {
//   props: {
//     onClick: {
//       type: Function,
//       required: true
//     }
//   }
    // computed: {
    //     listeners(){
    //         const {mouseover, ...listeners} = this.$listeners;
    //         console.log(this.$event);
    //         return listeners;
    //     }
    // }
}
</script>