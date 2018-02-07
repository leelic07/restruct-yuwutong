/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取终端信息列表
  getTerminals: params =>
    service.get(`${service.agency}/terminals.json`, params).then(res => res).catch(err => err),
  //添加终端信息
  addTerminal: terminal =>
    service.post(`${service.agency}/terminals`, terminal).then(res => res).catch(err => err)
}
