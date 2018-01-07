/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取囚犯账户信息列表
  getAccounts(params){
    return new Promise((resolve,reject) => {
      service.get('/accounts.json',params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },

  //获取囚犯账户详情信息
  getAccountDetail(id){
    return new Promise((resolve,reject) => {
      service.get(`/accounts/${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
