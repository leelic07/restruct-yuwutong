/**
 * Created by Administrator on 2018/1/4/004.
 */
import http from '@/service'

export default {
  //获取监狱长邮箱信息
  getMailBoxes: ({commit}, type) =>
    http.getMailBoxes(type).then(res => res.code === 200 &&
    // let mailBoxesList = {};
    // Object.assign(mailBoxesList, {
    //   mailBoxes: res[0],
    //   registrations: res[1].registrations,
    //   meetings: res[2]
    // });
    commit('getMailBoxes', res)).catch(err => console.log(err)),
  //根据id获取邮件详情
  getMailDetailById: ({commit}, id) =>
    http.getMailDetailById(id).then(res => res.code === 200 && commit('getMailDetailById', res)).catch(err => console.log(err)),
  //监狱回复家属的邮件
  replyComment({commit}, regs){
    let id = regs.id;
    http.replyComment(regs).then(res => res.code === 200 && http.getMailDetailById(id).then(response => {
      commit('replyComment', res);
      commit('getMailDetailById', response);
    }).catch(err => console.log(err))).catch(err => console.log(err));
  }
}
