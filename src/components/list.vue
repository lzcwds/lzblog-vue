<template>
  <div class="lz_main">
    <div class="blog-list">
      <div v-for="(item,index) in blogList" class="blog">
        <el-card>
          <header>
            <div class="blog-title">{{item.title}}</div>
            <div class="blog-date"><div>

            </div></div>
          </header>
          <div class="blog-content">
            <div v-html="item.content">

            </div>
            <a class="more" @click="toArticle(index)">more >></a>
          </div>
          <div class="blog-footer clearfix">
            <div class="blog-tab">
              <el-tag>
                {{item.tag.name}}
              </el-tag>
            </div>
            <a class="to-article" @click="toArticle(index)">展开全文 >></a>
          </div>
        </el-card>
      </div>
    </div>
    <div class="Pagination">

    </div>
  </div>
</template>

<script>
import ElTag from '../../node_modules/element-ui/packages/tag/src/tag.vue'
import api from '../api'
export default {
  components: {ElTag},
  name: 'list',
  data () {
    return {
      blogList: []
    }
  },
  mounted(){
    let that =this;
    api.getlist().then(function (resp) {
      that.blogList = resp;

    });
  },
  methods:{
    toArticle:function(i) {
      this.$router.push({name:'ElArticle',params:{id:this.blogList[i].id}});
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .blog-list{
    width: 95%;
    margin: 0 auto;
    padding-bottom: 30px;
    .blog{
      padding-top: 30px;

      .blog-title{
        color:#696969;
        font-size: 30px;
        padding: 30px 0 15px 0;
        border-bottom:1px #ddd solid;
      }

      .blog-content{

        .more{
          font-size: 14px;
          display:block;
          width: 70px;
          margin: 15px 0;
          cursor: pointer;
        }
        .more:hover{
          color:#409EFF;
        }

      }

      .blog-footer{
        padding-top: 15px;
        border-top: 1px #ddd solid;
        .blog-tab{
          float: left;
          margin-top:5px;
          span{
            margin: 0 5px;
          }
        }
        .to-article{
          float: right;
          background: #4d4d4d;
          color: #fff;
          font-size: 14px;
          padding: 10px;
          line-height: 19px;
          border-radius: 2px;
          cursor: pointer;
        }
        .to-article:hover{
          color: #409EFF;
        }
      }
    }
  }
</style>
