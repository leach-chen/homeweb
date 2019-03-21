<template>

  <el-container direction="vertical">

    <!-- <amp-auto-ads type="adsense"
              data-ad-client="ca-pub-4924092018203651">
    </amp-auto-ads> -->

   
    <div class="commontent contentpart1" style="z-index:2;">
        
        <el-card class="box-card">
            <h1>资源小仓库</h1>
            <p>你想找的,或许这里就有。点击屏幕,让烟花尽情绽放吧~</p>
            <!-- 也欢迎大家一起贡献资源，让小仓库丰富起来，也让你的资源让更多人知道，资源上会展示你的昵称及你的网站链接。资源若有侵犯原作者权益，请联系我进行下架。 -->
            <br>
            <div class="imgcontent">
                <!-- <img :src="imgurlbk1"> -->
                <div class="spanshow" style="position:absolute;margin:10px;text-align:left;z-index:2;">
                   <span id="nameshow1">leachchen@ubuntu:~$&nbsp;</span><span id="cmdshow1"></span><span id="cmdshow1place" style="display:none">ls /</span><br>
                   <span id="resultshow1" style="display:none;">资源库</span><br>
                   <span id="nameshow2" style="display:none;">leachchen@ubuntu:~$&nbsp;</span><span id="cmdshow2" style="display:none;"></span><span id="cmdshow2place" style="display:none">cd 资源库</span><br>
                   <span id="nameshow3" style="display:none;">leachchen@ubuntu:~$&nbsp;</span><span id="cmdshow3" style="display:none;"></span><span id="cmdshow3place" style="display:none">ls /</span><br>
                   <span id="resultshow3" style="display:none;"><a v-on:click="goAndroid">Android</a> &nbsp;&nbsp;&nbsp; <a v-on:click="goIos">IOS</a> &nbsp;&nbsp;&nbsp; <a v-on:click="goFlutter">Flutter</a> &nbsp;&nbsp;&nbsp; <a v-on:click="goVue">Vue</a> &nbsp;&nbsp;&nbsp;<a v-on:click="goH5">H5</a> &nbsp;&nbsp;&nbsp; <a v-on:click="goGame">游戏</a> &nbsp;&nbsp;&nbsp; <a v-on:click="goTool">工具</a> </span><br>
                </div>
                <img src="../public/img/yanhua.jpg" style="position:absolute;height:50px;bottom:-50px;"></img>
                <canvas id="canvas" style="height:100%;background-color:#310924;"><span class="STYLE1">Open IE effect more perfect </span></canvas>
            </div>
            <strong>注:因网站经常会新增资源分类等内容，若右下角出现refresh，请点击，这样网站会将新内容刷新出来</strong>
            <el-row>
                <el-button type="primary" @click="goGithub">探索资源</el-button>
            </el-row>
        </el-card>
    </div>

    <div class="commontent contentpart2">
        <el-card class="box-card">
            <h1>Github 资源站</h1>
            <p>在这里收集了Android，IOS，Flutter，Vue，H5完整项目，实用性高的组件。项目均包含源码及部分可直接预览效果，节省你的资源寻找及编译时间</p>
            <div class="imgcontent">
                <img :src="imgurlbk1">
                <!-- <img src="https://cdn.jsdelivr.net/gh/flutterchina/website@1.0/images/intellij/hot-reload.gif"> -->
            </div>
            <el-row>
                  <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>

        <Adsense></Adsense>
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
import  {init,loop} from '../public/js/yanhua.js' //注意路径
export default {
 data () {
  return {
   testvalue: '',
   imgurlbk1: '',
   index:0,
   run1:0,
   run2:0,
   run3:0
  }
 },
 mounted () {
  init()
  loop()

  this.run1 = setInterval(this.showcmd1, 100);
  setTimeout(() => {
    
     document.getElementById("resultshow1").style.display= "";
     document.getElementById("nameshow2").style.display= "";
     document.getElementById("cmdshow2").style.display= "";
     
      this.run2 = setInterval(this.showcmd2, 200);
      setTimeout(() => {
         document.getElementById("nameshow3").style.display= "";
         document.getElementById("cmdshow3").style.display= "";

         this.run3 = setInterval(this.showcmd3, 200);
         setTimeout(() => {
            document.getElementById("resultshow3").style.display= "";
         }, 1200);
      }, 1200);
     
  }, 1000);

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
   goAndroid(){
     this.$router.push("/github/android/all/");
   },
   goIos(){
     this.$router.push("/github/ios/all/");
   },
   goFlutter(){
     this.$router.push("/github/flutter/all/");
   },
   goVue(){
     this.$router.push("/github/vue/all/");
   },
   goH5(){
     this.$router.push("/github/h5/all/");
   },
   goGame(){
     this.$router.push("/game/all/");
   },
   goTool(){
     this.$router.push("/tool/all/");
   },
   goContribute()
   {
      this.$router.push("/join/");
   },
   goGithub()
   {
      this.$router.push("/github/android/all/");
   },
   goBlog(){
     this.$router.push("https://www.leachchen.com/blog");
   },
   showcmd1(){
   
      if(document.getElementById("cmdshow1place") != null)
      {
        var word=document.getElementById("cmdshow1place").innerHTML;
        document.getElementById("cmdshow1").innerText = word.substring(0,this.index++);
        if(this.index > word.length)
        {
          clearInterval(this.run1)
          this.index = 0;
        }
      }
  },
   showcmd2(){
      if(document.getElementById("cmdshow2place") != null)
      {
        var word=document.getElementById("cmdshow2place").innerHTML;
        document.getElementById("cmdshow2").innerText = word.substring(0,this.index++);
        if(this.index > word.length)
        {
          clearInterval(this.run2)
          this.index = 0;
        }
      }
  },
   showcmd3(){
      if(document.getElementById("cmdshow3place") != null)
      {
        var word=document.getElementById("cmdshow3place").innerHTML;
        document.getElementById("cmdshow3").innerText = word.substring(0,this.index++);
        if(this.index > word.length)
        {
        
          clearInterval(this.run3)
          this.index = 0;
        }
      }
  }
 
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

.c img{
    text-align: center;
    max-width: 100%;
    max-height: 100%;
}

.imgcontent span{
  color:#fff;
  font-size:14px;
}

.spanshow a{
  text-decoration: underline;
  cursor:pointer;
}

canvas {
	cursor: crosshair;
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
