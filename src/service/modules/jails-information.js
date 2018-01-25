/**
 * Created by Administrator on 2018/1/10/010.
 */
import * as service from '../base/service'

export default {
  //获取监狱基本信息
  getJailsInformation: params =>
    service.get(`${service.agency}/jails.json`, params).then(res => res).catch(err => err)
}

