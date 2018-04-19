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
  getAdvertisementsDetail: ({ commit }, params) => {
    return http.getAdvertisementsDetail(params).then(res => res && commit('getAdvertisementsDetail', res))
  },
  updateAdvertisements: ({ commit }, params) => {
    return http.updateAdvertisements(params).then(res => res)
  }
}
