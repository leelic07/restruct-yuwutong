/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '../../../service'

export default {
  //获取家属注册信息列表
  getRegistrations({commit}, regs){
    http.getRegistrations(regs).then(res => {
      commit('getRegistrations', res);
    }).catch(err => {
      console.log(err);
    })
  },

  //授权家属注册信息列表
  authorizeRegistrations({commit}, regs){
    let id = regs.id;
    delete regs.id;
    http.authorizeRegistrations(regs, id).then(res => {
      commit('authorizeRegistrations', res);
    }).catch(err => {
      console.log(err);
    })
  },

  //获取家属注册信息的照片url
  getUuidImage({commit}, id){
    http.getUuidImage(id).then(res => {
      commit('getUuidImages', res);
    }).catch(err => {
      console.log(err);
    })
  }

}
