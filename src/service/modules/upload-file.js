import * as service from '../config/service'

export default {
  // 下载文件
  uploadFile: file => service.postFile('/upload/uploadfile', file).then(res => res).catch(err => err)
}
