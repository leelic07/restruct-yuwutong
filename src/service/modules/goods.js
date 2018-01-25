/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取商品列表信息
  getGoods: params =>
    service.get(`${service.agency}/items.json`, params).then(res => res).catch(err => err)
}
