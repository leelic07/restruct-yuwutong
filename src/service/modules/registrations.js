/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  getRegistrations(params){
    return new Promise((resolve, reject) => {
      service.get('/registrations.json', params).then(res => {
        resolve(res);
      })
    })
  },

  authorizeRegistrations(params,id){
    return new Promise((resolve,reject) => {
      service.patch(`/registrations/${id}`,params).then(res => {
        resolve(res);
      })
    })
  }
}
