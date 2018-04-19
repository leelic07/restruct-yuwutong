import http from '@/service'

export default {
  // 获取监狱基本信息
  getJailsInformation: ({ commit }) => {
    return http.getJailsInformation().then(res => res.code === 200 && commit('getJailsInformation', res))
  },
  // 编辑监狱信息
  editJails: ({ commit }, regs) => {
    return http.editJails(regs).then(res => res.code === 200)
  }
}
