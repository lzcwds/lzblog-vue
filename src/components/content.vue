<template>
  <div class="lz_main">
    <div class="blog-list">
      <ul>
        <li class="blog-content" v-for="item in blogList">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="Pagination">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      blogList: [{
        title:'这是标题',
        content:'这是内容'
      },{
        title:'这是标题2',
        content:'这是内容'
      }]
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .lz_main{
    position: absolute;
    right:0;
    left: 300px;
    background: #eaeaea;
    width: auto;
    min-height: 100%;
    .blog-list{
      width: 80px;
    }
  }
</style>
