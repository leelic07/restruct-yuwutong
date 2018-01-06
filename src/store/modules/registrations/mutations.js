/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getRegistrations(state,registrationList) {
    state.registrations = registrationList.registrations;
    state.total = registrationList.total;
  },
  authorizeRegistrations(state,authorizationResult) {
    state.authorizationResult = authorizationResult;
  },
  setAuthRegistrationsResult(state,authorizationResult) {
    state.authorizationResult = authorizationResult;
  },
  getUuidImages(state,images) {
    let https = 'https://www.fushuile.com';
    for(let item in images) {
      images[item] = https + images[item];
    }
    state.uuidImages = images;
  }
}
