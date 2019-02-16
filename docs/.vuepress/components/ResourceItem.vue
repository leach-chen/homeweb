<template>
    
<div class="box-content clearfix">

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>

       <el-card class="box-card">
          <div class="imgfloatcontent" >
              <div class = "imgfloatdiv">  
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <img src="../public/img/bk1.jpg"/>
          </div>

         <div class="btn-content">
            <el-button type="primary">预览效果</el-button>
            <el-button type="primary">源码下载</el-button>
         </div>
       </el-card>


</div>

</template>

<script>
 export default {
    name: 'app',
    data () {
      return {}
    },
    mounted () {
        
      //document.getElementById("imgfloatdiv").style.width= document.getElementById("imgfloat").width+"px";
      //document.getElementById("imgfloatdiv").style.height= document.getElementById("imgfloat").height+"px";

      //console.log(document.getElementById("imgfloat").width+"px")
    },
   
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

.btn-content
{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
