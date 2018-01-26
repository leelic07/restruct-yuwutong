/**
 * Created by Administrator on 2018/1/4/004.
 */
import http from '@/service'

export default {
  //获取监狱长邮箱信息
  getMailBoxes: ({commit}, type) =>
    http.getMailBoxes(type).then(res => {
      let mailBoxesList = {};
      Object.assign(mailBoxesList, {
        mailBoxes: res[0],
        registrations: res[1].registrations,
        meetings: res[2]
      });
      commit('getMailBoxes', mailBoxesList);
    }).catch(err => console.log(err)),

  //根据id获取邮件详情
  getMailDetailById: ({commit}, id) =>
    http.getMailDetailById(id).then(res => commit('getMailDetailById', res)).catch(err => console.log(err)),

  //监狱回复家属的邮件
  replyComment: ({commit}, regs) => {
    let id = regs.id;
    delete regs.id;
    http.replyComment(regs, id).then(res => commit('replyComment', res)).catch(err => console.log(err));
  }

}
