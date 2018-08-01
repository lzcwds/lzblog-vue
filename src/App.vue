<template>
  <div id="container">
    <top></top>
    <router-view/>
  </div>
</template>

<script>
  import Top from './components/top.vue'

  export default {
    components: {Top},
    name: 'App'
  }
</script>

<style>
  @import "public/css/base.less";
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
