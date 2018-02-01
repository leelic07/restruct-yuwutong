/**
 * Created by Administrator on 2018/1/10/010.
 */
import * as service from '../base/service'

export default {
  //获取监狱基本信息
  getJailsInformation: params =>
    service.get(`${service.agency}/jails.json`, params).then(res => res).catch(err => err),

  //富文本上传图片
  uploadImageFromEditor: image =>
    service.postFile(`${service.agency}/prisoners/upload_img`, image).then(res => res).catch(err => err),

  //编辑监狱信息
  editJails: jails =>
    service.postFile(`${service.agency}/jails/update`, jails).then(res => res).catch(err => err)
}

