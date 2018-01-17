/**
 * Created by Administrator on 2018/1/4/004.
 */
export default {
  getMailBoxes(state, mailBoxesList){
    let mailBoxes = new Array();

    //给邮箱信息添加发送人和关系的字段
    for (let mail of mailBoxesList.mailBoxes) {
      for (let reg of mailBoxesList.registrations) {
        if (mail.family_id === reg.id) {
          Object.assign(mail, {poster: reg.name, relationship: reg.relationship});
        }
      }
    }

    //将邮箱信息拆分成长度为10的数组
    for (let key = 0; key < mailBoxesList.mailBoxes.length; key += 10) {
      if (key + 9 > mailBoxesList.mailBoxes.length) {
        mailBoxes.push(mailBoxesList.mailBoxes.slice(key, mailBoxesList.mailBoxes.length));
      } else {
        mailBoxes.push(mailBoxesList.mailBoxes.slice(key, key + 9));
      }
    }

    state.mailBoxes = mailBoxes;
    state.mailBoxesTotal = mailBoxesList.mailBoxes.length;
  },

  //获取邮件详情信息
  getMailDetail(state, id){
    let mailBoxes = new Array();

    //将mailBoxes二维数组拼接成一维数组
    for (let mail of state.mailBoxes) {
      mailBoxes = mailBoxes.concat(mail);
    }

    //找出对应id得监狱长邮箱详情信息
    for (let mailDetail of mailBoxes) {
      if (mailDetail.id === Number(id)) {
        state.mailDetail = mailDetail;
        break;
      }
    }
  }
}
