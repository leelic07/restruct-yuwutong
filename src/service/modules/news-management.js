/**
 * Created by Administrator on 2018/1/11/011.
 */
import * as service from '../base/service'

export default {
  //获取狱务公开信息
  getNews: pagination =>
    service.get('/news/page', pagination).then(res => res).catch(err => err),
  //编辑狱务公开信息
  editNews: news =>
    service.post('/news/update', news, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res).catch(err => err),
  //添加狱务公开信息
  addNews: news =>
    service.post('/news/add', news, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res).catch(err => err),
  //根据id删除狱务公开信息
  deleteNewsById: id =>
    service.post('/news/delete', id).then(res => res).catch(err => err)
}
