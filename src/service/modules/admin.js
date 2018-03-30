import * as service from '../base/service'

export default {
  // 意见反馈列表
  getFeedbacks: pagination =>
    service.get('/feedbacks/page', pagination).then(res => res).catch(err => err),
  // 监狱用户列表
  getPrisonUsers: pagination =>
    service.get('/users/page', pagination).then(res => res).catch(err => err),
  // 监狱用户详情
  getPrisonUser: id =>
    service.get(`/users/to_edit?id=${ id }`).then(res => res).catch(err => err),
  // 编辑监狱用户
  editPrisonUser: params =>
    service.post('/users/edit', params).then(res => res).catch(err => err)
}