import * as service from '../base/service'

export default {
  // 获取服刑人员信息
  getPrisoners: pagination =>
    service.get('/prisoners/page', pagination).then(res => res).catch(err => err)
}
