<template>
  <div>
    <router-link class="mr-1" to="/">Home</router-link>
    <router-link active-class="active" exact-active-class="exact-active" class="mr-1" to="/users">User</router-link>
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

.router-link-active{
  color : red
}

.router-link-exact-active{
  color: green;
}
.active{
  color : red
}

.exact-active{
  color: green;
}
</style>
