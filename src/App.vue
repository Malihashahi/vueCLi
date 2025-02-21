<template>
  <div>
   
    <h1>App.vue </h1>

    <HomeComponet>
     <template v-slot:ul>
      <ul >
          <li v-for="(lang, index) in lang" :key="index">{{ lang }}</li>
      </ul>
     </template>
     <div>
      <h1>miss shahi</h1>
    </div>
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
       lang :['python','php','html' ]
      };
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
