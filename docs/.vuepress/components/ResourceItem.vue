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
                   <a :href="item.byauthorurl" target="_blank" style="margin-left:10px;font-size:10px;" v-if="item.byauthor!=''">By {{item.byauthor}}</a>
                   <a :href="item.byauthorurl" target="_blank" style="margin-left:10px;font-size:10px;" v-else>By admin</a>
                   <a :href="item.authorurl" target="_blank" style="font-size:14px;" v-if="item.author!=''">/ From {{item.author}}</a>
                   <a :href="item.authorurl" target="_blank" style="font-size:14px;" v-else>/ From {{item.gitauthor}}</a>
                   </div>
                  <div class="authorpart">
                    <iframe style="margin-left:10px;margin-top:10px;"
                      frameborder="0" scrolling="0"  height="20px"
                      :src="'https://ghbtns.com/github-btn.html?user='+item.gitauthor+'&repo='+item.gitrepo+'&type=star&count=true'" v-if="item.gitauthor!=''&&item.gitrepo!=''">
                    </iframe>  
                  </div>
                  <p style="text-align: left;">{{item.description}}</p>
              </div>
              <!-- <img :src="item.thumbUrl"/> -->
              
          </div>

            <div class="btncontent">
                <button class="btn1" v-on:click="onPreview(item.previewUrl)" v-if="isGame==false">预览效果</button>
                <button class="btn1" v-on:click="onPreview(item.previewUrl)" v-else>马上挑战</button>
                <button class="btn2" v-on:click="onDownload(item.downloadUrl)" v-if="isTool==false">源码下载</button>
                <button class="btn2" v-on:click="onDownload(item.downloadUrl)" v-else>下载地址</button>
                <!-- <el-button type="primary">预览效果</el-button>
                <el-button type="primary">源码下载</el-button> -->
            </div>
       </el-card>


</div>

</template>

<script>


  var co = require('../public/js/data/Constant.js')
  
  var android = require('../public/js/data/android/get_android_data.js')
  var ios = require('../public/js/data/ios/get_ios_data.js')
  var flutter = require('../public/js/data/flutter/get_flutter_data.js')
  var vue = require('../public/js/data/vue/get_vue_data.js')
  var website = require('../public/js/data/website/get_website_data.js')
  var game = require('../public/js/data/game/get_game_data.js')
  var tool = require('../public/js/data/tool/get_tool_data.js')

 export default {
    name: 'app',
    data () {
      //alert(this.$route.path)
      var isGame=false;
      var isTool=false;
      var dataList = []
      return {
          dataList,
          apiandroid:"https://www.leachchen.com/storedata1/android/android.js",
          apiios:"https://www.leachchen.com/storedata1/ios/ios.js",
          apiflutter:"https://www.leachchen.com/storedata1/flutter/flutter.js",
          apivue:"https://www.leachchen.com/storedata1/vue/vue.js",
          apigame:"https://www.leachchen.com/storedata1/game/game.js",
          apitool:"https://www.leachchen.com/storedata1/tool/tool.js",
          apiwebsite:"https://www.leachchen.com/storedata1/website/website.js",
          isGame,
          isTool
      }
    },
    created: function() {
      var path = this.$route.path
      switch(path)
      {
        case co.PATH_ANDROID_ALL:
        case co.PATH_ANDROID_FULL:
        case co.PATH_ANDROID_ANIMATION:
        case co.PATH_ANDROID_VIEW:
        case co.PATH_ANDROID_SYNT:
        case co.PATH_ANDROID_ARCH:
          this.getData(this.apiandroid)
        break


        case co.PATH_IOS_ALL:
        case co.PATH_IOS_FULL:
          this.getData(this.apiios)
        break



        case co.PATH_FLUTTER_ALL:
        case co.PATH_FLUTTER_FULL:
           this.getData(this.apiflutter)
        break



        case co.PATH_VUE_ALL:
        case co.PATH_VUE_FULL:
          this.getData(this.apivue)
        break



        case co.PATH_TOOL_ALL:
        case co.PATH_TOOL_SYNT:
          this.getData(this.apitool)
        break


        case co.PATH_GAME_ALL:
        case co.PATH_GAME_SYNT:
          this.getData(this.apigame)
        break



        case co.PATH_H5_ALL:
        case co.PATH_H5_CSS:
        case co.PATH_H5_JKEYLL:
        case co.PATH_H5_HEXO:
        case co.PATH_H5_PHP:
           this.getData(this.apiwebsite)
        break
      }

      if(path.search("tool") != -1 )
      {
        this.isTool = true
      }else{
        this.isTool = false
      }

      
      if(path.search("game") != -1 )
      {
        this.isGame = true
      }else{
        this.isGame = false
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
            if(this.isTool == true)
            {
                window.open("https://www.leachchen.com/webopen/open.html?open="+url+"/");
            }else{
                window.open("https://www.leachchen.com/webopen/download.html?open="+url);
            }
        },
    
        compare:function(property){
          return function(a,b){
              var value1 = a[property];
              var value2 = b[property];

              if(value1 > value2)
              {
                return -1  //降序
              }else if(value1 < value2)
              {
                return 0
              }else if(value1 == value2)
              {
                return 0
              }
          }
        }, 
    
        sortData:function()
        {
          this.dataList = this.dataList.sort(this.compare('id'))      
        },
        getData:function(api) {

          var timestamp = (new Date()).getTime();
          var date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth()+1;
          var day = date.getDate();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();

          api = api+"?time="+year+month+day+hour+minute
          
          var that = this;
          //this.$http.get(api).then(res=>{
          this.$axioshttp.get(api).then(res=>{
          var path = this.$route.path

            switch(path)
            {
              case co.PATH_ANDROID_ALL:
                this.dataList=res.data.dataAndroidFull1.concat(res.data.dataAndroidAnimation1)
                .concat(res.data.dataAndroidView1).concat(res.data.dataAndroidSynthesize1)
                .concat(res.data.dataAndroidArchitecture1)
               break;
              case co.PATH_ANDROID_FULL:
                this.dataList=res.data.dataAndroidFull1
               break;
              case co.PATH_ANDROID_ANIMATION:
                 this.dataList=res.data.dataAndroidAnimation1
               break
               case co.PATH_ANDROID_VIEW:
               this.dataList=res.data.dataAndroidView1
               break
               case co.PATH_ANDROID_SYNT:
               this.dataList=res.data.dataAndroidSynthesize1
               break
              case co.PATH_ANDROID_ARCH:
               this.dataList=res.data.dataAndroidArchitecture1
               break

              case co.PATH_IOS_ALL:
                this.dataList=res.data.dataIosFull1
              case co.PATH_IOS_FULL:
                this.dataList=res.data.dataIosFull1
              break



              case co.PATH_FLUTTER_ALL:
               this.dataList=res.data.dataFlutterFull1
              break
              case co.PATH_FLUTTER_FULL:
                this.dataList=res.data.dataFlutterFull1
              break



              case co.PATH_VUE_ALL:
                this.dataList=res.data.dataVueFull1
              break
              case co.PATH_VUE_FULL:
                this.dataList=res.data.dataVueFull1
              break



              case co.PATH_TOOL_ALL: 
               this.dataList=res.data.dataToolSynthesize1
               break
              case co.PATH_TOOL_SYNT:
                this.dataList=res.data.dataToolSynthesize1
              break


              case co.PATH_GAME_ALL:
                this.dataList=res.data.dataGameSynthesize1
              break
              case co.PATH_GAME_SYNT:
                this.dataList=res.data.dataGameSynthesize1
              break



              case co.PATH_H5_ALL:
                this.dataList=res.data.dataWebsiteCss1
              break
              case co.PATH_H5_CSS:
                this.dataList=res.data.dataWebsiteCss1
              break
              case co.PATH_H5_JKEYLL:
                
              break
              case co.PATH_H5_HEXO:
                
              break
              case co.PATH_H5_PHP:
               
              break
            }
            this.sortData()
          })
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
