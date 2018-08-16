<template>
    <div class="lz_main">
        <div class="blog-content">
            <el-card>
            </el-card>
        </div>
    </div>
</template>

<script>
  import ElTag from '../../node_modules/element-ui/packages/tag/src/tag.vue'
  export default {
    name: 'Article',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
    .blog-content{
        width: 95%;
        margin: 30px auto;
    }
</style>
