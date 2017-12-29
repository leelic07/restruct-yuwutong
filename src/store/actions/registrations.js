/**
 * Created by Administrator on 2017/12/18/018.
 */
import axios from 'axios'

export default {
  //获取家属注册信息列表
  getRegistrations: ({commit}, regs) => {
    axios.get('/registrations.json', {
      params: regs,
      headers:{
        'Access-Control-Allow-Origin':'*'
      },
      // proxy: {
      //   port: 3000,
      //   'Access-Control-Allow-Origin':'*'
      // }
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
    axios.patch(`/registrations/${id}`, regs).then(res => {
      commit('authorizeRegistrations', res.data);
    }).catch(err => {
      console.log(err);
    })
  }
}
