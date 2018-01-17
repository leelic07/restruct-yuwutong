/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getMeetings(state, meetingList) {
    state.meetings = meetingList.meetings;
    state.meetingsTotal = meetingList.total;
  },
  authorizeMeetings(state, authorizationResult) {
    state.authorizationResult = authorizationResult;
  },
  setAuthMeetingsResult(state, authorizationResult) {
    state.authorizationResult = authorizationResult;
  }
}
