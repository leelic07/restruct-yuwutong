export default {
  // 获取家属信息列表
  getPrisonList(state, params) {
    state.prisonList = params.jails
    state.prisonTotal = params.jailsSize
  }
}
