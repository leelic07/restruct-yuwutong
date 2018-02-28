/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取家属会见列表信息
  meetings: state => state.meetings,
  //获取家属会见列表信息
  meetingsTotal: state => state.meetingsTotal,
  //获取授权家属会见的结果
  authMeetingsResult: state => state.authorizationResult,
  //获取撤回家属会见的结果
  withDrawMeetingsResult: state => state.withDrawMeetingsResult
}
