/**
 * Created by Administrator on 2018/1/9/009.
 */
import * as service from '../base/service'

export default {
  //获取家属订单信息
  getFamilyOrders: params =>
    service.get(`/orders.json`, params).then(res => res).catch(err => err)
}
