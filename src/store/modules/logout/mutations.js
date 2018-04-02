import router from '@/router'

export default {
  // 点击确定退出时执行的方法
  logout(state) {
    Object.keys(sessionStorage).map(key => {
      sessionStorage.setItem(key, 'undefined')
    })
    state.users = {}
    // 退出登录后将页面跳转到登录页面
    router.push({
      path: '/login'
    })
  }
}
