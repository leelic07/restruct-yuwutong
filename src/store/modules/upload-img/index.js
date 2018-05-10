/**
 * Created by Administrator on 2018/3/21/021.
 */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

let state = {
  uploadImgResult: {}, // 上传图片的结果
  authorization: { 'Authorization': '523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a' } // 给文件上传的头部加上token
}

export default {
  actions,
  mutations,
  getters,
  state
}
