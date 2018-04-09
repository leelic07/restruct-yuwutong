import http from '@/service'

export default {
  // 监狱列表
  getPrisonList: ({ commit }, params) => {
    http.getPrisonList(params).then(res => res.code === 200 && commit('getPrisonList', res.data))
  }
}
