/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取家属会见信息列表
  getMeetings(params){
    return new Promise((resolve,reject) => {
      service.get('/meetings.json',params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },

  //授权家属会见信息列表
  authorizeMeetings(params,id){
    return new Promise((resolve,reject) => {
      service.patch(`/meetings/${id}`,params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
