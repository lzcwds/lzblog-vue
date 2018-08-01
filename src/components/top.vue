<template>
    <div class="lz-header">
        <div class="overlay"></div>
        <header>
            <div class="photo">
                <img src="@/assets/litten.png" alt="">
            </div>
            <div class="author">
                <h1>lzcwds</h1>
            </div>
            <div class="signature"></div>
            <nav class="header-menu">
                <ul>
                    <li>主页</li>
                    <li>相册</li>
                </ul>
            </nav>
            <nav class="header-slider-title"></nav>
            <nav class="nav">
                <div class="link">
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .lz-header{
        width: 300px;
        height:100%;
        position: fixed;
        text-align: center;
        .overlay{
            background: #4d4d4d;
            width: 300px;
            height: 180px;
            position: absolute;
        }
        .photo{
            margin:0 (300-118-10)/2px;
            margin-top: 180-59px;
            position: relative;
            overflow: hidden;
            img{
                width: 118px;
                height: 118px;
                display: block;
                border: 5px #fff solid;
                border-radius: 300px;
                opacity: 1;
            }
        }
        .author{
            font-size: 30px;
            color:#696969;
            text-align: center;
        }
        .header-menu{

        }
    }
</style>
