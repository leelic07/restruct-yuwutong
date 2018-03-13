<template>
  <section class="app-family-preview bg-primary">
    <div class="app-download row">
      <div class="col-xs-3">
        <img class="bg-primary pull-left scanner-img" src="../../assets/images/scanner.png" alt="">
      </div>
      <div class="col-xs-9">
        <div class="col-xs-12">
          <h3 class="text-center">狱务通(监狱端)</h3>
        </div>
        <div class="col-xs-12">
          <div class="col-xs-8 col-xs-offset-2">
            <a href="https://www.yuwugongkai.com/app/yuwutong_p.apk?from=wechat"
               class="btn btn-block btn-sm btn-success hidden-xs"><i class="iconfont icon-android "></i>Android下载</a>
            <a href="https://www.yuwugongkai.com/app/yuwutong_p.apk?from=wechat"
               class="btn btn-block btn-xs btn-success visible-xs"><i class="iconfont icon-android "></i>Android</a>
            <img class="img-thumbnail" src="../../assets/images/yuwutong_p.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--请在浏览器中打开提示模态框-->
    <div class="remind-modal">
      <div class="modal-content">
        <p class="text-center">请点击右上角选择“浏览器中打开”</p>
        <i class="pull-right iconfont icon-aaa"></i>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      init(){
        let browser = {
          versions: function () {
            let u = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
              trident: u.indexOf('Trident') > -1,//IE内核
              presto: u.indexOf('Presto') > -1,//opera内核
              webkit: u.indexOf('Webkit') > -1,//苹果，谷歌内核
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,//火狐内核
              ios: !!u.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/),//ios终端
              mobile: !!u.match(/AppleWebKit.*Mobile.*/),//是否为移动端
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,//安卓终端或者UC浏览器
              iPhone: u.indexOf('iPhone') > -1,//是否为iPhone或者QQHD浏览器
              iPad: u.indexOf('iPad') > -1,//是否为iPad
              webApp: u.indexOf('Safari') === -1 //是否为web应用程序，没有头部和底部
            };
          }(),
          language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };

        if (browser.versions.mobile) {
          let ua = navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) === "micromessenger") {
            this.$el.querySelector('.remind-modal').style.display = 'block';
          } else {
            this.$el.querySelector('.remind-modal').style.display = 'none';
          }
        } else {
          this.$el.querySelector('.remind-modal').style.display = 'block';
        }
      }
    },
    mounted(){
      this.init();
    }
  }
</script>

<style type="text/css" lang="css">
  @import '../../assets/css/app-preview.css';
</style>
