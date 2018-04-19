export default {
  // 获取监狱基本信息
  getJailsInformation: (state, jails) => {
    state.jailsInformation = jails.data.jails
  },
  // 编辑监狱信息
  editJails: (state, editJailsResult) => { state.editJailsResult = editJailsResult }
}
