/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取家属注册信息
  getRegistrations(state, registrationList){
    state.registrations = registrationList.registrations;
    state.registrationsTotal = registrationList.total;
  },
  //给家属注册信息授权
  authorizeRegistrations(state, authorizationResult){
    for (let reg of state.registrations) {
      if (reg.id === Number(authorizationResult.id)) {
        if (authorizationResult.code === 200)
          reg.status = authorizationResult.status;
      }
    }
    state.authorizationResult = authorizationResult;
  },
  //设置授权结果
  setAuthRegistrationsResult: (state, authorizationResult) => state.authorizationResult = authorizationResult,
  //获取家属注册信息的照片地址
  getUuidImages: (state, images) => state.uuidImages = images
}
