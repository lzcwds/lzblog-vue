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
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .lz_main {
    position: absolute;
    right: 0;
    left: 300px;
    background: #eaeaea;
    width: auto;
    min-height: 100%;
  }
</style>
