/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'

export default {
  //获取家属注册信息列表
  getRegistrations: ({commit}, regs) => {
    let url = '/registrations.json';
    axios.get(url, {
      params: regs,
    }).then(res => {
      commit('getRegistrations', res.data);
    }).catch(err => {
      console.log(err);
    })
  },

  //授权家属注册信息列表
  authorizeRegistrations: ({commit}, regs) => {
    let id = regs.id;
    delete regs.id;
    axios({
      url:`/registrations/${id}`,
      method:'patch',
      data:regs,
    }).then(res => {
      commit('authorizeRegistrations', res.data);
    }).catch(err => {
      console.log(err);
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
