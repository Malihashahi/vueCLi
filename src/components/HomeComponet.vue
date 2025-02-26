<template>
  <div>
    <h2>{{name }}  {{  lastname  }}</h2>
    <button @click="updateName">update</button>
    
  </div>
</template>


<script>
import {   computed , ref, watch } from "vue";
export default {
  setup() {
     const name = ref("maliha");
     const lastname = ("shahi");
     const fullname = computed(()=>{
        console.log(name.value)
        console.log(lastname.value)
        return name.value + ' ' + lastname.value
     
      });

       watch (name , () => {
        console.log(name.value)
        console.log(lastname.value)
       });
       function updateName (){
          name.value = " nergis";

       }

     return{ name , lastname, fullname , updateName}
  },


};
</script>

<style scoped>
</style>