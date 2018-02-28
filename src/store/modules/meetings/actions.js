/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //获取家属会见信息列表
  getMeetings({commit}, regs){
    if (regs.value) {
      delete regs.c;
      delete regs.value;
    }
    http.getMeetings(regs).then(res => commit('getMeetings', res)).catch(err => console.log(err))
  },
  //授权家属会见信息列表
  authorizeMeetings({commit}, regs){
    let id = regs.id;//获取要授权的家属会见id
    let status = regs.status;//授权家属会见的状态
    delete regs.id;
    http.authorizeMeetings(regs, id).then(res => res.code === 200 && commit('authorizeMeetings', {
      ...res,
      'id': id,
      'status': status
    })).catch(err => console.log(err))
  },
  //撤回家属会见
  withDrawMeetings({commit}, regs){
    let id = regs.id;//家属会见的id
    let status = regs.status;//撤回家属会见的状态
    delete regs.id;
    http.withDrawMeetings(regs, id).then(res => res.code === 200 && commit('withDrawMeetings', {
      ...res,
      'id': id,
      'status': status
    })).catch(err => console.log(err))
  }
}
