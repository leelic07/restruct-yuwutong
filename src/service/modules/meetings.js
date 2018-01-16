/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取家属会见信息列表
  getMeetings: params =>
    service.get('/meetings.json', params).then(res => res).catch(err => err),

  //授权家属会见信息列表
  authorizeMeetings: (params, id) =>
    service.patch(`/meetings/${id}`, params).then(res => res).catch(err => err)

}
