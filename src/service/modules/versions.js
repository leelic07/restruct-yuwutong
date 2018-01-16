/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //更新狱务通版本信息
  updateVersion: params =>
    service.post('/versions/update', params).then(res => res).catch(err => err),
}
