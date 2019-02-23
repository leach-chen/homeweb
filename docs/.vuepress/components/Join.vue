<template>

  <div class="joincontent">
    
    <div class="joinboxcontent content1">
        <el-card class="box-card-join">
            <h2>贡献资源</h2>
            1：可在留言区提交您的资源<br><br>
            2：可在Gitter聊天室提交您的资源<br><br>
            3：可将您的资源发送至我的邮箱349763031@qq.com/leach.chen@gmail.com<br>
            <br>
            注：贡献的资源需包含资源的源码地址、描述、贡献者昵称，这些到时会显示在网页上
            <br><br>

            <h2>欢迎加入</h2>

          <div class="joinpart">
            <div class="joinitem">
              <p>微信群</p> 
              <img src="../public/img/wechatimg.jpg">
            </div>

            <div class="joinitem">
              <p>公众号</p> 
              <img src="../public/img/wechatimg.jpg">
            </div>
          </div>
        </el-card>
    </div>
  </div>
</template>



<style lang="less" scoped>

.joincontent
{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow-x: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background: url("../public/img/services-bg.jpg");
    background-attachment: fixed;
    min-height: 800px;
    flex-wrap: wrap;
  
}


.joinpart img{
  max-width: 100px;
  max-height: 100px;
}

.joinpart
{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
}

.joinitem{
  margin: 30px;
}

</style>

<style>
/* .el-card__body {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
  
} */
</style>
