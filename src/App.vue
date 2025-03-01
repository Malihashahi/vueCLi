<template>
  <div>
   
    <h1>App.vue </h1>
      
   <router-link to="/"> go to Home</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/posts">Post</router-link>
    <router-view></router-view>
  </div>
 

</template>

<script>




export default {
 
  
    
     setup(){
       
     

       return{  }
     }
    
};
</script>

<style>
li{
  color: red;
}
</style>
