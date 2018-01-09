/**
 * Created by Administrator on 2018/1/9/009.
 */
import * as service from '../base/service'

export default {
  //获取家属订单信息
  getFamilyOrders(params){
    return new Promise((resolve,reject) => {
      service.get('/orders.json',params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }
}
