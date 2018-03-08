/**
 * Created by Administrator on 2018/1/10/010.
 */
import http from '@/service'

export default {
  //获取监狱基本信息
  getJailsInformation: ({commit}) =>
    http.getJailsInformation().then(res => commit('getJailsInformation', res)).catch(err => console.log(err)),
  //编辑监狱信息
  editJails({commit}, regs){
    let formData = new FormData();
    regs.image && formData.append('image', regs.image.raw);
    formData.append('title', regs.title);
    formData.append('description', regs.description);
    formData.append('street', regs.street);
    formData.append('district', regs.district);
    formData.append('city', regs.city);
    formData.append('state', regs.state);
    formData.append('zipcode', regs.zipcode);
    http.editJails(formData).then(res => res.code === 200 && commit('editJails', res)).catch(err => err);
  }
}
