export default {
  // 获取家属信息列表
  getFeedbacks(state, feedbackList) {
    let feedbacks = feedbackList.data.feedbacks,
      total = feedbackList.data.listSize
    state.feedbacks = feedbacks
    state.feedbacksTotal = total
  }
}
