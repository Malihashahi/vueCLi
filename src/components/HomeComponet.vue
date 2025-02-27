<template>
  <div>
    <h2>{{ info.name  }}</h2>
    </div>
</template>


<script>
import { inject } from 'vue';

//import {   computed , ref, watch } from "vue";
export default {

  setup() {
    const info = inject('info');

    console.log(info)

    return{info};
      }

  

};
</script>

<style scoped>
</style>