<template>
  <div>
    <ul>
       <li v-for="(name , index) in userNames" :key="index">{{ name }}</li>
      </ul>
    
  </div>
</template>



<script>
import { userNames } from './mixins.js';

export default {
   mixins:[userNames],
   data(){
      return{
        name : 'nergis'
      }
   },
    methods:{
      
    }

}
</script>

<style scoped>
div{
  color: rgb(39, 196, 78);
}
</style>