<template>
    
<div class="box-content clearfix">

       <el-card class="box-card">

          <div style="position:relative;background: url("../public/img/bk1.jpg");">
            
            <div class="imgcontent">
                    <div class="imgcontent-float"></div>
                    <div class="imgcontent-float1"></div>
            </div>
          </div>
          
       </el-card>



</div>

</template>

<style>


.box-card
{
    width: 29%;
    float: left;
    margin: 10px;
    min-height: 300px;
}

.clearfix::before, .clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.clearfix::before {
  clear: both;
}



.imgcontent
{
    position: absolute;;
   
}



.imgcontent-float
{
    width: 150px;
    height: 150px;
    background-color: blueviolet;
    
    position:absolute;
    float: left;
}

.imgcontent-float1
{
    width: 110px;
    height: 110px;
    background-color: #000000;
    
    position:absolute;
    float: left;
}



@media only screen and (max-width: 768px) {
    .box-card
    {
        width: 100%;
    }
}


</style>
