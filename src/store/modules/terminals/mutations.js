/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getTerminals(state, terminalList) {
    state.terminals = terminalList.data.prisoner_data;
    state.terminalsTotal = terminalList.recordsTotal[0]['COUNT(*)'];
  }
}
