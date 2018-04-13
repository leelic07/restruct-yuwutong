import http from '@/service'

export default {
  getPrisonAll: ({ commit }, params) => {
    return http.getPrisonAll(params).then(res => res && commit('getPrisonAll', res))
  }
}
