import * as service from '../base/service'

export default {
  // 获取家属会见信息列表
  getMeetings: params =>
    service.get('/meetings/page', params).then(res => res).catch(err => err),
  // 授权家属会见信息列表
  authorizeMeetings: params =>
    service.post('/meetings/authorize', params).then(res => res).catch(err => err),
  // 撤回家属会见信息
  withDrawMeetings: params =>
    service.post('/meetings/withdraw', params).then(res => res).catch(err => err)
}
