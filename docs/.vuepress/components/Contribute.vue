<template>

  <el-container direction="vertical">
    
    <div class="commontent contentpart1">
        <el-card class="box-card">
            投稿
        </el-card>
    </div>

  </el-container>
</template>



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
    min-height: 800px;
}

.contentpart1{
    background: url("../public/img/services-bg.jpg");
    background-attachment: fixed;
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
