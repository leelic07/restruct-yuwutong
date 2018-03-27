<template>
  <main>
    <the-header v-if="isNotLogin"></the-header>
    <!--页面侧边栏-->
    <the-aside v-if="isNotLogin"></the-aside>
    <!--页面内容-->
    <section
      class="content"
      :class="{'content-not-login':isNotLogin}">
        <the-breadcrumb></the-breadcrumb>
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
    <the-footer v-if="isNotLogin"></the-footer>
  </main>
</template>

<script>
import TheHeader from './the-header'
import TheAside from './the-aside'
import TheFooter from './the-footer'
import TheBreadcrumb from './the-breadcrumb'
const loginUrl = '/login' // 登录路由地址
const familyDownload = '/app_preview/family_download' // 家属app路由
const prisonDownload = '/app_preview/prison_download' // 监狱app路由
export default {
  components: {
    'the-header': TheHeader,
    'the-aside': TheAside,
    'the-footer': TheFooter,
    'the-breadcrumb': TheBreadcrumb
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
  mounted() {
    this.hideBar()
    console.log(this.$route)
  },
  methods: {
    hideBar() {
      if (this.$route.path === loginUrl || this.$route.path === familyDownload || this.$route.path === prisonDownload) this.isNotLogin = false // 将侧边栏和顶栏隐藏
    }
  }
}
</script>

<style type="text/stylus" lang="stylus">

</style>
