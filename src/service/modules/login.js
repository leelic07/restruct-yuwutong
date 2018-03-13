/**
 * Created by Administrator on 2018/1/24/024.
 */
import * as service from '../base/service'
import qs from 'qs'

export default {
  //获取用户登录时的token
  // getAuthentication: params =>
  //   service.post(`/authentication`, params).then(res => res).catch(err => err),
  //获取用户登录时的信息
  // getUsers: () =>
  //   service.get(`/users`).then(res => res).catch(err => err)
  //用户登录
  login: userInfo =>
    service.post('/users/login', qs.stringify(userInfo)).then(res => res).catch(err => err)
}
