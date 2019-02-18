<template>
    
<div class="box-content clearfix">

       <el-card class="box-card" v-for="item in dataList" :key="item.thumb">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>{{item.description}}</p>
              </div>
              <img :src="item.thumb"/>
          </div>

            <div class="btncontent">
                <button class="btn1" v-on:click="onPreview(item.preview)">预览效果</button>
                <button class="btn2" v-on:click="onDownload(item.download)">源码下载</button>
                <!-- <el-button type="primary">预览效果</el-button>
                <el-button type="primary">源码下载</el-button> -->
            </div>
       </el-card>


</div>

</template>

<script>
 import {h5DataList} from '../public/js/h5/h5Data.js'
 import {androidDataList} from '../public/js/android/androidData.js'

 export default {
    name: 'app',
    data () {
      //alert(this.$route.path)
      var dataList = []

      if(this.$route.path==="/github/android/all/")
      {
         dataList = androidDataList
      }else
      {
         dataList = h5DataList
      }
      return {
          dataList
        //   dataList:[]
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
            window.open("https://www.leachchen.com/open.html?open="+url);
        },
        onDownload(url)
        {
            //alert(url)
            window.location.href = url;
        }
    }
   
  }
</script>



<style>
 @import '../public/css/item.css'
</style>
