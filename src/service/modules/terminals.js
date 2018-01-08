/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取家属注册信息列表
  getTerminals(params){
    return new Promise((resolve,reject) => {
      service.get('/terminals.json',params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
