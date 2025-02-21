<template>
  <div>
   
    <h1>App.vue </h1>

    <HomeComponet :userInfo="userInfo" @childData="showData($event)"/>
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
        },
      };
    },
    methods:{
      showData(name){
            this.userInfo.name= name
      }
    }
}
</script>

<style>
div{
  color: brown;
}
</style>
