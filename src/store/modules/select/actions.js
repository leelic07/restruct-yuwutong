import http from '@/service'

export default {
  getProvincesAll: ({ commit }) => {
    return http.getProvincesAll().then(res => res.code === 200 && commit('getProvincesAll', res.data))
  },
  getCities: ({ commit }, params) => {
    return http.getCities(params).then(res => res.code === 200 && commit('getCities', res.data))
  }
}
