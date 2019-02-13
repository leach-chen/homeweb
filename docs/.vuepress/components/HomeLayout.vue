<template>
<div class="homepage">
    <div class="part-one"></div> 
    <div class="part-two"></div> 
</div>    
</template>


<style lang="less" scoped>
@background-color: #5b83ad;
.homepage{
  width: 100%;
  height: 100%;
  background-color: @background-color;
  display: flex;                /*设置为flex布局*/
  justify-content: center;   /*水平居中*/
  align-items: center;     /*垂直居中*/
}

.part-one{
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    margin-top:100px;
    display:block;
    flex: none;
}


.part-two{
    width: 100px;
    height: 100px;
    background-color: burlywood;
    margin-top:100px;
    display:block;
    flex: none;
}
</style>