export default {
  getPrisonAll(state, params) {
    state.prisonAll = params.jails
  },
  getPrisonAllWithBranchPrison(state, params) {
    state.prisonAllWithBranchPrison = params.jails
  },
  getProvincesAll(state, params) {
    state.provincesAll = params.provinces
  },
  getCities(state, params) {
    state.cities = params.citys
  },
  getPrisonAreas(state, params) {
    state.prisonAreas = params.prisonConfigs
  }
}
