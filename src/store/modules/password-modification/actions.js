/**
 * Created by Administrator on 2018/2/7/007.
 */
import http from '@/service'

export default {
  //修改用户名密码的方法
  modifyPassword({commit}, regs){
    let params = {
      password: regs.password,
      new_password: regs.new_password,
      zipcode: sessionStorage['zipcode'],
      user_name: sessionStorage['username']
    };
    http.modifyPassword(params).then(res => res.code === 200 && commit('modifyPassword', res)).catch(err => console.log(err))
  }
}