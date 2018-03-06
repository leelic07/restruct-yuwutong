/**
 * Created by Administrator on 2018/1/4/004.
 */
export default {
  //获取监狱长信箱列表
  mailBoxes: state => state.mailBoxes,
  //获取监狱长信箱列表长度
  mailBoxesTotal: state => state.mailBoxesTotal,
  //获取监狱长信箱详情信息
  mailDetail: state => state.mailDetail,
  //获取回复监狱长信箱的结果
  commentResult: state => state.commentResult
}
