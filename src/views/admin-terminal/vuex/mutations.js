export default {
  getTerminals(state, params) {
    state.terminals.contents = params.terminals
    state.terminals.total = params.total
  },
  getTerminalsDetail(state, params) {
    state.terminal = params.terminals
  }
}
