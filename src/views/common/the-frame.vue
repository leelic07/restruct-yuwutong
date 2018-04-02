<template>
  <div class="layout">
    <the-header v-if="isNotLogin"></the-header>
    <!--页面侧边栏-->
    <the-aside v-if="isNotLogin"></the-aside>
    <div class="content-wrapper" :class="{'content-wrapper-login':!isNotLogin}" :style="'min-height:' + wrapperHeight">
    <!--页面内容-->
      <section
        class="content"
        :class="{'content-not-login':isNotLogin}"
        v-loading="loading"
        element-loading-background="rgba(255, 255, 255, 0.5)">
        <the-breadcrumb v-if="isNotLogin"></the-breadcrumb>
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </section>
    </div>
    <the-footer v-if="isNotLogin"></the-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TheHeader from './the-header'
import TheAside from './the-aside'
import TheFooter from './the-footer'
import TheBreadcrumb from './the-breadcrumb'

const loginUrl = '/login' // 登录路由地址
const familyDownload = '/download/app-family' // 家属app路由
const prisonDownload = '/download/app-prison' // 监狱app路由
export default {
  components: {
    'the-header': TheHeader,
    'the-aside': TheAside,
    'the-footer': TheFooter,
    'the-breadcrumb': TheBreadcrumb
  },
  computed: {
    // 获取vuex数据
    ...mapGetters({
      loading: 'loading' // 获取是否显示遮罩层
    })
  },
  data() {
    return {
      isNotLogin: true,
      wrapperHeight: ''
    }
  },
  watch: {
    $route(to) { // 监听路由变化
      window.scrollTo(0, 0) // 每次路由变化页面回到最顶部
      if (to.path === loginUrl || to.path === familyDownload || to.path === prisonDownload) this.isNotLogin = false // 将侧边栏和顶栏隐藏
      else this.isNotLogin = true
    }
  },
  mounted() {
    this.wrapperHeight = `${ parseInt(window.innerHeight) - 100 }px`
    this.hideBar()
  },
  methods: {
    hideBar() {
      if (this.$route.path === loginUrl || this.$route.path === familyDownload || this.$route.path === prisonDownload) this.isNotLogin = false // 将侧边栏和顶栏隐藏
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
white = #fff
.content-wrapper
  &.content-wrapper-login
    margin-left: 0;
  .content
    padding: 0;
    > div
      background: white
  .content-not-login
    padding: 15px;
    padding-top: 0
.layout
  background: #222D32;
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
