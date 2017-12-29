/**
 * Created by Administrator on 2017/12/21/021.
 */
export default {
  //获取家属注册数组信息
  meetings(state){
    return state.MEETINGS.meetings
  },

  meetingsTotal: state => state.MEETINGS.total,

  authMeetingsResult(state){
    return state.MEETINGS.authorizationResult
  }
}
