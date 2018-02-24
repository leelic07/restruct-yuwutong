/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取商品列表信息
  getGoods: params =>
    service.get(`/items.json`, params).then(res => res).catch(err => err),
  //添加商品
  addGoods: goods =>
    service.postFile(`/items`, goods).then(res => res).catch(err => err),
  //编辑商品
  editGoods: (goodsForEdit, id) =>
    service.patchFile(`/items/${id}`, goodsForEdit).then(res => res).catch(err => err),
  //删除商品
  deleteGoods: id =>
    service.remove(`/items/${id}`).then(res => res).catch(err => err)
}
