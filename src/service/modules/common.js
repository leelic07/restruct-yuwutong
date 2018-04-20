import * as service from '../base/service'

export default {
  // 用户登录
  login: params => {
    return service.post('/users/login', params).then(res => res.code === 200 && res.data)
  },
  logout: () => {
    return service.get('/users/logout').then(res => res.code === 200)
  }
}
