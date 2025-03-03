<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel a
      asperiores! Suscipit maxime in dolorem excepturi sequi voluptates,
      pariatur quas commodi neque quis repudiandae a natus cum, quo non?
    </p>
    <button @click="goToHome">go to home</button>
  </div>
 
</template>

<script>

import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("User Page");
  

  const router = useRouter();
  //const route = useRoute();

 function goToHome(){
    router.push('/')
 }
    return { title ,goToHome };
  },
};
</script>
<style scoped>
</style>