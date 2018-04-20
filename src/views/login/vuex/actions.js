import http from '@/service'

export default {
  login: ({ commit }, params) => {
    return http.login(params).then(res => {
      if (!res) return
      commit('login', res)
      return true
    })
  },
  logout: ({ commit }) => {
    return http.logout().then(res => res)
  }
}
