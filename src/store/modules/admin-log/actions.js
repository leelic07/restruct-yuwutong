import http from '@/service'

export default {
  getLogList: ({ commit }, regs) => {
    http.getLogList(regs).then(res => res && commit('getLogList', res))
  }
}
