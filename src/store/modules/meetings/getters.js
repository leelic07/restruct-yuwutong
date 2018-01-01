/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取家属注册数组信息
  meetings(state){
    return state.meetings
  },

  meetingsTotal: state => state.total,

  authMeetingsResult(state){
    return state.authorizationResult
  }
}
