/**
 * Created by Administrator on 2018/3/21/021.
 */
import { Message } from 'element-ui'

export default {
  // 上传图片执行的方法
  uploadImg(state, uploadImgResult) {
    switch (uploadImgResult.code) {
      case 200:
        Message({
          type: 'success',
          message: '上传图片成功'
        })
        break
      case 500:
        Message.error(`上传图片失败:${ uploadImgResult.message }`)
        break
      default:
        Message.error(uploadImgResult.message)
        break
    }
    state.uploadImgResult = uploadImgResult
  }
}
