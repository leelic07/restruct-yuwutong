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
    http.getPrisonUserDetail(params).then(res => res && commit('getPrisonUserDetail', res))
  },
  updatePrisonUser: ({ commit }, params) => {
    return http.updatePrisonUser(params).then(res => res)
  }
}
