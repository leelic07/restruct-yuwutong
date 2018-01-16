/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取家属注册信息列表
  getRegistrations: params =>
    service.get('/registrations.json', params).then(res => res).catch(err => err),

  //授权家属注册信息列表
  authorizeRegistrations: (params, id) =>
    service.patch(`/registrations/${id}`, params).then(res => res).catch(err => err),

  //获取家属注册信息的照片url
  getUuidImage: id =>
    service.get(`registrations/${id}/uuid_images`).then(res => res).catch(err => err)
}
