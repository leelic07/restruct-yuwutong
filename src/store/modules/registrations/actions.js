/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //获取家属注册信息列表
  getRegistrations: ({commit}, regs) =>
    http.getRegistrations(regs).then(res => commit('getRegistrations', res)).catch(err => console.log(err)),

  //授权家属注册信息列表
  authorizeRegistrations({commit}, regs){
    let id = regs.id;//获取要授权的家属注册id
    let status = regs.status;//授权或者是拒绝授权家属注册
    delete regs.id;
    http.authorizeRegistrations(regs, id).then(res =>
      commit('authorizeRegistrations', Object.assign(res, {
        'id': id,
        'status': status
      }))).catch(err => console.log(err));
  },

  //获取家属注册信息的照片url
  getUuidImage: ({commit}, id) =>
    http.getUuidImage(id).then(res => commit('getUuidImages', res)).catch(err => console.log(err))
}
