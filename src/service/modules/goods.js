/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取商品列表信息
  getGoods(params){
    return new Promise((resolve, reject) => {
      service.get('/items.json', params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }
}
