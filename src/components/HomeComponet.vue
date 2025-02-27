<template>
  <div>
    <h2>{{ name  }}</h2>
    </div>
</template>


<script>
//import {   computed , ref, watch } from "vue";
export default {
  props:['name'],
  setup(props , {emit}) {
   
     emit('updateName', 'Maliha');
    return{};
      }

  

};
</script>

<style scoped>
</style>