export default {
  getMeetings(state, params) {
    state.meetings.contents = params.meetings
    state.meetings.total = params.total
  },
  adjustMeeting(state, params) {
    state.meetingAdjustment.meetingQueue = params.meetingQueue
    state.meetingAdjustment.terminals = params.terminals
    state.meetingAdjustment.meetings = params.meetings
  }
}
