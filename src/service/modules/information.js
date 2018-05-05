import * as service from '../config/service'

export default {
  // 监狱基本信息管理-详情
  getJailInformation: () => {
    return service.get('/jails/getJailsDetail').then(res => res && res.data)
  },
  // 获取狱务公开信息
  getNewsAll: pagination =>
    service.get('/news/page', pagination).then(res => res),
  // 获取新闻详情
  getNews: params =>
    service.get(`/news/description?id=${ params }`).then(res => res).catch(err => err),
  // 根据id删除狱务公开信息
  deleteNews: params =>
    service.post('/news/delete', params).then(res => res).catch(err => err),
  // 添加狱务公开信息
  addNews: news =>
    service.post('/news/add', news).then(res => res).catch(err => err),
  // 编辑狱务公开信息
  editNews: news =>
    service.post('/news/add', news).then(res => res).catch(err => err)
}
