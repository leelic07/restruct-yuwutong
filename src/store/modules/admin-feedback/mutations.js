export default {
  // 获取家属信息列表
  getFeedbacks(state, feedbackList) {
    let feedbacks = feedbackList.feedbacks,
      total = feedbackList.listSize
    state.feedbacks = feedbacks
    state.feedbacksTotal = total
  }
}
