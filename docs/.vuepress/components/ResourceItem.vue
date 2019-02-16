<template>
    
<div class="box-content clearfix">

       <el-card class="box-card" v-for="item in dataList" :key="item.thumb">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img :src="item.thumb"/>
          </div>

            <div class="btncontent">
                <button class="btn1" v-on:click="onPreview(item.preview)">预览效果</button>
                <button class="btn2" v-on:click="onDownload">源码下载</button>
                <!-- <el-button type="primary">预览效果</el-button>
                <el-button type="primary">源码下载</el-button> -->
            </div>
       </el-card>


</div>

</template>

<script>
 export default {
    name: 'app',
    data () {
      return {
          dataList:[
              {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
               {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                 {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                  {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                   {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                    {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                     {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                      {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                       {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                        {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                         {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                          {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                           {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                            {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                             {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                              {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
                               {thumb:"/h5website/001/thumb/demo.png",preview:"https://www.leachchen.com/h5website/001/source/",download:"https://www.leachchen.com/h5website/001/download/before.zip"},
          ]
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
            alert(url)
           // window.open(url);
        },
        onDownload()
        {
            window.location.href = "https://www.leachchen.com/h5website/001/download/before.zip";
        }
    }
   
  }
</script>



<style>


.box-card
{
    width: 29%;
    float: left;
    margin: 10px;

    
}

/* 相对布局相对其第一个relative的父布局进行定位，设置其bottom：0属性，父布局的高度由其它非相对定位布局的子元素决定*/

.imgfloatcontent
{
    overflow: hidden;
    position: relative;
}

.imgfloatdiv
{
  position: absolute;
  bottom:0px;
  padding:0px;
  margin:0px;
}

.imgfloatdiv p
{
  /* position:absolute;
  bottom:0px;
  padding:0px;
  margin:0px */
  color: aliceblue;
  font-size: 18px;
  
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;

}

.btncontent
{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
}

.btncontent button
{
    flex-grow:1;
    font-size: 15px;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    padding-top: 10px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    cursor:pointer;
}

/* :active，元素被点击时变色，但颜色在点击后消失
:focus， 元素被点击后变色，且颜色在点击后不消失 */

.btncontent button:hover
{
    opacity:0.8;
}

.btncontent button:active
{
    opacity:1;
}

.btn1
{
    
    margin-right:10px; 
}

.btn2
{
    
    margin-left:10px; 
}


@media only screen and (max-width: 768px) {
    .box-card
    {
        width: 100%;
    }
}


</style>


<style>
.clearfix::before, .clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.clearfix::before {
  clear: both;
}
</style>
