import * as service from '../base/service'

export default {
  // 省份列表
  getProvincesAll: () => {
    return service.get('/provinces/list').then(res => res)
  },
  // 城市列表
  getCities: params => {
    return service.get(`/cities/list?provicesId=${ params }`).then(res => res)
  }
}
