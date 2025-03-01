<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel a
      asperiores! Suscipit maxime in dolorem excepturi sequi voluptates,
      pariatur quas commodi neque quis repudiandae a natus cum, quo non?
    </p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const title = ref("Post Page");

    return { title };
  },
};
</script>

<style scoped>
</style>