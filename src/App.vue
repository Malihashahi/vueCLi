<template>
  <div>
   
    <h1>App.vue </h1>
    <HomeComponet :name="name" />
    
 
  </div>
</template>

<script>

import HomeComponet from './components/HomeComponet.vue';
import {ref } from 'vue';

export default {
 
    components:{
      HomeComponet
    },
    
     setup(){
       const name = ref('bahar jan');
         

       return{ name }
     }
    
};
</script>

<style>
li{
  color: red;
}
</style>
