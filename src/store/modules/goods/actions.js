/**
 * Created by Administrator on 2018/1/2/002.
 */
import http from '@/service'

export default {
  //获取商品列表信息
  getGoods:({commit}, regs) =>
    http.getGoods(regs).then(res => commit('getGoods', res)).catch(err => console.log(err))
}
