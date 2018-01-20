/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //获取家属会见信息列表
  getMeetings: ({commit}, regs) =>
    http.getMeetings(regs).then(res => commit('getMeetings', res)).catch(err => console.log(err)),

  //授权家属会见信息列表
  authorizeMeetings: ({commit}, regs) => {
    let id = regs.id;//获取要授权的家属会见id
    let status = regs.status;//授权或者是拒绝授权家属会见
    delete regs.id;
    http.authorizeMeetings(regs, id).then(res => commit('authorizeMeetings', Object.assign(res, {
      'id': id,
      'status': status
    }))).catch(err => console.log(err))
  },
}
