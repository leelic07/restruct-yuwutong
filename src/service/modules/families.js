import * as service from '../base/service'

export default {
  // 获取家属注册信息列表
  getFamilies: pagination =>
    service.get('/families/page', pagination).then(res => res).catch(err => err)
}
