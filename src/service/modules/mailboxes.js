/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取监狱长邮箱信息
  getMailBoxes: type =>
    service.all([`/mail_boxes.json?type=${type}`, `${service.agency}/registrations.json`, `${service.agency}/meetings.json`]).then(res => res).catch(err => err),

  //根据id获取邮件详情
  getMailDetailById: id =>
    service.get(`/mail_boxes/${id}/check`).then(res => res).catch(err => err),

  //监狱回复家属的邮件
  replyComment: (comment, id) =>
    service.post(`/mail_boxes/${id}/comments`, comment).then(res => res).catch(err => err)
}
