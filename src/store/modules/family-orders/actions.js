/**
 * Created by Administrator on 2018/1/9/009.
 */
import http from '@/service'

export default {
  //获取家属订单信息列表
  getFamilyOrders: ({commit}, regs) =>
    http.getFamilyOrders(regs).then(res => res.code === 200 && commit('getFamilyOrders', res)).catch(err => console.log(err)),
  //获取家属订单详情信息
  getOrderById: ({commit}, regs) =>
    http.getOrderById({id: regs}).then(res => res.code === 200 && commit('getOrderById', res)).catch(err => console.log(err)),
  //编辑家属订单详情信息
  editFamilyOrders: ({commit}, regs) => {
    http.editFamilyOrders({
      id: regs.id,
      status: regs.status
    }).then(res => res.code === 200 && http.getFamilyOrders().then(response => {
      commit('getFamilyOrders', response);
      commit('editFamilyOrders', res);
    }).catch(err => console.log(err))).catch(err => console.log(err))
  }
}
