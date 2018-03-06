/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取家属会见信息
  getMeetings(state, meetingList){
    state.meetings = meetingList.data.meetings;
    state.meetingsTotal = meetingList.data.total;
  },
  //给家属会见信息授权
  authorizeMeetings(state, authorizationResult){
    for (let meet of state.meetings) {
      meet.id === Number(authorizationResult.id) && (meet.status = authorizationResult.status);
    }
    state.authorizationResult = authorizationResult;
  },
  //设置家属会见授权结果
  setAuthMeetingsResult(state, authorizationResult){
    state.authorizationResult = authorizationResult;
  },
  //撤回家属会见信息
  withDrawMeetings(state, withDrawMeetingsResult){
    state.meetings.forEach(meet => meet.id === Number(withDrawMeetingsResult.id) && (meet.status = withDrawMeetingsResult.status));
    state.withDrawMeetingsResult = withDrawMeetingsResult;
  }
}
