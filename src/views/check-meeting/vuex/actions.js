import http from '@/service'

export default {
  getMeetings({ commit }, params) {
    http.getMeetings(params).then(res => res && commit('getMeetings', res))
  },
  authorizeMeeting({ commit }, params) {
    return http.authorizeMeeting(params).then(res => res)
  },
  withdrawMeeting({ commit }, params) {
    return http.withdrawMeeting(params).then(res => res)
  },
  adjustMeeting({ commit }, params) {
    return http.adjustMeeting(params).then(res => {
      if (!res) return
      commit('adjustMeeting', res)
      return true
    })
  }
}
