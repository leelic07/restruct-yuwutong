/**
 * Created by Administrator on 2018/1/4/004.
 */
export default {
  //获取用户登录时的token
  getAuthentication(state, tokenList){
    console.log(tokenList.token);
    state.token = tokenList.token;
    sessionStorage.setItem('token', tokenList.token);
  },
  //获取用户登录时的信息
  getUsers(state, users){
    state.users = users;
    sessionStorage.setItem('jail_id', users.jail_id);
    sessionStorage.setItem('role', users.role);
  }
}
