import http from '@/service'

export default {
  // 监狱用户列表
  getPrisonUsers: ({ commit }, regs) => {
    http.getPrisonUsers(regs).then(res => res.code === 200 && commit('getPrisonUsers', res.data)).catch(err => console.log(err))
  },
  // 某一监狱用户
  getPrisonUser: ({ commit }, regs) => {
    return http.getPrisonUser(regs).then(res => res.code === 200 && commit('updatePrisonUser', res.data)).catch(err => console.log(err))
  },
  // 编辑监狱用户
  editPrisonUser: ({ commit }, regs) => {
    return http.editPrisonUser(regs).then().catch(err => console.log(err))
  },
  getJails: ({ commit }) => {
    return http.getJails().then(res => res.code === 200 && commit('updateJails', res.data)).catch(err => console.log(err))
  }
}
