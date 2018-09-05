<template>
    <div class="lz_main">
        <div class="blog-content">
            <el-card>
                <header>
                    <div class="blog-title">{{curblog.title }}</div>
                    <div class="blog-date"><div>
                    </div></div>
                </header>
                <div class="blog-content" v-html="curblog.content">
                </div>
                <div class="blog-footer clearfix">
                    {{count}}
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
  import ElTag from '../../node_modules/element-ui/packages/tag/src/tag.vue'
  import api from '../api'
  export default {
    name: 'ElArticle',
    data () {
      return {
        curblog:{},
        count:this.$store.state.count
      }
    },
    mounted(){
      let that = this;
      api.getById(this.$route.params).then(function (resp) {
        that.curblog = resp[0];
      })
    }
  }
</script>

<style scoped>
    .blog-content{
        width: 95%;
        margin: 30px auto;
    }
</style>
