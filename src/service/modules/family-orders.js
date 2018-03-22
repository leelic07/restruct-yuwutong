import * as service from '../base/service'

export default {
  // 获取家属订单信息
  getFamilyOrders: pagination =>
    service.get('/orders/page', pagination).then(res => res).catch(err => err),
  // 根据id查询家属订单详情信息
  getOrderById: id =>
    service.get('/orders/description', id).then(res => res).catch(err => err),
  // 编辑家属订单详情信息f
  editFamilyOrders: order =>
    service.post('/orders/update', order).then(res => res).catch(err => err)
}
