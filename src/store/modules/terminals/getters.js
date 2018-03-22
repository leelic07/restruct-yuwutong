export default {
  //获取终端列表信息
  terminals: state => state.terminals,
  //获取终端列表的总记录数
  terminalsTotal: state => state.terminalsTotal,
  //获取添加终端信息的结果
  addTerminalResult: state => state.addTerminalResult,
  //获取根据id删除终端信息的结果
  deleteTerminalResult: state => state.deleteTerminalResult,
  //获取需要编辑的终端信息
  terminalForEdit: state => state.terminalForEdit,
  //获取编辑终端信息的结果
  editTerminalResult: state => state.editTerminalResult,
}
