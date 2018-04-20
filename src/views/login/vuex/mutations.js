import admin from '@/router/modules/admin'
import check from '@/router/modules/check'
import common from '@/router/modules/common'
import information from '@/router/modules/information'

let addPath = (arr, routes = []) => {
  arr.forEach(item => {
    if (item.children) {
      addPath(item.children, routes)
    }
    else if (item.path !== '*') {
      routes.push(item.path)
    }
  })
  return routes
}

export default {
  // 获取用户登录的结果
  login(state, params) {
    // sessionStorage.setItem('user_id', users.id)
    // sessionStorage.setItem('role', users.role)
    // sessionStorage.setItem('jail_id', users.jailId)
    // sessionStorage.setItem('jail_name', users.jailName)
    // token && sessionStorage.setItem('token', token)
    // state.loginResult = params
    state.user = params.users
    sessionStorage.setItem('user', JSON.stringify(params.users))
    switch (params.users.role) {
      case '0':
        sessionStorage.setItem('routes', JSON.stringify(addPath([...common, ...admin])))
        break
      case '1':
        sessionStorage.setItem('routes', JSON.stringify(addPath([...common, ...check])))
        break
      case '3':
        sessionStorage.setItem('routes', JSON.stringify(addPath([...common, ...information])))
        break
      default:
        sessionStorage.setItem('routes', JSON.stringify(addPath(common)))
    }
  }
}
