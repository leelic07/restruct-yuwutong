import http from '@/service'

export default {
  getPrisons: ({ commit }, params) => {
    http.getPrisons(params).then(res => res && commit('getPrisons', res))
  },
  addPrison: ({ commit }, params) => {
    return http.addPrison(params).then(res => res)
  },
  getPrisonDetail: ({ commit }, params) => {
    return http.getPrisonDetail(params).then(res => {
      if (!res) return
      commit('getPrisonDetail', res)
      return true
    })
  }
}
