import * as service from '../base/service'

export default {
  getFeedbacks: pagination =>
    service.get('/feedbacks/page', pagination).then(res => res).catch(err => err)
}
