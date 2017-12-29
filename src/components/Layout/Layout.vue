<template>
  <div id="layout">
    <!--页面头部-->
    <nav-header v-if="isNotLogin"></nav-header>
    <!--页面侧边栏-->
    <side-bar v-if="isNotLogin"></side-bar>
    <!--页面内容-->
    <content-page :isNotLogin="isNotLogin"></content-page>
    <!--页面页脚-->
    <nav-footer v-if="isNotLogin"></nav-footer>
  </div>
</template>

<script>
  import SideBar from '@/components/SideBar/SideBar'
  import Header from '@/components/Header/Header'
  import Footer from '@/components/Footer/Footer'
  import Content from '@/components/Content/Content'

  const loginUrl = "/login";//登录路由地址

  export default {
    name: 'layout',
    data() {
      return {
        isNotLogin:true
      }
    },
    watch:{
      $route(to){//监听路由变化
        console.log(to);
        if (to.path == loginUrl ) {//进入登陆页面
          this.isNotLogin = false;//将侧边栏和顶栏隐藏
        }else {
          this.isNotLogin = true;
        }
      }
    },
    methods:{
      hideBar() {
        if (this.$route.path == loginUrl ) {//进入登陆页面
          this.isNotLogin = false;//将侧边栏和顶栏隐藏
        }
      }
    },
    components: {
      SideBar,
      'nav-header': Header,
      'nav-footer': Footer,
      'content-page':Content
    },
    mounted() {
      this.hideBar();
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #layout
    background:#222D32
  .jqstooltip
    position:absolute
    left:0 px
    top:0 px
    visibility:hidden
    background:rgb(0, 0, 0) transparent
    background-color:rgba(0, 0, 0, 0.6)
    filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr = #990000 00, endColorstr = #990000 00)"
    -ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)"
    color:white;
    font:10 px arial, san serif;
    text-align:left;
    white-space:nowrap;
    padding:5 px;
    border:1 px solid white;
    z-index:10000;

  .jqsfield
    color:white;
    font:10 px arial, san serif;
    text-align:left;
</style>
