export default {
  // 获取家属信息列表
  getPrisonUsers(state, prisonUserList) {
    state.prisonUsers = prisonUserList.items
    state.prisonUsersTotal = prisonUserList.itemSize
  },
  updatePrisonUser(state, prisonUser) {
    state.prisonUser = Object.assign({}, prisonUser, { jailObj: {} })
  },
  updateJails(state, jails) {
    let res = []
    jails.provinces.map(province => {
      province.citys.map(city => {
        res = res.concat(city.jails)
      })
    })
    state.jails = res
  }
}
