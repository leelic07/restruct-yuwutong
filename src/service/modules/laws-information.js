/**
 * Created by Administrator on 2018/1/10/010.
 */
import * as service from '../base/service'

export default {
  //获取法律法规信息
  getLawsInformation: params =>
    service.get(`${service.agency}/laws.json`, params).then(res => res).catch(err => err),
  //添加法律法规信息
  addLaw: law =>
    service.postFile(`${service.agency}/laws`, law).then(res => res).catch(err => err),
  //编辑法律法规信息
  editLaw: law =>
    service.postFile(`${service.agency}/laws/update`, law).then(res => res).catch(err => err)
}
