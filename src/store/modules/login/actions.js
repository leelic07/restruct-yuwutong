/**
 * Created by Administrator on 2018/1/4/004.
 */
import http from '@/service'

export default {
  //点击登录时调用的接口
  // login({commit}, regs){
  //   delete regs.checked;
  //   http.getAuthentication(regs).then(res => {
  //     commit('getAuthentication', res);
  //     //获取登录用户信息
  //     res.token && http.getUsers().then(res => commit('getUsers', res)).catch(err => console.log(err));
  //   }).catch(err => console.log(err));
  // }
  login({commit}, regs){
    // delete regs.checked;
    http.login(regs).then(res => res.code === 200 && commit('login', res)).catch(err => console.log(err))
  }
}
