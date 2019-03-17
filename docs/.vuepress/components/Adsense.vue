<template>
    <div>
      <div id="pcuse" align="center">
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-4924092018203651"
            data-ad-slot="4765483933"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
       </div>
       <div id="phoneuse" align="center">
            <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4924092018203651"
                data-ad-slot="5632623295"></ins>
       </div>
    </div>
</template>


<script>
var util = require('../public/js/utils.js')
export default {
  mounted () {
    if(util.isPhone()){
        var pc = document.getElementById("pcuse")
        if (pc != null)
        {
            pc.parentNode.removeChild(pc);
        }
    }else{
        var phone = document.getElementById("phoneuse")
        if (phone != null)
        {
            phone.parentNode.removeChild(phone);
        }
    }
    (adsbygoogle = window.adsbygoogle || []).push({});
 }
}
</script>

<style>
ins {
    min-width: 200px;
    min-height: 50px;
    max-height: 360px;
}
</style>
