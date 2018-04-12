import actions from './actions'
import mutations from './mutations'

let state = {
  advertisements: { contents: [], total: 0 },
  advertisement: {},
  advertisementTypes: []
}

export default {
  actions,
  mutations,
  state
}
