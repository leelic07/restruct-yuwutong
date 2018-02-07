/**
 * Created by Administrator on 2018/1/4/004.
 */
export default {
  //获取用户登录时的token
  getAuthentication(state, tokenList){
    sessionStorage.setItem('token', tokenList.token);
    state.token = tokenList.token;
  },
  //获取用户登录时的信息
  getUsers(state, users){
    sessionStorage.setItem('user_id', users.id);
    sessionStorage.setItem('jail_id', users.jail_id);
    sessionStorage.setItem('role', users.role_id);
    sessionStorage.setItem('zipcode', users.zipcode);
    sessionStorage.setItem('username', users.username);
    state.users = users;
  }
}
