/**
 * Created by Administrator on 2017/12/21/021.
 */
export default {
  getMeetings(state,meetingList) {
    state.MEETINGS.meetings = meetingList.meetings;
    state.MEETINGS.total = meetingList.total;
  },
  authorizeMeetings(state,authorizationResult) {
    state.MEETINGS.authorizationResult = authorizationResult;
  },
  setAuthMeetingsResult(state,authorizationResult) {
    state.MEETINGS.authorizationResult = authorizationResult;
  }
}
