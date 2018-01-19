/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取家属会见信息
  getMeetings(state, meetingList){
    state.meetings = meetingList.meetings;
    state.meetingsTotal = meetingList.total;
  },
  //给家属会见信息授权
  authorizeMeetings(state, authorizationResult){
    for (let meet of state.meetings) {
      if (meet.id === Number(authorizationResult.id)) {
        if (authorizationResult.code === 200)
          meet.status = authorizationResult.status;
      }
    }
    state.authorizationResult = authorizationResult;
  },
  //设置家属会见授权结果
  setAuthMeetingsResult(state, authorizationResult){
    state.authorizationResult = authorizationResult;
  }
}
