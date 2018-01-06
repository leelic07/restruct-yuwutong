/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'

export default {
  //获取囚犯账户信息列表
  getAccounts: ({commit}, regs) => {
    axios.get('/accounts.json', {
      params: regs
    }).then(res => {
      commit('getAccounts', res.data);
    }).catch(err => {
      console.log(err);
    })
  },
  //获取囚犯账户详情信息
  getAccountDetail({commit}, regs){
    axios.get(`/accounts/${regs}`).then(res => {
      console.log(res);
      if(res.data.code == 200) {
        commit('getAccountDetail',res.data);
      }
    }).catch(err => {
      console.log(err);
    });
  }
}
