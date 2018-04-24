export default {
  getMeetings(state, params) {
    state.meetings.contents = params.meetings
    state.meetings.total = params.total
  }
}
