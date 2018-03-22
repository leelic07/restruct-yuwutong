import * as service from '../base/service'

export default {
  // 获取家属注册信息列表
  getRegistrations: pagination =>
    service.get('/registrations/page', pagination).then(res => res).catch(err => err),

  // 授权家属注册信息列表
  authorizeRegistrations: (params, id) =>
    service.post('/registrations/authorize', params).then(res => res).catch(err => err),

  // 获取家属注册信息的照片url
  getUuidImage: id =>
    service.get(`/registrations/${ id }/uuid_images`).then(res => res).catch(err => err)
}
