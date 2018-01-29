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
          <p>英山监狱</p>
          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <!--审核侧边栏-->
      <ul class="sidebar-menu" v-if="role == 1">
        <li class="header">导航</li>
        <li class="treeview">
          <router-link to="/registrations">
            <i class="iconfont icon-folder"></i>
            <span>家属注册管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/meetings">
            <i class="iconfont icon-folder"></i>
            <span>会见申请管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mailboxes">
            <i class="iconfont icon-folder"></i>
            <span>监狱长信箱</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/prisoners">
            <i class="iconfont icon-folder"></i>
            <span>服刑人员信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/families">
            <i class="iconfont icon-folder"></i>
            <span>家属信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/accounts">
            <i class="iconfont icon-folder"></i>
            <span>囚犯账户管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/terminals">
            <i class="iconfont icon-folder"></i>
            <span>终端管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="iconfont icon-folder"></i>
            <span>数据管理</span>
            <span class="pull-right-container">
              <i class="iconfont icon-more pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="/prisoner/import_index"><i class="iconfont icon-circle-o"></i>罪犯数据导入</router-link>
            </li>
            <li>
              <router-link to="/prison_term/import_index"><i class="iconfont icon-circle-o"></i>刑期变动数据导入</router-link>
            </li>
            <li>
              <router-link to="/prison_reward_punishment/import_index"><i class="iconfont icon-circle-o"></i>罪犯奖惩数据导入
              </router-link>
            </li>
          </ul>
        </li>
      </ul>

      <!--商品侧边栏-->
      <ul class="sidebar-menu" v-if="role == 2">
        <li class="header">导航</li>
        <li class="treeview">
          <router-link to="/goods_management">
            <i class="iconfont icon-folder"></i>
            <span>商品管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/orders">
            <i class="iconfont icon-folder"></i>
            <span>家属订单</span>
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-folder"></i>
            <span>订单管理</span>
            <span class="pull-right-container">
              <i class="iconfont icon-more pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="/prisoner_orders/import_index"><i class="iconfont icon-circle-o"></i>罪犯数据导入</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <!--信息侧边栏-->
      <ul class="sidebar-menu" v-if="role == 3">
        <li class="header">导航</li>
        <li class="treeview">
          <router-link to="/jails">
            <i class="iconfont icon-folder"></i>
            <span>监狱基本信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/laws">
            <i class="iconfont icon-folder"></i>
            <span>法律法规信息管理</span>
          </router-link>
        </li>
        <li>
          <a href="#" @click="toggleIcon($event)">
            <i class="iconfont icon-folder"></i>
            <span>狱务公开信息管理</span>
            <span class="pull-right-container">
              <i class="iconfont icon-more pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link to="/news/prison_affairs_disclosure"><i class="iconfont icon-circle-o"></i>狱务公开</router-link>
            </li>
            <li>
              <router-link to="/news/working_dynamics"><i class="iconfont icon-circle-o"></i>工作动态</router-link>
            </li>
            <li>
              <router-link to="/news/complaints_proposals"><i class="iconfont icon-circle-o"></i>投诉建议公示</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        users: 'users'//获取用户登录时的信息
      }),
      role(){
        return sessionStorage.getItem('role')
      }
    },
    methods: {}
  }
</script>

<style type="text/stylus" lang="stylus">
  #main-sidebar
    &.main-sidebar
      bottom: 0
      a
        font-size: 14px
</style>
