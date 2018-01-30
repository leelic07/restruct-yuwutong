/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取商品列表信息
  getGoods: params =>
    service.get(`${service.agency}/items.json`, params).then(res => res).catch(err => err),
  //编辑商品
  editGoods: (goodsForEdit, id) =>
    service.patch(`${service.agency}/items/${id}`, goodsForEdit, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res).catch(err => err),
  //删除商品
  deleteGoods: id =>
    service.del(`${service.agency}/items/${id}`).then(res => res).catch(err => err)
}
