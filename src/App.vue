<template>
  <div>
    <router-link class="mr-1" to="/">Home</router-link>
    <router-link class="mr-1" to="/users">User</router-link>
    <router-link to="/posts">Post</router-link>

    <router-view></router-view>
  </div>

 
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.mr-1{
  margin-right: 1rem;
}
</style>
