<template>
  <header id="main-header" class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>狱务</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>狱务公开</b>管理平台</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button" @click="$event.preventDefault()">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="../../../static/dist/img/user2-160x160.jpg" class="user-image">
              <span class="hidden-xs">管理员</span>
            </a>
            <ul class="dropdown-menu">
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="text-center">
                  <a href="#" class="pull-left">
                    <i class="fa fa-pencil"></i>
                    修改用户密码
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar" @click="confirmExit($event)">
              <i class="fa fa-power-off"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      //点击退出登录执行的方法
      confirmExit(e) {
        e.preventDefault();
        this.$confirm('是否退出登录？','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        })
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #main-header
    .user-header
      height: 110px
    .nav
      .dropdown
        .dropdown-menu
          width: 0
        .user-footer
          padding: 5px 0 5px 0
          > div
            background: #F2F2F2
            height: 30px
            line-height: 30px
            a
              width: 100%
</style>
