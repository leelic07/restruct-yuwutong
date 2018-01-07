/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取家属注册信息列表
  getFamilies(params){
    return new Promise((resolve,reject) => {
      service.get('/families.json',params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
