/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'
import http from '../../../service'

export default {
  //获取家属注册信息列表
  getRegistrations: ({commit}, regs) => {
    http.getRegistrations(regs).then(res => {
      commit('getRegistrations',res);
    })
  },

  //授权家属注册信息列表
  authorizeRegistrations: ({commit}, regs) => {
    let id = regs.id;
    delete regs.id;
    http.authorizeRegistrations(regs,id).then(res => {
      commit('authorizeRegistrations',res);
    })
  },

  getUuidImage: ({commit}, id) => {
    axios.get(`registrations/${id}/uuid_images`).then(res => {
      commit('getUuidImages',res.data);
    }).catch(err => {
      console.log(err);
    })
  }

}
