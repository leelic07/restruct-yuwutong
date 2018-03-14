/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'
import qs from 'qs'

export default {
  //获取商品列表信息
  getGoods: pagination =>
    service.get('/items/page', pagination).then(res => res).catch(err => err),
  //根据id获取商品信息
  getGoodsById: id =>
    service.get('/items/description', id).then(res => res).catch(err => err),
  //添加商品
  addGoods: goods =>
    service.post('/items/add', goods).then(res => res).catch(err => err),
  //编辑商品
  editGoods: goodsForEdit =>
    service.postFile('/items/add', goodsForEdit).then(res => res).catch(err => err),
  //删除商品
  deleteGoods: id =>
    service.post('/items/delete', id).then(res => res).catch(err => err)
}
