import http from '@/service'

export default {
  // 监狱列表
  getPrisons: ({ commit }, params) => {
    http.getPrisons(params).then(res => res && commit('getPrisons', res))
  },
  addPrison: ({ commit }, params) => {
    return http.addPrison(params).then(res => res)
  }
}
