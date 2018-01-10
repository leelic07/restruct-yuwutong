/**
 * Created by Administrator on 2018/1/10/010.
 */
import * as service from '../base/service'

export default {
  //获取法律法规信息
  getLawsInformation:() =>
    new Promise((resolve,reject) => {
      service.get('/laws.json').then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
}
