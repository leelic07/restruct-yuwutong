/**
 * Created by Administrator on 2018/1/10/010.
 */
export default {
  //获取监狱基本信息
  getJailsInformation: (state, jails) => {
    jails.image_url = jails.image_url.substring(6);
    state.jails = jails;
  },

  //编辑监狱信息
  editJails: (state, editJailsResult) => state.editJailsResult = editJailsResult
}
