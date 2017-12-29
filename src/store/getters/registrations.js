/**
 * Created by Administrator on 2017/12/18/018.
 */
export default {
  //获取家属注册数组信息
  registrations: state => state.REGISTRATIONS.registrations,

  registrationsTotal: state => state.REGISTRATIONS.total,

  //获取家属注册授权结果
  authRegistrationsResult: (state) => {
    return state.REGISTRATIONS.authorizationResult;
  }
}
