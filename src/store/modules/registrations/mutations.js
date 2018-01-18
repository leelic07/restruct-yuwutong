/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getRegistrations(state, registrationList) {
    state.registrations = registrationList.registrations;
    state.registrationsTotal = registrationList.total;
  },
  authorizeRegistrations(state, authorizationResult) {
    let id = authorizationResult.id;
    for (let reg of state.registrations) {
      if (reg.id === Number(id)) {
        if (authorizationResult.code === 200)
          reg.status = 'PASSED';
        else
          reg.status = 'DENIED';
      }
    }
    state.authorizationResult = authorizationResult;
  },
  setAuthRegistrationsResult(state, authorizationResult) {
    state.authorizationResult = authorizationResult;
  },
  getUuidImages(state, images) {
    state.uuidImages = images;
  }
}
