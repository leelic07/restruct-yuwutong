import http from '@/service'

export default {
  getAdvertisements: ({ commit }, params) => {
    http.getAdvertisements(params).then(res => res && commit('getAdvertisements', res))
  },
  getAdvertisementTypes: ({ commit }) => {
    return http.getAdvertisementTypes().then(res => res && commit('getAdvertisementTypes', res))
  },
  addAdvertisement: ({ commit }, params) => {
    return http.addAdvertisement(params).then(res => res)
  },
  updateAdvertisementStatus: ({ commit }, params) => {
    return http.updateAdvertisementStatus(params).then(res => res)
  },
  deleteAdvertisement: ({ commit }, params) => {
    return http.deleteAdvertisement(params).then(res => res)
  },
  getAdvertismentsDetail: ({ commit }, params) => {
    return http.getAdvertismentsDetail(params).then(res => res && commit('getAdvertismentsDetail', res))
  },
  updateAdvertisments: ({ commit }, params) => {
    return http.updateAdvertisments(params).then(res => res)
  }
}
