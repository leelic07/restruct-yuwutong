/**
 * Created by Administrator on 2018/1/4/004.
 */
import axios from 'axios'

export default {

  getMailBoxes({commit}, regs){
    let urls = [`/mail_boxes.json?type=${regs}`, '/registrations.json', '/meetings.json'];

    let requests = urls.map(url => axios.get(url));

    axios.all(requests).then(axios.spread((mail, reg, meet) => {
      let mailBoxesList = new Object();
      Object.assign(mailBoxesList, {
        mailBoxes: mail.data,
        registrations: reg.data.registrations,
        meetings: meet.data
      });
      commit('getMailBoxes', mailBoxesList);
    })).catch(err => {
      console.log(err);
    })
  }
}
