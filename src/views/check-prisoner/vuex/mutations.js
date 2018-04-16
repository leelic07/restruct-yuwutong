export default {
  getPrisoners(state, params) {
    state.prisoners.contents = params.prisoners
    state.prisoners.total = params.prisonersSize
  }
}
