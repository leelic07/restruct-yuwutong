import http from '@/service'

export default {
  //获取囚犯账户信息列表
  getAccounts: ({commit}, regs) =>
    http.getAccounts(regs).then(res => res.code === 200 && commit('getAccounts', res)).catch(err => console.log(err)),
  //获取囚犯账户详情信息
  getAccountDetail: ({commit}, id) =>
    http.getAccountDetail({id: id}).then(res => res.code === 200 && commit('getAccountDetail', res)).catch(err => console.log(err))
}
