/**
 * Created by Administrator on 2018/1/11/011.
 */
import * as service from '../base/service'

export default {
  //获取狱务公开信息
  getNews: params =>
    service.get(`${service.agency}/news.json`, params).then(res => res).catch(err => err),
  //编辑狱务公开信息
  editNews: news =>
    service.postFile(`${service.agency}/news/update`, news).then(res => res).catch(err => err),
  //添加狱务公开信息
  addNews: news =>
    service.postFile(`${service.agency}/news`).then(res => res).catch(err => err),
  //根据id删除狱务公开信息
  deleteNewsById: id =>
    service.remove(`${service.agency}/news/${id}`).then(res => res).catch(err => err)
}
