/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取服刑人员信息
  getPrisoners(params){
    return new Promise((resolve, reject) => {
      service.get('/prisoners.json', params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
