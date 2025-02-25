<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="increment">increment</button>
  </div>
</template>


<script>
import { ref } from "vue";
import { useCounter } from "../composables/useCounter.js";

export default {
  setup() {
    const counter = ref(2);
    const { count, increment } = useCounter(counter);

    return { count, increment };
  },
};
</script>

<style scoped>
</style>