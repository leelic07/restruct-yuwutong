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

export default {
  data() {
    let adminMenu = [{
        path: '/prison-user/list',
        title: '监狱用户管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/feedback/list',
        title: '意见反馈',
        icon: 'iconfont icon-folder'
      // }, {
      //   path: '/province/list',
      //   title: '省份管理',
      //   icon: 'iconfont icon-folder'
      // }, {
      //   path: '/city/list',
      //   title: '城市管理',
      //   icon: 'iconfont icon-folder'
      }],
      checkMenu = [{
        path: '/registration/list',
        title: '家属注册管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/meeting/list',
        title: '会见申请管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/mailbox/list',
        title: '监狱长信箱',
        icon: 'iconfont icon-folder'
      }, {
        path: '/prisoners/list',
        title: '服刑人员信息管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/families/list',
        title: '家属信息管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/prison-accounts/list',
        title: '囚犯账户管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/terminals/list',
        title: '终端管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/versions/list',
        title: '版本管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/prisoner-data',
        title: '数据管理',
        icon: 'iconfont icon-folder',
        active: false,
        children: [
          {
            path: '/prisoner-data/data-import',
            title: '罪犯数据导入',
            icon: 'iconfont icon-circle-o'
          }, {
            path: '/prisoner-data/term-change',
            title: '刑期变动数据导入',
            icon: 'iconfont icon-circle-o'
          }, {
            path: '/prisoner-data/reward-punishment',
            title: '罪犯奖惩数据导入',
            icon: 'iconfont icon-circle-o'
          }
        ]
      }],
      shopMenu = [{
        path: '/goods_management',
        title: '商品管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/orders',
        title: '家属订单',
        icon: 'iconfont icon-folder'
      }, {
        path: '/prisoner_orders',
        title: '订单管理',
        icon: 'iconfont icon-folder',
        active: false,
        children: [
          {
            path: '/prisoner_orders/import_index',
            title: '罪犯数据导入',
            icon: 'iconfont icon-circle-o'
          }
        ]
      }],
      infoMenu = [{
        path: '/jails/detail',
        title: '监狱基本信息管理',
        icon: 'iconfont icon-folder'
      }, {
        path: '/prison-affairs-public',
        title: '狱务公开信息管理',
        icon: 'iconfont icon-folder',
        active: false,
        children: [
          {
            path: '/prison-affairs-public/prison-affairs-public',
            title: '狱务公开',
            icon: 'iconfont icon-circle-o'
          }, {
            path: '/prison-affairs-public/working-dynamics',
            title: '工作动态',
            icon: 'iconfont icon-circle-o'
          }, {
            path: '/prison-affairs-public/complaints-suggestions',
            title: '投诉建议公示',
            icon: 'iconfont icon-circle-o'
          }
        ]
      }]
    return {
      menus: [adminMenu, checkMenu, shopMenu, infoMenu]
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
