import * as service from '../base/service'

export default {
  // 确定登出时执行的方法
  logout: () =>
    service.get('/users/logout').then(res => res).catch(err => err)
}
