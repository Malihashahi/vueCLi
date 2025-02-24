<template>
  <div>
   
    <h1>App.vue </h1>
    <HomeComponet>
    {{ name }}
   </HomeComponet>
 
  </div>
</template>

<script>

import HomeComponet from './components/HomeComponet.vue';


export default {
 
    components:{
      HomeComponet
    },
    data(){
      return{
        name :'maliha'
      }
    }
   ,
   
    
}
</script>

<style>
li{
  color: red;
}
</style>
