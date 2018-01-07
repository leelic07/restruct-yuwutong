/**
 * Created by Administrator on 2018/1/4/004.
 */
import http from '../../../service'

export default {
  //获取监狱长邮箱信息
  getMailBoxes({commit}, type){
    http.getMailBoxes(type).then(res => {
      let mailBoxesList = new Object();
      Object.assign(mailBoxesList, {
        mailBoxes: res[0],
        registrations: res[1].registrations,
        meetings: res[2]
      });
      commit('getMailBoxes', mailBoxesList);
    }).catch(err => {
      console.log(err);
    })
  }

}
