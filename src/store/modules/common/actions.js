export default {
  resetState: ({ commit }, params) => {
    if (!params) return
    commit('resetState', params)
  },
  addFormItems: ({ commit }, params) => {
    commit('addFormItems', params)
  }
}
