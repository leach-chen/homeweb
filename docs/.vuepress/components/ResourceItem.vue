<template>
    
<div class="box-content clearfix">

      <amp-auto-ads type="adsense"
                data-ad-client="ca-pub-4924092018203651">
      </amp-auto-ads>
       <el-card class="box-card" v-for="item in dataList" :key="item.Url" v-if="item.sold">
          <div class="imgfloatcontent">
               <!-- <div class="imgfloatcontent" :style="{ 'background': 'url(' +item.thumbUrl + ') no-repeat center center', 'background-size': '100% 100%'}"> -->
              <div class = "imgcover"></div>
              <img :src="item.thumbUrl"/>
              <div class = "imgfloatdiv">  
                  <div style="width:100%;text-align:left;">
                   <a :href="item.fromauthorurl" target="_blank" style="margin-left:10px;font-size:10px;" v-if="item.fromauthor!=''">By {{item.fromauthor}}</a>
                   <a :href="item.authorurl" target="_blank" style="font-size:14px;" v-if="item.author!=''">/ From {{item.author}}</a>
                   </div>
                  <div class="authorpart">
                    <iframe style="margin-left:10px;margin-top:10px;"
                      frameborder="0" scrolling="0"  height="20px"
                      :src="'https://ghbtns.com/github-btn.html?user='+item.author+'&repo='+item.repo+'&type=star&count=true'" v-if="item.author!=''&&item.repo!=''">
                    </iframe>  
                  </div>
                  <p style="text-align: left;">{{item.description}}</p>
              </div>
              <!-- <img :src="item.thumbUrl"/> -->
              
          </div>

            <div class="btncontent">
                <button class="btn1" v-on:click="onPreview(item.previewUrl)">预览效果</button>
                <button class="btn2" v-on:click="onDownload(item.downloadUrl)">源码下载</button>
                <!-- <el-button type="primary">预览效果</el-button>
                <el-button type="primary">源码下载</el-button> -->
            </div>
       </el-card>


</div>

</template>

<script>


  var co = require('../public/js/data/Constant.js')
  var data = require('../public/js/data/DataFactory.js')

 export default {
    name: 'app',
    data () {
      //alert(this.$route.path)

      var dataList = []

      var path = this.$route.path
      
      switch(path)
      {
        case co.PATH_ANDROID_ALL:
          dataList = data.getAndroidAllData()
        break
        case co.PATH_ANDROID_FULL:
          dataList = data.getAndroidFullData()
        break
        case co.PATH_ANDROID_ANIMATION:
          dataList = data.getAndroidAnimationData()
        break


        case co.PATH_IOS_ALL:
          dataList = data.getIosAllData()
        break
        case co.PATH_IOS_FULL:
          dataList = data.getIosFullData()
        break



        case co.PATH_FLUTTER_ALL:
          dataList = data.getFlutterAllData()
        break
        case co.PATH_FLUTTER_FULL:
          dataList = data.getFlutterFullData()
        break



        case co.PATH_VUE_ALL:
          dataList = data.getVueAllData()
        break
        case co.PATH_VUE_FULL:
          dataList = data.getVueFullData()
        break



        case co.PATH_TOOL_ALL:
          dataList = data.getToolAllData()
        break
        case co.PATH_TOOL_PRACTICAL:
          dataList = data.getToolPracticalData()
        break


        case co.PATH_GAME_ALL:
          dataList = data.getGameAllData()
        break
        case co.PATH_GAME_SHOOT:
          dataList = data.getGameShootData()
        break



        case co.PATH_H5_ALL:
          dataList = data.getH5AllData()
        break
        case co.PATH_H5_CSS:
          dataList = data.getH5CssData()
        break
        case co.PATH_H5_JKEYLL:
          dataList = data.getH5JekyllData()
        break
        case co.PATH_H5_HEXO:
          dataList = data.getH5HexoData()
        break
        case co.PATH_H5_PHP:
          dataList = data.getH5PhpData()
        break
      }
      return {
          dataList,
      }
    },
    mounted () {

      //document.getElementById("imgfloatdiv").style.width= document.getElementById("imgfloat").width+"px";
      //document.getElementById("imgfloatdiv").style.height= document.getElementById("imgfloat").height+"px";

      //console.log(document.getElementById("imgfloat").width+"px")
    },

    methods:
    {
        onPreview:function(url)
        {
            //alert(url)
            window.open("https://www.leachchen.com/webopen/open.html?open="+url+"/");
            //window.location.href = url;
            //window.open(url);        
        },
        onDownload(url)
        {
            //alert(url)
            //window.location.href = url;
            window.open("https://www.leachchen.com/webopen/download.html?open="+url);
        }
    }
   
  }
</script>



<style>
 @import '../public/css/item.css';

 .authorpart
 {
   display: flex;
   flex-direction: row;
   align-items: center;
 }
</style>
