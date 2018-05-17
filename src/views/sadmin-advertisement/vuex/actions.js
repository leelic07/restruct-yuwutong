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
  getAdvertisementDetail: ({ commit }, params) => {
    return http.getAdvertisementDetail(params).then(res => res && commit('getAdvertisementDetail', res))
  },
  updateAdvertisement: ({ commit }, params) => {
    return http.updateAdvertisement(params).then(res => res)
  }
}
