/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //获取家属注册信息列表
  getTerminals({commit}, regs){
    let start = (regs.draw - 1) * regs.length;//计算从第几条开始获取数据
    Object.assign(regs, {'start': start});
    http.getTerminals(regs).then(res => commit('getTerminals', res)).catch(err => console.log(err));
  }
}
