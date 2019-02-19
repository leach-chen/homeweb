<template>

  <div style="width:100%;height:1000px;">
<!--     
    <div class="commontent contentpart1">
        <el-card class="box-card">
            留言
        </el-card>
    </div> -->

  <div id="vcomments" style="width:100%;height:1000px;background-color:#666666"></div>
   


  </div>
</template>

 <script>
      new Valine({
          el: '#vcomments',
          appId: 'kyG2zl9DjYp6euveXb9LkzK6-gzGzoHsz',
          appKey: '6MTKO60mO7igK2mNi1hgsWIp',
          notify:true, 
          verify:true, 
          avatar:'mm', 
          placeholder: 'just go go' 
      })
</script>


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
