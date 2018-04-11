export default {
  // 获取家属信息列表
  getLogList(state, params) {
    console.log(params)
    state.logList = params.appLoggers
    state.logTotal = params.appLoggersSize
    // let feedbacks = logList.feedbacks,
    //   total = logList.listSize
    // state.feedbacks = feedbacks
    // state.feedbacksTotal = total
  }
}
