export default {
  getAdvertisements: (state, params) => {
    state.advertisements.contents = params.ads
    state.advertisements.total = params.total
  },
  getAdvertisementTypes: (state, params) => {
    state.advertisementTypes = params.adtypes
  },
  getAdvertismentsDetail: (state, params) => {
    state.advertisement = Object.assign({}, { time: [] }, params)
  }
}
