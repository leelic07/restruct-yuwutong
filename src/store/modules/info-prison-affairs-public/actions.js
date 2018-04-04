import http from '@/service'

export default {
  // 获取狱务公开信息
  getNewsAll: ({ commit }, regs) =>
    http.getNewsAll(regs).then(res => res.code === 200 && commit('getNewsAll', res)),
  getNews: ({ commit }, regs) =>
    http.getNews(regs).then(res => res.code === 200 && commit('getNews', res)),
  // 编辑狱务公开信息
  editNews({ commit }, regs) {
    let formData = new FormData()
    regs.anotherImageUrl && formData.append('anotherImageUrl', regs.anotherImageUrl)
    formData.append('id', regs.id)
    formData.append('title', regs.title)
    formData.append('typeId', regs.typeId)
    formData.append('contents', regs.contents)
    formData.append('isFocus', regs.isFocus)
    formData.append('sysFlag', regs.sysFlag)
    return http.editNews(formData).then(res => res.code === 200)
  },
  // 添加狱务公开信息
  addNews({ commit }, regs) {
    // let formData = new FormData()
    // regs.anotherImageUrl && formData.append('anotherImageUrl', regs.anotherImageUrl)
    // formData.append('title', regs.title)
    // formData.append('typeId', regs.typeId)
    // formData.append('contents', regs.contents)
    // formData.append('isFocus', regs.isFocus)
    // http.addNews(formData).then(res => res.code === 200 &&
    return http.addNews(regs).then(res => res.code === 200)
  },
  // 根据id删除狱务公开信息
  deleteNews({ commit }, regs) {
    return http.deleteNews(regs).then(res => res.code === 200)
  }
}
