import http from '@/service'

export default {
  // 获取商品列表信息
  getGoods: ({ commit }, regs) =>
    http.getGoods({
      ...regs
      // jailId: sessionStorage['jail_id']
    }).then(res => commit('getGoods', res)).catch(err => console.log(err)),
  // 根据id获取商品信息
  getGoodsById: ({ commit }, regs) => {
    http.getGoodsById({ id: regs }).then(res => res.code === 200 && commit('getGoodsById', res)).catch(err => console.log(err))
  },
  // 添加商品
  addGoods({ commit }, regs) {
    let formData = new FormData()
    regs.image && formData.append('file', regs.image.raw)
    formData.append('barcode', regs.barcode)
    formData.append('title', regs.title)
    formData.append('description', regs.description)
    formData.append('unit', regs.unit)
    formData.append('price', regs.price)
    formData.append('factory', regs.factory)
    formData.append('categoryId', regs.categoryId)
    formData.append('sysFlag', regs.sysFlag)
    formData.append('ranking', regs.ranking)
    http.addGoods(formData).then(res => res.code === 200 && http.getGoods().then(response => {
      commit('getGoods', response)
      commit('addGoods', res)
    }).catch(err => console.log(err))).catch(err => console.log(err))
  },
  // 编辑商品
  editGoods({ commit }, regs) {
    let id = regs.id, formData = new FormData()
    delete regs.id
    regs.image && formData.append('file', regs.image.raw)
    formData.append('barcode', regs.barcode)
    formData.append('title', regs.title)
    formData.append('description', regs.description)
    formData.append('unit', regs.unit)
    formData.append('price', regs.price)
    formData.append('factory', regs.factory)
    formData.append('categoryId', regs.categoryId)
    formData.append('ranking', regs.ranking)
    formData.append('sysFlag', regs.sysFlag)
    formData.append('id', Number(id))
    http.editGoods(formData).then(res => res.code === 200 && http.getGoods().then(response => {
      commit('getGoods', response)
      commit('editGoods', res)
    }).catch(err => console.log(err))).catch(err => console.log(err))
  },
  // 删除商品
  deleteGoods: ({ commit }, regs) =>
    http.deleteGoods({ id: regs }).then(res => res.code === 200 && commit('deleteGoods', {
      ...res,
      id: regs
    })).catch(err => console.log(err))
}
