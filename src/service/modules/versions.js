import * as service from '../base/service'

export default {
  //更新狱务通版本信息
  updateVersion: params =>
    service.post(`/versions/update`, params).then(res => res).catch(err => err),
  //获取狱务通app版本信息
  getVersions: pagination =>
    service.get('/versions/page', pagination).then(res => res).catch(err => err)
}
