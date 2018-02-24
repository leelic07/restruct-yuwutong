/**
 * Created by Administrator on 2018/2/7/007.
 */
import * as service from '../base/service'

export default {
  //修改用户名密码执行的方法
  modifyPassword: user =>
    service.post(`/super_user/modify`, user).then(res => res).catch(err => err)
}
