<template>
  <div>
    
    <h1> name :{{ userInfo.name }}</h1>
    <h1>lastname :{{ userInfo.lastname }}</h1>
    <h1>age:{{ userInfo.age }}</h1>
  
  </div>
</template>



<script>


export default {
   props:{
   userInfo :Object
   }

}
</script>

<style scoped>
div{
  color: rgb(39, 196, 78);
}
</style>