<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel a
      asperiores! Suscipit maxime in dolorem excepturi sequi voluptates,
      pariatur quas commodi neque quis repudiandae a natus cum, quo non?
    </p>

    <router-link :to="{ name: 'showUser', params: { id: 3 }, query:{ name:'ali' , lastname: 'sheikh' } , hash: '#webprog' }"
      >Show User</router-link
    >
    <button @click="goToShowUser">Show User</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("Home Page");
    const router = useRouter();

    function goToShowUser() {
      router.push({
        name: "showUser",
        params: { id: 5 },
        query: { name: "ali", lastname: "sheikh" },
        hash: "#webprog",
      });
    }
    return { title, goToShowUser };
  },
};
</script>

<style scoped>
</style>