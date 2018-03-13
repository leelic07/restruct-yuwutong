<template>
  <section class="app-family-preview bg-primary">
    <div class="app-download row">
      <div class="col-xs-3">
        <img class="bg-primary pull-left phone-img" src="../../assets/images/phone.png" alt="">
      </div>
      <div class="col-xs-9" style="margin-bottom: 15px;">
        <div class="col-xs-12">
          <h3 class="app-title">狱务通</h3>
        </div>
        <div class="col-xs-12">
          <div class="col-xs-6">
            <a href="https://www.yuwugongkai.com/app/yuwutong_f.apk?from=wechat"
               class="btn btn-block btn-sm btn-success hidden-xs"><i class="iconfont icon-android "></i>Android下载</a>
            <a href="https://www.yuwugongkai.com/app/yuwutong_f.apk?from=wechat"
               class="btn btn-block btn-xs btn-success visible-xs"><i class="iconfont icon-android "></i>Android</a>
            <img class="img-thumbnail" src="../../assets/images/yuwutong_f.png" alt="">
          </div>
          <div class="col-xs-6">
            <a href="https://itunes.apple.com/cn/app/%E7%8B%B1%E5%8A%A1%E9%80%9A/id1102307635?mt=8" name="button"
               class="btn btn-block btn-sm btn-info hidden-xs"><i class="iconfont icon-ios"></i>iPhone下载</a>
            <a href="https://itunes.apple.com/cn/app/%E7%8B%B1%E5%8A%A1%E9%80%9A/id1102307635?mt=8" name="button"
               class="btn btn-block btn-xs btn-info visible-xs"><i class="iconfont icon-ios"></i>iPhone</a>
            <img class="img-thumbnail" src="../../assets/images/yuwutong-ios.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--请在浏览器中打开提示模态框-->
    <div class="remind-modal" v-if="isMobile">
      <div class="modal-content">
        <p class="pull-left text-center">请点击右上角选择“浏览器中打开”</p>
        <i class="pull-right iconfont icon-aaa"></i>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        isMobile: false
      }
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
          if (ua.match(/MicroMessenger/i)[0] === "micromessenger") {
            this.isMobile = true;
          } else {
            this.isMobile = false;
          }
        } else {
          this.isMobile = false;
        }
      }
    },
    mounted(){
      this.init();
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
@import '../../assets/css/app-preview.css';
</style>
