import * as service from '../base/service'

export default {
  // 家属注册管理-列表
  getRegistrations: params => {
    return service.get('/registrations/page', params).then(res => res.code === 200 && res.data)
  },
  // 家属注册管理-授权
  authorizeRegistrations: params => {
    return service.post('/registrations/authorize', params).then(res => res.code === 200)
  }
}
