<template>
  <div>
   
   <h1>
    {{ name }}
   </h1>
   <button @click="updateName">update</button>
    
  </div>
</template>



<script>
import {ref} from "vue"

export default {
  
    
    setup(){
      let name = ref("maliha");
      function updateName(){
         name.value = "bahar"
      }
      return{
        name , updateName
      };
    }

};
</script>

<style scoped>
div{
  color: rgb(39, 196, 78);
}
</style>