export default {
  // 获取家属信息列表
  getPrisons(state, params) {
    state.prisons.contents = params.jails
    state.prisons.total = params.jailsSize
  },
  getPrisonDetail(state, params) {
    console.log(params)
    state.prison = Object.assign({}, params)
    state.meetingQueue = params.meetingQueue
  }
}
