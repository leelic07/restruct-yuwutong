import http from '@/service'

export default {
  // 获取家属会见信息列表
  getMeetings({ commit }, regs) {
    http.getMeetings(regs).then(res => commit('getMeetings', res)).catch(err => console.log(err))
  },
  // 授权家属会见信息列表
  authorizeMeetings({ commit }, regs) {
    let id = regs.id, // 获取要授权的家属会见id
      status = regs.status// 授权家属会见的状态
    http.authorizeMeetings(regs).then(res => res.code === 200 && commit('authorizeMeetings', {
      ...res,
      'id': id,
      'status': status
    })).catch(err => console.log(err))
  },
  // 撤回家属会见
  withDrawMeetings({ commit }, regs) {
    let id = regs.id, // 家属会见的id
      status = regs.status// 撤回家属会见的状态
    http.withDrawMeetings(regs).then(res => res.code === 200 && commit('withDrawMeetings', {
      ...res,
      'id': id,
      'status': status
    })).catch(err => console.log(err))
  }
}
