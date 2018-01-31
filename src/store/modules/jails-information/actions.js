/**
 * Created by Administrator on 2018/1/10/010.
 */
import http from '@/service'

export default {
  //获取监狱基本信息
  getJailsInformation: ({commit}, regs) =>
    http.getJailsInformation(regs).then(res => commit('getJailsInformation', res)).catch(err => console.log(err)),

  //编辑监狱信息
  editJails({commit}, regs){
    regs.image ? new FormData().append('image', regs.image) : '';
    let jails = {
      title: regs.title,
      description: regs.description,
      street: regs.street,
      district: regs.district,
      city: regs.city,
      state: regs.state,
    };
    http.editJails(regs.image, jails, regs.id).then(res => commit('editJails', res)).catch(err => err);
  }
}
