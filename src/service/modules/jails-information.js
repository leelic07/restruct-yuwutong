import * as service from '../base/service'

export default {
  // 获取监狱基本信息
  getJailsInformation: () =>
    service.get('/jails/getJailsDetail').then(res => res).catch(err => err),
  // 富文本上传图片
  uploadImageFromEditor: image =>
    service.postFile('/upload', image).then(res => res).catch(err => err),
  // 编辑监狱信息
  editJails: jails => {
    return service.postObj('/jails/updateJails', jails).then(res => res)
  },
  // 添加监狱信息
  addJails: jails => {
    return service.postObj('/jails/addJails', jails).then(res => res)
  }
}
