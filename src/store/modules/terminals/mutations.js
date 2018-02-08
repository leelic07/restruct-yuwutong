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
  //根据id删除终端信息
  deleteTerminalById: (state, deleteTerminalResult) => state.deleteTerminalResult = deleteTerminalResult,
  //根据id查找需要编辑的终端信息
  getTerminalById: (state, id) =>
    state.terminals.forEach(terminal => {
      terminal.id === Number(id) && (state.terminalForEdit = terminal);
    }),
  //编辑终端信息
  editTerminal: (state, editTerminalResult) => state.editTerminalResult = editTerminalResult
}
