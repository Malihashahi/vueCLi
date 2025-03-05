<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ route.params.id }}</h2>
    <h2>{{ route.query.name }} {{ route.query.lastname }}</h2>
    <h2>{{ route.hash }} </h2>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const title = ref("Show User Page");

    const route = useRoute();

    console.log(route.params);

    return { title,route };
  },
};
</script>

<style scoped>
</style>