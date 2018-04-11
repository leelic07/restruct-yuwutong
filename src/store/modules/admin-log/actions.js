import http from '@/service'

export default {
  getLogList: ({ commit }, regs) => {
    http.getLogList(regs).then(res => res.code === 200 && commit('getLogList', res.data))
  }
}
