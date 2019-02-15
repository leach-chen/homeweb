<template>
    
<div class="box-content clearfix">

       <el-card class="box-card">
          <div>
              <div id = "imgfloatdiv">
                  <p>aaaaaaaaaa</p>
              </div>
              <img id = "imgfloat" src="../public/img/bk1.jpg"/>
          </div>

           <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
       </el-card>

       <el-card class="box-card">
          <div>
              <div id = "imgfloatdiv">
                  <p>aaaaaaaaaa</p>
              </div>
              <img id = "imgfloat" src="../public/img/bk1.jpg"/>
          </div>

           <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
       </el-card>

              <el-card class="box-card">
          <div>
              <div id = "imgfloatdiv">
                  <p>aaaaaaaaaa</p>
              </div>
              <img id = "imgfloat" src="../public/img/bk1.jpg"/>
          </div>

           <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
       </el-card>

              <el-card class="box-card">
          <div>
              <div id = "imgfloatdiv">
                  <p>aaaaaaaaaa</p>
              </div>
              <img id = "imgfloat" src="../public/img/bk1.jpg"/>
          </div>

           <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
       </el-card>

              <el-card class="box-card">
          <div>
              <div id = "imgfloatdiv">
                  <p>aaaaaaaaaa</p>
              </div>
              <img id = "imgfloat" src="../public/img/bk1.jpg"/>
          </div>

           <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
       </el-card>

              <el-card class="box-card">
          <div>
              <div id = "imgfloatdiv">
                  <p>aaaaaaaaaa</p>
              </div>
              <img id = "imgfloat" src="../public/img/bk1.jpg"/>
          </div>

           <el-row>
                <el-button type="primary" @click="goContribute">贡献资源</el-button>
            </el-row>
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
      document.getElementById("imgfloatdiv").style.width= document.getElementById("imgfloat").width+"px";
      document.getElementById("imgfloatdiv").style.height= document.getElementById("imgfloat").height+"px";
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

#imgfloatdiv
{
  position: absolute;

}

#imgfloatdiv p
{
  /* position:absolute;
  bottom:0px;
  padding:0px;
  margin:0px */
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
