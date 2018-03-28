import * as service from '../base/service'

export default {
  // 意见反馈列表
  getFeedbacks: pagination =>
    service.get('/feedbacks/page', pagination).then(res => res).catch(err => err),
  // 监狱用户列表
  getPrisonUsers: pagination =>
    service.get('/users/page', pagination).then(res => res).catch(err => err)
}
