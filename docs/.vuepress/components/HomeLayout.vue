<template>

  <el-container direction="vertical">

    <amp-auto-ads type="adsense"
              data-ad-client="ca-pub-4924092018203651">
    </amp-auto-ads>
    
    <div class="commontent contentpart1">
        <el-card class="box-card">
            <h1>资源小仓库</h1>
            <p>这是一个资源收集网站，收集一些精选资源</p>
            <p>1:收集了Github上开源项目资源(Android,IOS,Flutter,Vue,H5)，可在线预览项目效果及包含源码地址</p>
            <p>2:收集了游戏，你可以在线玩一玩也可下载源码</p>
            <p>3:收集了实用工具</p>
            <br>
            也欢迎大家一起贡献资源，让小仓库丰富起来，也让你的资源让更多人知道，资源上会展示你的昵称及你的网站链接。资源若有侵犯原作者权益，请联系我进行下架。
            <br>  <br>
            <strong>注:因网站经常会新增资源分类等内容，若右下角出现refresh，请点击，这样网站会将新内容刷新出来</strong>
            <div class="imgcontent">
                <img :src="imgurlbk1">
            </div>
            <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
        </el-card>
    </div>

    <div class="commontent contentpart2">
        <el-card class="box-card">
            <h1>Github 资源站</h1>
            <p>在这里收集了Android，IOS，Flutter，Vue，H5完整项目，实用性高的组件。项目均包含源码及部分可直接预览效果，节省你的资源寻找及编译时间</p>
            <div class="imgcontent">
                <img src="https://cdn.jsdelivr.net/gh/flutterchina/website@1.0/images/intellij/hot-reload.gif">
            </div>
            <el-row>
                  <el-button type="primary" @click="goGithub">探索资源</el-button>
            </el-row>
        </el-card>
    </div>

    <div class="commontent contentpart3">
        <el-card class="box-card">
            <h1>休闲一刻</h1>
            <p>在这里收集了众多可在线玩的游戏及源码</p>
            <div class="imgcontent">
                 <img src="../public/img/gameshow.jpg">
            </div>
            <el-row>
                <el-button type="primary" @click="goGame">立刻前往</el-button>
            </el-row>
        </el-card>
    </div>

    
    
    <div class="commontent contentpart4">
      
      <p style="color:#fff;">2019 © Leach Chen</p>
      <span id="busuanzi_container_site_pv" style="color:#fff;font-size:12px;margin-left:10px;margin-top:5px;">访问量：<span id="busuanzi_value_site_pv"></span>次</span>
    </div>
  </el-container>
</template>

<script>
// import {diyfun} from '../public/js/aa.js' //注意路径
// import '../public/js/busuanzi.pure.mini.js' //注意路径
export default {
 data () {
  return {
   testvalue: '',
   imgurlbk1: ''
  }
 },
 mounted () {
  //goRun()
 },
  created: function() {

        var timestamp = (new Date()).getTime();
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        this.imgurlbk1 = "https://www.leachchen.com/storeother/img/bk1.jpg"+"?time="+year+month+day
  },
 methods:{
   goGithub(){
     this.$router.push("/github/android/all/");
   },
   goBlog(){
     this.$router.push("https://www.leachchen.com/blog");
   },
   goGame(){
     this.$router.push("/game/all/");
   },
   goTool(){
     this.$router.push("/tool/all/");
   },
   goTool(){
     this.$router.push("/message/");
   },
   goContribute(){
     this.$router.push("/join/");
   },
   goAbout(){
     this.$router.push("/join/");
   },
 }
}
</script>


<style lang="less" scoped>

.commontent
{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow-x: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  
}

.contentpart1{
    background: url("../public/img/services-bg.jpg");
    background-attachment: fixed;
}

.contentpart2{
    background-color: #f2f6fc;
    background: url("../public/img/skills-bg.jpg");
    background-attachment: fixed;
}

.contentpart3{
    background-color: #f2f6fc;
    background-attachment: fixed;
}

.contentpart4{
    background-color: #f2f6fc;
    background: url("../public/img/contact-bg.jpg");
    background-attachment: fixed;
    height: 100px;
}


 .box-card {
    width: 100%;
    max-width: 980px;
    margin-top: 50px;
    margin-bottom:50px; 
  }


  .experience {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }









.commontent h1 {
    color: #0091ea;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 36px;
    margin: 20px 0;
    font-weight: normal;
 
}

.commontent p {
    font-size: 16px;
    margin: 0;
    padding: 0;
}

.imgcontent {
    text-align: center;
}

.imgcontent img{
    text-align: center;
    max-width: 100%;
    max-height: 100%; 
}



</style>

<style>
.el-card__body {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
 
}
</style>
