import http from '@/service'

export default {
  addTerminal: ({ commit }, params) => {
    return http.addTerminal(params).then(res => res)
  },
  getTerminals: ({ commit }, params) => {
    http.getTerminals(params).then(res => res && commit('getTerminals', res))
  },
  getTerminalDetail: ({ commit }, params) => {
    http.getTerminalDetail(params).then(res => res && commit('getTerminalDetail', res))
  },
  updateTerminal: ({ commit }, params) => {
    return http.updateTerminal(params).then(res => res)
  }
}
