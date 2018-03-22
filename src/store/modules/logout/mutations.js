import router from '@/router'

export default {
  // 点击确定退出时执行的方法
  logout(state) {
    for (let key in sessionStorage) {
      sessionStorage.setItem(key, 'undefined')
    }
    // 退出登录后将页面跳转到登录页面
    router.push({
      path: '/login'
    })
  }
}
