import http from '@/service'

export default {
  // 获取狱务公开信息
  getNewsAll: ({ commit }, regs) => {
    http.getNewsAll(regs).then(res => {
      if (!res.code) {
        commit('getNewsAll', { data: { news: [], newsSize: 0 } })
      }
      else if (res.code === 200) {
        commit('getNewsAll', res)
      }
    })
  },
  getNews: ({ commit }, regs) =>
    http.getNews(regs).then(res => res.code === 200 && commit('getNews', res)),
  // 编辑狱务公开信息
  editNews({ commit }, regs) {
    return http.editNews(regs).then(res => res.code === 200)
  },
  // 添加狱务公开信息
  addNews({ commit }, regs) {
    return http.addNews(regs).then(res => res.code === 200)
  },
  // 根据id删除狱务公开信息
  deleteNews({ commit }, regs) {
    return http.deleteNews(regs).then(res => res.code === 200)
  }
}
