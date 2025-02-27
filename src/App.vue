<template>
  <div>
   
    <h1>App.vue </h1>
    <HomeComponet :name="name"  />
    
 
  </div>
</template>

<script>

import HomeComponet from './components/HomeComponet.vue';
import {provide, reactive } from 'vue';

export default {
 
    components:{
      HomeComponet
    },
    
     setup(){
       const info = reactive({
         name : 'bahar jan'
         
       });
       
      

       provide('info' , info)

       return{  }
     }
    
};
</script>

<style>
li{
  color: red;
}
</style>
