<template>
  <div id="page">
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      layout: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$http.get('http://templates.shiyi.co/api/v1/layouts/2007').then(
      response => {
        console.log(response.body);
        this.layout = response.body;
      },
      response => {
        // error callback
      }
    );
  }
}
</script>

<style>
#page {
  width: 90%;
  background-color: white;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
