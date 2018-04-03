import http from '@/service'

export default {
  // 获取家属注册信息列表
  getRegistrations({ commit }, regs) {
    http.getRegistrations(regs).then(res => res.code === 200 && commit('getRegistrations', res))
  },
  // 授权家属注册信息列表
  authorizeRegistrations({ commit }, regs) {
    return http.authorizeRegistrations(regs).then(res => res.code === 200)
  },
  // 获取家属注册信息的照片url
  getUuidImage: ({ commit }, id) =>
    http.getUuidImage(id).then(res => commit('getUuidImages', res)).catch(err => console.log(err))
}
