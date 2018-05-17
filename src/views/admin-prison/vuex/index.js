import actions from './actions'
import mutations from './mutations'

let state = {
  prisons: { contents: [], total: 0 },
  prison: { imageUrl: '', meetingQueue1: [null], batchQueue1: [null] },
  meetingQueue: []
}

export default {
  actions,
  mutations,
  state
}
