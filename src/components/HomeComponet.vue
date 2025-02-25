<template>
  <div>
   
   <h1>
    {{ name }}
   </h1>
   <button @click="updateName">update</button>
    
  </div>
</template>



<script>
import { reactive} from "vue"

export default {
  
    
    setup(){
      
      let obj = reactive({
         a : "A" ,
         b : "B" ,
      });


      function updateName(){
         console.log(obj)
         obj.a = "C"
      }
      return{
        obj , updateName
      };
    }

};
</script>

<style scoped>
div{
  color: rgb(39, 196, 78);
}
</style>