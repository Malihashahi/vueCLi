<template>
  <div>
   
    <h1>App.vue </h1>

    <HomeComponet>
      <ul>
       <li v-for="(name , index) in userNames" :key="index">{{ name }}</li>
      </ul>


    </HomeComponet>
    
  </div>



</template>

<script>

import HomeComponet from './components/HomeComponet.vue';
import { userNames } from './mixins.js';

export default {
  mixins:[userNames],
    components:{
      HomeComponet
    },
   
    methods:{
      
    },
    
}
</script>

<style>
li{
  color: red;
}
</style>
