export default {
  getFamilies(state, params) {
    state.families.contents = params.families
    state.families.total = params.familiesSize
  }
}
