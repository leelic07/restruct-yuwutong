/**
 * Created by Administrator on 2018/1/4/004.
 */
export default {
  getMailBoxes(state, mailBoxesList){
    // let mailBoxes = [];
    // //给邮箱信息添加发送人和关系的字段
    // for (let mail of mailBoxesList.mailBoxes) {
    //   for (let reg of mailBoxesList.registrations) {
    //     if (mail.family_id === reg.id) {
    //       Object.assign(mail, {poster: reg.name, relationship: reg.relationship});
    //     }
    //   }
    // }
    // //将邮箱信息拆分成长度为10的数组
    // for (let key = 0; key < mailBoxesList.mailBoxes.length; key += 10) {
    //   if (key + 9 > mailBoxesList.mailBoxes.length)
    //     mailBoxes.push(mailBoxesList.mailBoxes.slice(key, mailBoxesList.mailBoxes.length));
    //   else
    //     mailBoxes.push(mailBoxesList.mailBoxes.slice(key, key + 9));
    // }
    state.mailBoxes = mailBoxesList.data.mailBoxes;
    state.mailBoxesTotal = mailBoxesList.data.total;
  },

  //获取邮件详情信息
  // getMailDetailById(state, id){
  //   let mailBoxes = [];
  //
  //   //将mailBoxes二维数组拼接成一维数组
  //   for (let mail of state.mailBoxes) {
  //     mailBoxes = mailBoxes.concat(mail);
  //   }
  //
  //   //找出对应id得监狱长邮箱详情信息
  //   for (let mailDetail of mailBoxes) {
  //     if (mailDetail.id === Number(id)) {
  //       state.mailDetail = mailDetail;
  //       break;
  //     }
  //   }
  // }

  //根据id获取邮件信息
  getMailDetailById(state, mailDetailList){
    // let mail = mailDetailList.mail;
    // let family = mailDetailList.family;
    // let prisoner = mailDetailList.prisoner;
    // //将邮件详情页说需要的信息放入到mailDetail对象中
    // state.mailDetail = {
    //   family_id: family.id,
    //   title: mail.title,
    //   poster: family.name,
    //   prisonerName: prisoner.name,
    //   relationship: family.relationship,
    //   created_at: mail.created_at,
    //   contents: mail.contents,
    //   comments: mailDetailList.comments
    // };
    state.mailDetail = mailDetailList.data.replys;
  },
  //监狱回复家属的邮件
  replyComment(state, commentResult){
    //将监狱回复家属的信息压入到当前查看的邮件对象
    // state.mailDetail.comments.push(commentResult.comment);
    state.commentResult = commentResult;
  }

}
