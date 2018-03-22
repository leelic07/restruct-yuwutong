import http from '@/service'

export default {
  // 确定登出时执行的方法
  logout: ({ commit }) =>
    http.logout().then(res => res.code === 200 && commit('logout', res)).catch(err => console.log(err))
}
