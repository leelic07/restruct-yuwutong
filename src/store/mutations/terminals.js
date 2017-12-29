/**
 * Created by Administrator on 2017/12/26/026.
 */
export default {
  getTerminals(state,terminalList) {
    state.TERMINALS.terminals = terminalList.data.prisoner_data;
    state.TERMINALS.total = terminalList.recordsTotal[0]['COUNT(*)'];
  }
}
