import * as service from '../base/service'

export default {
  // 监狱
  getPrisonAll: () => {
    return service.get('/jails/getJailAll').then(res => res.code === 200 && res.data)
  },
  // 监狱-含分监区参数
  getPrisonAllWithBranchPrison: params => {
    return service.get('/jails/getAllJailsAndBranchPrison', params).then(res => res.code === 200 && res.data)
  },
  // 省份
  getProvincesAll: () => {
    return service.get('/provinces/list').then(res => res.code === 200 && res.data)
  },
  // 城市
  getCities: params => {
    return service.get(`/cities/list?provicesId=${ params }`).then(res => res.code === 200 && res.data)
  },
  // 监区
  getPrisonAreas: params => {
    return service.get(`/terminals/getPrisonConfigs?jailId=${ params }`).then(res => res.code === 200 && res.data)
  }
}
