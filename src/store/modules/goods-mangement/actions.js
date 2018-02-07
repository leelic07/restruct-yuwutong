/**
 * Created by Administrator on 2018/1/2/002.
 */
import http from '@/service'

export default {
  //获取商品列表信息
  getGoods: ({commit}, regs) =>
    http.getGoods(regs).then(res => commit('getGoods', res)).catch(err => console.log(err)),
  //编辑商品
  editGoods: ({commit}, regs) => {
    let id = regs.id;
    delete regs.id;
    http.editGoods({
      barcode: regs.barcode,
      title: regs.title,
      description: regs.description,
      unit: regs.unit,
      price: regs.price,
      factory: regs.factory,
      category_id: regs.category_id,
      avatar: regs.avatar,
      ranking: regs.ranking,
      sys_flag: regs.sys_flag
    }, id).then(res => res.code === 200 && commit('editGoods', res)).catch(err => console.log(err))
  },
  //删除商品
  deleteGoods: ({commit}, regs) =>
    http.deleteGoods(regs).then(res => res.code === 200 && commit('deleteGoods', Object.assign(res, {id: regs}))).catch(err => console.log(err))
}
