/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取家属注册信息列表
  getTerminals: params =>
    service.get('/terminals.json', params).then(res => res).catch(err => err)
}
