export default {
  // 获取用户登录时的token
  // getAuthentication(state, tokenList){
  //   sessionStorage.setItem('token', tokenList.token)
  //   state.token = tokenList.token
  // },
  // 获取用户登录时的信息
  // getUsers(state, users){
  //   sessionStorage.setItem('user_id', users.id)
  //   sessionStorage.setItem('jail_id', users.jail_id)
  //   sessionStorage.setItem('role', users.role_id)
  //   sessionStorage.setItem('zipcode', users.zipcode)
  //   sessionStorage.setItem('username', users.username)
  //   state.users = users
  // },
  // 获取用户登录的结果
  login(state, loginResult) {
    let users = loginResult.data.users, token = loginResult.data.token
    sessionStorage.setItem('user_id', users.id)
    sessionStorage.setItem('role', users.role)
    sessionStorage.setItem('jail_id', users.jailId)
    sessionStorage.setItem('jail_name', users.jailName)
    token && sessionStorage.setItem('token', token)
    state.loginResult = loginResult
    state.users = users
  }
}
