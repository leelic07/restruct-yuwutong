import http from '@/service'

export default {
  getPrisonAll: ({ commit }, params) => {
    return http.getPrisonAll(params).then(res => res && commit('getPrisonAll', res))
  },
  getPrisonAllWithBranchPrison: ({ commit }, params) => {
    return http.getPrisonAllWithBranchPrison(params).then(res => res && commit('getPrisonAllWithBranchPrison', res))
  },
  getProvincesAll: ({ commit }) => {
    return http.getProvincesAll().then(res => res && commit('getProvincesAll', res))
  },
  getCities: ({ commit }, params) => {
    return http.getCities(params).then(res => res && commit('getCities', res))
  },
  getJailPrisonAreas: ({ commit }, params) => {
    return http.getJailPrisonAreas(params).then(res => {
      if (!res) return
      commit('getJailPrisonAreas', res)
      return true
    })
  }
}
