/**
 * Created by Administrator on 2018/1/9/009.
 */
import http from '../../../service'

export default {
  //获取家属订单信息列表
  getFamilyOrders({commit}, regs){
    http.getFamilyOrders(regs).then(res => {
      commit('getFamilyOrders', res);
    }).catch(err => {
      console.log(err);
    });
  }
}
