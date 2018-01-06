/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  updateVersion(params){
    return new Promise((resolve,reject) => {
      service.post('/versions/update',params).then(res => {
        resolve(res);
      })
    })
  },
}
