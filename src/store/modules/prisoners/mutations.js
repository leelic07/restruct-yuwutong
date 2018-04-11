export default {
  // 获取囚犯列表信息
  getPrisoners(state, prisonersList) {
    // prisoners.forEach(prisoner => {
    //   prisoner.families && prisoner.families.forEach(family => {
    //     family.imageUrl = family.imageUrl.split('|')[2]
    //   })
    // })
    state.prisonerList = prisonersList.data.prisoners
    state.prisonersTotal = prisonersList.data.prisonersSize
  }
}
