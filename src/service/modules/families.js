/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取家属注册信息列表
  getFamilies: params =>
    service.get(`${service.agency}/families.json`, params).then(res => res).catch(err => err)
}
