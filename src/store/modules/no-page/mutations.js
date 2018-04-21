export default {
  getPrisonAll(state, params) {
    state.prisonAll = params.jails
  },
  getPrisonAllWithBranchPrison(state, params) {
    state.prisonAllWithBranchPrison = params.jails
  }
}
