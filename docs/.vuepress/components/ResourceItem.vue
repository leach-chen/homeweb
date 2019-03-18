<template>

<div class="box-content clearfix">
       <div class="searchcontainer">
          <el-input v-model="input" placeholder="智能全站资源搜索" v-on:input ="search"></el-input>
          <a target="_blank" href="https://www.algolia.com/docsearch" class="algolia-search-link" >
          <img style="height:12px;"src="../public/img/Algolia_logo_bg-white.svg" alt="algolia-logo" class="algolia-search-logo"></a>
       </div>

      <div class="cardcontent"  v-for="(item,index) in dataList" :key="item.Url" v-if="item.sold">

       <el-card class="box-card">
          <div class="imgfloatcontent">
               <!-- <div class="imgfloatcontent" :style="{ 'background': 'url(' +item.thumbUrl + ') no-repeat center center', 'background-size': '100% 100%'}"> -->
              <div class = "imgcover"></div>
              <img :src="item.thumbUrl"/>
              <div class = "imgfloatdiv">
                  <p style="text-align: left;" v-if="isShowTag">{{item.tag}}</p>
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

        <el-card class="box-card" v-if="index==0" style="margin-top:20px;height:340px;">
            <Adsense></Adsense>
        </el-card>
      </div>
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
      var isShowTag=false;
      var dataList = [];
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
          isTool,
          isShowTag,
          input: '',
          tmpDataList:[]
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
        case co.PATH_ANDROID_COMPONENT:
        case co.PATH_ANDROID_ARCH:
          this.getData(this.apiandroid)
        break


        case co.PATH_IOS_ALL:
        case co.PATH_IOS_FULL:
        case co.PATH_IOS_SYNT:
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
        case co.PATH_GAME_SMART:
        case co.PATH_GAME_CHESSCARD:
        case co.PATH_GAME_RISK:
        case co.PATH_GAME_SHOOT:
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
        case co.PATH_SEARCH:

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

      var path = this.$route.path
      if(path == co.PATH_SEARCH)
      {
        //document.getElementById("searchcontainerid").style.display= "visible";

      }else{
        //document.getElementById("searchcontainerid").style.display= "none";
      }
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
          this.dataList = this.dataList.sort(this.compare('id'));
          this.tmpDataList = this.dataList;
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
          this.$http.get(api).then(function (res){
          var path = that.$route.path

            switch(path)
            {
              case co.PATH_ANDROID_ALL:
                that.dataList=res.data.dataAndroidFull1.concat(res.data.dataAndroidAnimation1)
                .concat(res.data.dataAndroidView1).concat(res.data.dataAndroidSynthesize1)
                .concat(res.data.dataAndroidArchitecture1).concat(res.data.dataAndroidComponent1)
               break;
              case co.PATH_ANDROID_FULL:
                that.dataList=res.data.dataAndroidFull1
               break;
              case co.PATH_ANDROID_ANIMATION:
                 that.dataList=res.data.dataAndroidAnimation1
               break
               case co.PATH_ANDROID_VIEW:
               that.dataList=res.data.dataAndroidView1
               break
               case co.PATH_ANDROID_SYNT:
               that.dataList=res.data.dataAndroidSynthesize1
               break
              case co.PATH_ANDROID_COMPONENT:
                that.dataList=res.data.dataAndroidComponent1
               break;
              case co.PATH_ANDROID_ARCH:
               that.dataList=res.data.dataAndroidArchitecture1
               break
              

              case co.PATH_IOS_ALL:
                that.dataList=res.data.dataIosFull1.concat(res.data.dataIosSynthesize1)
                break
              case co.PATH_IOS_FULL:
                that.dataList=res.data.dataIosFull1
              break
              case co.PATH_IOS_SYNT:
              that.dataList=res.data.dataIosSynthesize1
              break



              case co.PATH_FLUTTER_ALL:
               that.dataList=res.data.dataFlutterFull1
              break
              case co.PATH_FLUTTER_FULL:
                that.dataList=res.data.dataFlutterFull1
              break



              case co.PATH_VUE_ALL:
                that.dataList=res.data.dataVueFull1
              break
              case co.PATH_VUE_FULL:
                that.dataList=res.data.dataVueFull1
              break



              case co.PATH_TOOL_ALL:
               that.dataList=res.data.dataToolSynthesize1
               break
              case co.PATH_TOOL_SYNT:
                that.dataList=res.data.dataToolSynthesize1
              break


              case co.PATH_GAME_ALL:
                console.log("aaaaaaa")
                that.dataList=res.data.dataGameSynthesize1.concat(res.data.dataGameSmart1)
                .concat(res.data.dataGameChesscard1).concat(res.data.dataGameRisk1)
                .concat(res.data.dataGameShoot1)
              break
              case co.PATH_GAME_SMART:
                that.dataList=res.data.dataGameSmart1
              break
              case co.PATH_GAME_CHESSCARD:
                that.dataList=res.data.dataGameChesscard1
              break
              case co.PATH_GAME_RISK:
                that.dataList=res.data.dataGamerisk1
              break
              case co.PATH_GAME_SHOOT:
                that.dataList=res.data.dataGameshoot1
              break
              case co.PATH_GAME_SYNT:
                that.dataList=res.data.dataGameSynthesize1
              break



              case co.PATH_H5_ALL:
                that.dataList=res.data.dataWebsiteCss1
              break
              case co.PATH_H5_CSS:
                that.dataList=res.data.dataWebsiteCss1
              break
              case co.PATH_H5_JKEYLL:

              break
              case co.PATH_H5_HEXO:

              break
              case co.PATH_H5_PHP:

              break
            }
            that.sortData()
          })
      },
      search:function()
      {
          var client = algoliasearch("XFVALIR0TX", 'eb9a770d84c8a6f01e3a5a45f8e9ae27');
          var contact_index = client.initIndex('leachchen');
           var that = this;
          if(this.input == "")
          {
             this.dataList = this.tmpDataList;
             this.isShowTag = false
          }else{
            contact_index.search(this.input, function (err, contacts){
                that.dataList=contacts.hits
                that.isShowTag = true
            });
          }
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

.searchcontainer
{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

</style>
