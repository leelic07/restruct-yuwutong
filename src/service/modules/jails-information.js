import * as service from '../base/service'
import qs from 'qs'

export default {
  //获取监狱基本信息
  getJailsInformation: () =>
    service.get('/jails/index').then(res => res).catch(err => err),
  //富文本上传图片
  uploadImageFromEditor: image =>
    service.postFile('/upload', image).then(res => res).catch(err => err),
  //编辑监狱信息
  editJails: jails =>
    service.postFile('/jails/update', jails).then(res => res).catch(err => err)
}
