/**
 * Created by Administrator on 2017/12/18/018.
 */
export default {
  getRegistrations(state,registrationList) {
    // console.log(registrationList);
    state.REGISTRATIONS.registrations = registrationList.registrations;
    state.REGISTRATIONS.total = registrationList.total;
  },
  authorizeRegistrations(state,authorizationResult) {
    state.REGISTRATIONS.authorizationResult = authorizationResult;
  },
  setAuthRegistrationsResult(state,authorizationResult) {
    state.REGISTRATIONS.authorizationResult = authorizationResult;
  }
}
