<template>
  <div id="content-wrapper" class="content-wrapper" :class="{'content-wrapper-login':!isNotLogin}">
    <!-- Content Header (Page header) -->
    <!-- <section class="content-header" v-if="isNotLogin">
      <m-breadcrumb></m-breadcrumb>
    </section> -->
    <!-- Main content -->
    <section
      class="content"
      :class="{'content-not-login':isNotLogin}"
      v-loading="loading"
      element-loading-background="rgba(255, 255, 255, 0.5)">
      <the-breadcrumb v-if="isNotLogin"></the-breadcrumb>
      <!--页面路由窗口-->
      <!--<keep-alive>-->
      <router-view></router-view>
      <!--</keep-alive>-->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheBreadcrumb from './the-breadcrumb'

export default {
  components: {
    'the-breadcrumb': TheBreadcrumb
  },
  props: {
    isNotLogin: {
      type: Boolean,
      required: true
    } // 是否为登录界面
  },
  computed: {
    // 获取vuex数据
    ...mapGetters({
      loading: 'loading' // 获取是否显示遮罩层
    })
  },
  data() {
    return {}
  }
}
</script>

<style type="text/stylus" lang="stylus">
  white = #fff
  #content-wrapper
    &.content-wrapper-login
      margin-left: 0
    .content
      padding: 0;
      > div
        background: white
    .content-not-login
      padding: 15px;
      padding-top: 0

</style>
