<template>
  <div id="content-wrapper" class="content-wrapper" :class="{'content-wrapper-login':!isNotLogin}">
    <!-- Content Header (Page header) -->
    <section class="content-header" v-if="isNotLogin">
      <ol class="breadcrumb">
        <li v-for="bc in breadcrumb">
          <a href="#" @click="$event.preventDefault()">
            {{bc}}
          </a>
        </li>
      </ol>
    </section>
    <!-- Main content -->
    <section
      class="content"
      :class="{'content-not-login':isNotLogin}"
      v-loading="loading"
      element-loading-background="rgba(255, 255, 255, 0.5)">
      <!--页面路由窗口-->
      <!--<keep-alive>-->
      <router-view></router-view>
      <!--</keep-alive>-->
    </section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      isNotLogin: {
        type: Boolean,
        required: true
      }, // 是否为登录界面
    },
    data() {
      return {}
    },
    computed: {
      // 获取vuex数据
      ...mapGetters({
        breadcrumb: 'breadcrumb',// 获取面包屑信息
        loading: 'loading'// 获取是否显示遮罩层
      })
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  white = #fff
  #content-wrapper
    &.content-wrapper-login
      margin-left: 0
    .breadcrumb
      left: 3%
    .content
      padding: 0;
      > div
        background: white
    .content-not-login
      margin-top: 30px
      padding: 15px

</style>
