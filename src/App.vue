<template>
  <div>
   
    <h1>App.vue </h1>
    <HomeComponet :name="name"  />
    
 
  </div>
</template>

<script>

import HomeComponet from './components/HomeComponet.vue';
import {provide, reactive , onMounted} from 'vue';

export default {
 
    components:{
      HomeComponet
    },
    
     setup(){
       const info = reactive({
         name : 'bahar jan'
         
       });
       
      

       provide('info' , info);
        onMounted(() => {
         console.log(`the component is now mounted.`)
        })

       return{  }
     }
    
};
</script>

<style>
li{
  color: red;
}
</style>
