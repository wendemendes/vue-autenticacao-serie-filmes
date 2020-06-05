<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    this.$http.get("https://guarded-headland-11685.herokuapp.com").then(resp => {
      console.log(resp.data);
    })
  }
};
</script>