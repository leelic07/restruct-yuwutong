/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //获取囚犯账户信息列表
  getAccounts: ({commit}, regs) =>
    http.getAccounts(regs).then(res => commit('getAccounts', res)).catch(err => console.log(err)),

  //获取囚犯账户详情信息
  getAccountDetail: ({commit}, id) =>
    http.getAccountDetail(id).then(res => res.code === 200 && commit('getAccountDetail', res)).catch(err => console.log(err))
}
