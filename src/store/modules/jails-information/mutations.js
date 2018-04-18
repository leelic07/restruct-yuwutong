export default {
  // 获取监狱基本信息
  getJailInformation: (state, jails) => {
    state.jailInformation = jails.jails
  },
  // 编辑监狱信息
  editJails: (state, editJailsResult) => { state.editJailsResult = editJailsResult }
}
