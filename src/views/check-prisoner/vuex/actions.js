import http from '@/service'

export default {
  getPrisoners({ commit }, params) {
    http.getPrisoners(params).then(res => res && commit('getPrisoners', res))
  }
}
