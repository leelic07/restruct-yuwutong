import http from '@/service'

export default {
  getPrisonUsers: ({ commit }, params) => {
    http.getPrisonUsers(params).then(res => res && commit('getPrisonUsers', res))
  },
  deletePrisonUser: ({ commit }, params) => {
    return http.deletePrisonUser(params).then(res => res)
  },
  addPrisonUser: ({ commit }, params) => {
    return http.addPrisonUser(params).then(res => res)
  },
  getPrisonUserDetail: ({ commit }, params) => {
    return http.getPrisonUserDetail(params).then(res => {
      if (!res) return
      commit('getPrisonUserDetail', res)
      return true
    })
  },
  updatePrisonUser: ({ commit }, params) => {
    return http.updatePrisonUser(params).then(res => res)
  },
  enableOrDisablePrisonUser: ({ commit }, params) => {
    return http.enableOrDisablePrisonUser(params).then(res => res)
  }
}
