import * as service from '../base/service'

export default {
  // 意见反馈列表
  getProvincesAll: () => {
    return service.get('/provinces/list').then(res => res)
  },
  getCities: (params) => {
    return service.get('/cities/list', params).then(res => res)
  }
}
