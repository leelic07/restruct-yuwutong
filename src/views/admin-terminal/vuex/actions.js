import http from '@/service'

export default {
  addTerminal: ({ commit }, params) => {
    return http.addTerminal(params).then(res => res)
  },
  getTerminals: ({ commit }, params) => {
    http.getTerminals(params).then(res => res && commit('getTerminals', res))
  },
  getTerminalsDetail: ({ commit }, params) => {
    http.getTerminalsDetail(params).then(res => res && commit('getTerminalsDetail', res))
  },
  updateTerminal: ({ commit }, params) => {
    return http.updateTerminal(params).then(res => res)
  }
}
