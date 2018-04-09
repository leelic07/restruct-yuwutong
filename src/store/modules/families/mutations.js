export default {
  // 获取家属信息列表
  getFamilies(state, params) {
    state.familyList = params.families
    state.familiesTotal = params.familiesSize
  }
}
