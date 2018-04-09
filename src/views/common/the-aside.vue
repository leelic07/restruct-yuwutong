<template>
  <aside id="main-sidebar" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../../static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{jailName}}</p>
          <a href="#" @click="$event.preventDefault()"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">导航</li>
        <li v-for="(first, index) in menus[role]" :key="index">
          <template v-if="!first.children">
            <router-link :to="first.path">
              <i :class="first.icon"></i>
              <span>{{ first.title }}</span>
            </router-link>
          </template>
          <template v-else>
            <a href="javascript:;" @click="first.active = !first.active">
              <i :class="first.icon"></i>
              <span>{{ first.title }}</span>
              <i class="el-submenu__icon-arrow"
                 :class="first.active ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
            </a>
            <ul class="treeview-menu">
              <li v-for="(second, order) in first.children" :key="order">
                <router-link :to="second.path"><i :class="second.icon"></i>&nbsp;&nbsp;{{ second.title }}</router-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
      <!--商品侧边栏-->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import menu from './menu.js'

export default {
  data() {
    return {
      menus: menu
    }
  },
  computed: {
    ...mapGetters({
      users: 'users' // 获取用户登录时的信息
    }),
    role() {
      return sessionStorage.getItem('role')
    },
    jailName() {
      return sessionStorage.getItem('jail_name')
    }
  },
  methods: {}
}
</script>

<style type="text/stylus" lang="stylus">
  #main-sidebar
    &.main-sidebar
      a
        font-size: 14px
</style>
