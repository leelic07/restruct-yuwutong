import actions from './actions'
import mutations from './mutations'

let state = {
  user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}
}

export default {
  actions,
  mutations,
  state
}
