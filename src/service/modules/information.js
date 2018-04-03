import * as service from '../base/service'

export default {
  // 根据id删除狱务公开信息
  deleteNews: params =>
    service.post('/news/delete', params).then(res => res).catch(err => err)
}
