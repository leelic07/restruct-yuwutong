/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取囚犯账户信息列表
  getAccounts: params =>
    service.get(`/accounts.json`, params).then(res => res).catch(err => err),

  //获取囚犯账户详情信息
  getAccountDetail: id =>
    service.get(`/accounts/${id}`).then(res => res).catch(err => err)
}
