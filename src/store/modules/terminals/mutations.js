/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取终端列表信息
  getTerminals(state, terminalList) {
    state.terminals = terminalList.data.prisoner_data;
    state.terminalsTotal = terminalList.recordsTotal[0]['COUNT(*)'];
  },
  //添加终端列表信息
  addTerminal: (state, addTerminalResult) => state.addTerminalResult = addTerminalResult,
}
