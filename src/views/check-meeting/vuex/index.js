import actions from './actions'
import mutations from './mutations'

let state = {
  meetings: { contents: [], total: 0 },
  meetingAdjustment: { meetingQueue: [], terminals: [], meetings: [], config: {} }
}

export default {
  actions,
  mutations,
  state
}
