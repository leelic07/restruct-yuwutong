<template>
  <div id="layout">
    <!--页面头部-->
    <the-header v-if="isNotLogin"></the-header>
    <!--页面侧边栏-->
    <the-aside v-if="isNotLogin"></the-aside>
    <!--页面内容-->
    <content-page :isNotLogin="isNotLogin"></content-page>
    <!--页面页脚-->
    <the-footer v-if="isNotLogin"></the-footer>
  </div>
</template>

<script>
import TheAside from './the-aside'
import TheHeader from './the-header'
import TheFooter from './the-footer'
import Content from './content'
const loginUrl = '/login' // 登录路由地址
const familyDownload = '/app_preview/family_download' // 家属app路由
const prisonDownload = '/app_preview/prison_download' // 监狱app路由
export default {
  name: 'layout',
  components: {
    'the-aside': TheAside,
    'the-header': TheHeader,
    'the-footer': TheFooter,
    'content-page': Content
  },
  data() {
    return {
      isNotLogin: true
    }
  },
  watch: {
    $route(to) { // 监听路由变化
      window.scrollTo(0, 0) // 每次路由变化页面回到最顶部
      if (to.path === loginUrl || to.path === familyDownload || to.path === prisonDownload) this.isNotLogin = false // 将侧边栏和顶栏隐藏
      else this.isNotLogin = true
    }
  },
  methods: {
    hideBar() {
      if (this.$route.path === loginUrl || this.$route.path === familyDownload || this.$route.path === prisonDownload) this.isNotLogin = false // 将侧边栏和顶栏隐藏
    }
  },
  mounted() {
    this.hideBar()
  }
}
</script>

<style type="text/stylus" lang="stylus">
  #layout
    background: #222D32

  .jqstooltip
    position: absolute
    left: 0px
    top: 0px
    visibility: hidden
    background: rgb(0, 0, 0) transparent
    background-color: rgba(0, 0, 0, 0.6)
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr = #990000 00, endColorstr = #990000 00)"
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)"
    color: white;
    font: 10px arial, san serif;
    text-align: left;
    white-space: nowrap;
    padding: 5px;
    border: 1px solid white;
    z-index: 10000;

  .jqsfield
    color: white;
    font: 10px arial, san serif;
    text-align: left;
</style>
