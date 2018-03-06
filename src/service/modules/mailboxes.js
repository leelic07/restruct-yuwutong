/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取监狱长邮箱信息
  getMailBoxes: pagination =>
    // service.all([`/mail_boxes.json?type=${type}`, `/registrations.json`, `/meetings.json`]).then(res => res).catch(err => err),
    service.get('/mailboxes/page', pagination).then(res => res).catch(err => err),
  //根据id获取邮件详情
  getMailDetailById: id =>
    service.get('/mailboxes/jailReply', {id: id}).then(res => res).catch(err => err),
  //监狱回复家属的邮件
  replyComment: comments =>
    service.post('/mailboxes/reply', comments).then(res => res).catch(err => err)
}
