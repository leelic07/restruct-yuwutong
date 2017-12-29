/**
 * Created by Administrator on 2017/12/26/026.
 */
/**
 * Created by Administrator on 2017/12/25/025.
 */
import axios from 'axios'

export default {
  //获取家属注册信息列表
  getTerminals: ({commit}, regs) => {
    axios.get('../../mock/terminals.json', {
      params: regs,
      // headers:{'Access-Control-Allow-Origin':'*'}
    }).then(res => {
      // console.log(res);
      commit('getTerminals', res.data);
    }).catch(err => {
      console.log(err);
    })
  }
}
