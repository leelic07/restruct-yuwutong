export default {
  // 获取家属信息列表
  getLogList(state, params) {
    state.logList = params.appLoggers
    state.logTotal = params.appLoggersSize
  }
}
