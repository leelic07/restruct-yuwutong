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
    service.post('/users/edit', params).then(res => res).catch(err => err),
  // 所有监狱
  getJails: () =>
    service.get('/jails/all').then(res => res).catch(err => err),
  addPrisonUser: (prisonUser) => {
    return service.post('/users/add', prisonUser).then(res => res).catch(err => err)
  },
  deletePrisonUser: params => {
    service.post('/users/delete', params).then(res => res).catch(err => err)
  },
  getPrisonList: params => {
    return service.get('/jails/page', params).then(res => res)
  },
  getLogList: params => {
    return service.get('/app_logs/page', params).then(res => res)
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
  // 广告管理-广告详情
  getAdvertismentsDetail: params => {
    return service.get('/advertisements/getAdvertisementsDetail', params).then(res => res.code === 200 && res.data)
  },
  // 广告管理-编辑
  updateAdvertisments: params => {
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
