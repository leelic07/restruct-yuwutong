/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取家属注册信息列表
  getRegistrations(params){
    return new Promise((resolve, reject) => {
      service.get('/registrations.json', params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },

  //授权家属注册信息列表
  authorizeRegistrations(params, id){
    return new Promise((resolve, reject) => {
      service.patch(`/registrations/${id}`, params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },

  //获取家属注册信息的照片url
  getUuidImage(id){
    return new Promise((resolve, reject) => {
      service.get(`registrations/${id}/uuid_images`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
