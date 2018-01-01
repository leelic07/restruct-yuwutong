/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取家属注册数组信息
  registrations: state => state.registrations,

  registrationsTotal: state => state.total,

  //获取家属注册授权结果
  authRegistrationsResult: (state) => {
    return state.authorizationResult;
  }
}
