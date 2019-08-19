<template>

  <div class="joincontent">
    <div class="joinboxcontent content1">
        <el-card class="box-card-join">
            <h2>贡献资源</h2>
            1：在留言区提交您的资源<br><br>
            2：在Gitter聊天室提交您的资源<br><br>
            <br>
            <strong>注：
            <br>1:资源上可展示资源提供者的昵称，资源提供者个人主页，
            <br>2:还会展示资源原作者昵称及资源原作者个人主页。
            <br>3:若需要展示这些，提供资源的时候别忘了提供这些内容哦</strong>
            <highlight-code  slot="codeText" lang="vue">
                {
                  thumbUrl: "",
                  previewUrl: "",
                  downloadUrl: "",
                  description:"",
                  type:"",
                  author:"",
                  authorurl:"",
                  gitrepo:"",
                  byauthor:"",
                  byauthorurl:"",
                  from:"",
                  sold:""
                },
            </highlight-code>

            <br><br>

            <h2>欢迎加入</h2>

          <div class="joinpart">
            <!--<div class="joinitem">
              <p>微信群</p>
              <img :src="imgurlgroup">
            </div>-->

            <div class="joinitem">
              <p>扫码获取加群方式</p>
              <img :src="imgurlgongzhong">
            </div>
          </div>

          <Adsense></Adsense>

          <h2>捐助</h2>

          <div class="joinpart">
            <div class="joinitem">
              <p>微信</p>
              <img src="../public/img/wechatimg.jpg">
            </div>

            <div class="joinitem">
              <p>支付宝</p>
              <img src="../public/img/alipayimg.jpg">
            </div>
          </div>
        </el-card>
    </div>
  </div>
</template>

<script>
 export default {
    name: 'app',
    data () {
      var imgurlgroup=""
      var imgurlgongzhong=""
      return{
        imgurlgroup,
        imgurlgongzhong
      }
    },
    mounted () {

    },
    created: function() {

         var timestamp = (new Date()).getTime();
          var date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth()+1;
          var day = date.getDate();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();

          this.imgurlgroup = "https://leach-chen.github.io/storeother/img/wechatgroup.jpg"+"?time="+year+month+day+hour+minute
          this.imgurlgongzhong = "https://leach-chen.github.io/storeother/img/wechatgongzhong.jpg"+"?time="+year+month+day+hour+minute

    }
 }
</script>



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
    margin-top: 50px;

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
