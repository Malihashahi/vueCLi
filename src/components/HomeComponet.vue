<template>
  <div>
    
    <h1> name :{{ userInfo.name }}</h1>
    <h1>lastname :{{ userInfo.lastname }}</h1>
    <h1>age:{{ userInfo.age }}</h1>
    <button @click="sendData">send</button>
     {{ user }}
  </div>
</template>



<script>


export default {
   props:{
   userInfo :Object
   },
   inject :['user'],
   data(){
      return{
         name:'nergis'
      }
   },
    methods:{
      sendData(){
        this.$emit('childData',this.name)
      }
    }

}
</script>

<style scoped>
div{
  color: rgb(39, 196, 78);
}
</style>