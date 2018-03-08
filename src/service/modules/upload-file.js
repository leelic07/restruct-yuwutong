/**
 * Created by Administrator on 2018/3/8/008.
 */
import * as service from '../base/service'

export default {
  //下载文件
  uploadFile: file =>
    service.postFile('/upload/uploadfile', file).then(res => res).catch(err => err)
}
