/**
 * Created by Administrator on 2018/1/10/010.
 */
import * as service from '../base/service'

export default {
  //获取监狱基本信息
  getJailsInformation: params =>
    new Promise((resolve, reject) => {
      service.get('/jails.json', params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
}

