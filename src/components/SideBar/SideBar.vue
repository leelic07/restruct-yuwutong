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
        <li v-for="(first, index) in menus[role - 1]" :key="index">
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
              <i class="el-submenu__icon-arrow" :class="first.active ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
            </a>
            <ul class="treeview-menu">
              <li v-for="(second, order) in first.children" :key="order">
                <router-link :to="second.path"><i :class="second.icon"></i>{{ second.title }}</router-link>
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
    let checkMenu = [
        {
          path: '/user-add',
          title: '平台监狱用户管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/registrations',
          title: '家属注册管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/meetings',
          title: '会见申请管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/mailboxes',
          title: '监狱长信箱',
          icon: 'iconfont icon-folder'
        }, {
          path: '/prisoners',
          title: '服刑人员信息管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/families',
          title: '家属信息管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/accounts',
          title: '囚犯账户管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/terminals',
          title: '终端管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/versions',
          title: '版本管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/prisoner',
          title: '数据管理',
          icon: 'iconfont icon-folder',
          active: false,
          children: [
            {
              path: '/prisoner/import_index',
              title: '罪犯数据导入',
              icon: 'iconfont icon-circle-o'
            }, {
              path: '/prison_term/import_index',
              title: '刑期变动数据导入',
              icon: 'iconfont icon-circle-o'
            }, {
              path: '/prison_reward_punishment/import_index',
              title: '罪犯奖惩数据导入',
              icon: 'iconfont icon-circle-o'
            }
          ]
        }],
      shopMenu = [
        {
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
      infoMenu = [
        {
          path: '/jails',
          title: '监狱基本信息管理',
          icon: 'iconfont icon-folder'
        }, {
          path: '/news',
          title: '狱务公开信息管理',
          icon: 'iconfont icon-folder',
          active: false,
          children: [
            {
              path: '/news/prison_affairs_disclosure',
              title: '狱务公开',
              icon: 'iconfont icon-circle-o'
            }, {
              path: '/news/working_dynamics',
              title: '工作动态',
              icon: 'iconfont icon-circle-o'
            }, {
              path: '/news/complaints_proposals',
              title: '投诉建议公示',
              icon: 'iconfont icon-circle-o'
            }
          ]
        }]
    return {
      menus: [checkMenu, shopMenu, infoMenu]
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
