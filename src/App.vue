<template>
  <div>
   
    <h1>App.vue </h1>

    <HomeComponet :userInfo="userInfo"/>
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
        userInfo:{
          name :'maliha ',
        lastname :'shahi',
        age: 24,
        }
      };
    }
}
</script>

<style>
div{
  color: brown;
}
</style>
