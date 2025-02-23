<template>
  <div>
   
    <h1>App.vue </h1>
    <HomeComponet>
    {{ name }}
   </HomeComponet>
 
  
  <teleport to="span">
   <div><h1>hello teleport</h1></div>
  </teleport>
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
