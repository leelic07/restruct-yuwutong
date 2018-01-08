/**
 * Created by Administrator on 2018/1/2/002.
 */
import http from '../../../service'

export default {
  //获取商品列表信息
  getGoods({commit}, regs){
    http.getGoods(regs).then(res => {
      commit('getGoods', res);
    }).catch(err => {
      console.log(err);
    });
  },
  //每页显示条数，当前页码，搜索条件发生变化时执行的方法
  searchGoods({commit}, regs){
    commit('searchGoods', regs);
  }
}
