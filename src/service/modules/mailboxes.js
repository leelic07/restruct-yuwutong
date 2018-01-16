/**
 * Created by Administrator on 2018/1/7 0007.
 */
import * as service from '../base/service'

export default {
  //获取监狱长邮箱信息
  getMailBoxes: type =>
    service.all([`/mail_boxes.json?type=${type}`, '/registrations.json', '/meetings.json']).then(res => res).catch(err => err)
}
