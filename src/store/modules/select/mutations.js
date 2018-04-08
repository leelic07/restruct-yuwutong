export default {
  getProvincesAll(state, params) {
    state.provincesAll = params.provinces
  },
  getCities(state, params) {
    state.cities = params.citys
  }
}
