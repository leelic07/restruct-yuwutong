export default {
  // 获取家属信息列表
  getPrisonUsers(state, prisonUserList) {
    let prisonUsers = prisonUserList.items,
      total = prisonUserList.itemSize
    state.prisonUsers = prisonUsers
    state.prisonUsersTotal = total
  }
}
