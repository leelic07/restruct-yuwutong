import http from '@/service'

export default {
  login: ({ commit, dispatch }, params) => {
    return http.login(params).then(res => {
      if (!res) return
      if (res.users.role === '1') dispatch('getWebsocketResult', res.users.jailId)
      commit('login', res)
      return true
    })
  },
  logout: ({ commit }) => {
    return http.logout().then(res => res)
  }
}
