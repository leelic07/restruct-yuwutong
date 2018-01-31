/**
 * Created by Administrator on 2018/1/10/010.
 */
import * as service from '../base/service'

export default {
  //获取监狱基本信息
  getJailsInformation: params =>
    service.get(`${service.agency}/jails.json`, params).then(res => res).catch(err => err),

  //编辑监狱
  editJails: (image, jails, id) => {
    console.log(image, jails, id);
    return service.patchFile(`${service.agency}/jails/${id}`, image, jails).then(res => res).catch(err => err)
  }

}

