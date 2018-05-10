import http from '@/service'

export default {
  // 获取狱务公开信息
  getNewsList: ({ commit }, params) => {
    http.getNewsList(params).then(res => res && commit('getNewsList', res))
  },
  getNewsDetail: ({ commit }, regs) =>
    http.getNewsDetail(regs).then(res => res.code === 200 && commit('getNewsDetail', res)),
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
