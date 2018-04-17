import * as service from '../base/service'

export default {
  // 所有监狱
  getJails: () =>
    service.get('/jails/all').then(res => res).catch(err => err),
  getLogList: params => {
    return service.get('/app_logs/page', params).then(res => res)
  },
  // 监狱用户管理-列表
  getPrisonUsers: params => {
    return service.get('/users/page', params).then(res => res.code === 200 && res.data)
  },
  // 监狱用户管理-删除
  deletePrisonUser: params => {
    return service.post('/users/delete', params).then(res => res.code === 200)
  },
  // 监狱用户管理-新增
  addPrisonUser: params => {
    return service.post('/users/add', params).then(res => res.code === 200)
  },
  // 监狱用户管理-详情
  getPrisonUserDetail: params => {
    return service.get(`/users/to_edit?id=${ params }`).then(res => res.code === 200 && res.data)
  },
  // 监狱用户管理-编辑
  updatePrisonUser: params => {
    return service.post('/users/edit', params).then(res => res.code === 200)
  },
  // 监狱管理-列表
  getPrisons: params => {
    return service.get('/jails/page', params).then(res => res.code === 200 && res.data)
  },
  // 监狱管理-新增
  addPrison: params => {
    return service.postObj('/jails/addJails', params).then(res => res.code === 200)
  },
  // 意见反馈-列表
  getFeedbacks: params => {
    return service.get('/feedbacks/page', params).then(res => res.code === 200 && res.data)
  },
  // 广告管理-列表
  getAdvertisements: params => {
    return service.get('/advertisements/page', params).then(res => res.code === 200 && res.data)
  },
  // 广告管理-广告类型列表
  getAdvertisementTypes: () => {
    return service.get('/advertisements/getAdtypes').then(res => res.code === 200 && res.data)
  },
  // 广告管理-新增
  addAdvertisement: params => {
    return service.postObj('/advertisements/addAdvertisements', params).then(res => res.code === 200)
  },
  // 广告管理-上架/下架广告
  updateAdvertisementStatus: params => {
    return service.post('/advertisements/updateAdvertisementStatus', params).then(res => res.code === 200)
  },
  // 广告管理-删除
  deleteAdvertisement: params => {
    return service.post('/advertisements/deleteAdvertisement', params).then(res => res.code === 200)
  },
  // 广告管理-详情
  getAdvertisementsDetail: params => {
    return service.get('/advertisements/getAdvertisementsDetail', params).then(res => res.code === 200 && res.data)
  },
  // 广告管理-编辑
  updateAdvertisements: params => {
    return service.postObj('/advertisements/updateAdvertisements', params).then(res => res.code === 200)
  },
  // 终端管理-新增
  addTerminal: params => {
    return service.post('/terminals/add', params).then(res => res.code === 200)
  },
  // 终端管理-列表
  getTerminals: params => {
    return service.get('/terminals/page', params).then(res => res.code === 200 && res.data)
  },
  // 终端管理-详情
  getTerminalsDetail: params => {
    return service.get('/terminals/getTerminalsDetail', params).then(res => res.code === 200 && res.data)
  },
  // 终端管理-编辑
  updateTerminal: params => {
    return service.post('/terminals/edit', params).then(res => res.code === 200)
  }
}
