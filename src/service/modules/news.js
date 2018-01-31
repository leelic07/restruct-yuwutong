/**
 * Created by Administrator on 2018/1/11/011.
 */
import * as service from '../base/service'

export default {
  //获取狱务公开信息
  getNews: params =>
    service.get(`${service.agency}/news.json`, params).then(res => res).catch(err => err),

  //富文本上传图片
  uploadImageFromEditor: image =>
    service.postFile(`${service.agency}/prisoners/upload_img`, image).then(res => res).catch(err => err)
}
