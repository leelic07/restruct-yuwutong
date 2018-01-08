/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //带搜索条件时执行的方法
  searchAction(params){
    return new Promise((resolve, reject) => {
      service.get('/search', params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })

  }
}
