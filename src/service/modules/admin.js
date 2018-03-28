import * as service from '../base/service'

export default {
  // 意见反馈列表
  getFeedbacks: pagination =>
    service.get('/feedbacks/page', pagination).then(res => res).catch(err => err)
}
