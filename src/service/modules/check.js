import * as service from '../base/service'

export default {
  // 家属注册管理-列表
  getRegistrations: params => {
    return service.get('/registrations/page', params).then(res => res.code === 200 && res.data)
  },
  // 家属注册管理-授权
  authorizeRegistrations: params => {
    return service.post('/registrations/authorize', params).then(res => res.code === 200)
  },
  // 获取家属会见信息列表
  getMeetings: params => {
    return service.get('/meetings/page', params).then(res => res.code === 200 && res.data)
  },
  // 家属会见申请-授权
  authorizeMeeting: params => {
    return service.post('/meetings/authorize', params).then(res => res.code === 200)
  },
  // 家属会见申请-撤回
  withdrawMeeting: params => {
    return service.post('/meetings/withdraw', params).then(res => res.code === 200)
  }
}
