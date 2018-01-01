/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'

export default {
  //获取家属注册信息列表
  getAccounts: ({commit}, regs) => {
    axios.get('../../../mock/accounts.json', {
      params: regs
    }).then(res => {
      commit('getAccounts', res.data);
    }).catch(err => {
      console.log(err);
    })
  }
}
