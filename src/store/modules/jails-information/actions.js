/**
 * Created by Administrator on 2018/1/10/010.
 */
import http from '@/service'

export default {
  //获取监狱基本信息
  getJailsInformation: ({commit}, regs) =>
    http.getJailsInformation(regs).then(res => commit('getJailsInformation', res)).catch(err => console.log(err))
}
