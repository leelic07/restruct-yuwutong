/**
 * Created by Administrator on 2018/1/10/010.
 */
import http from '@/service'

export default {
  //获取法律法规信息
  getLawsInformation: ({commit}, regs) =>
    http.getLawsInformation(regs).then(res => commit('getLawsInformation', res)).catch(err => console.log(err)),
  //添加法律法规信息
  addLaw({commit}, regs){
    let formData = new FormData();
    regs.image && formData.append('image', regs.image.raw);
    formData.append('title', regs.title);
    formData.append('contents', regs.contents);
    formData.append('sys_flag', regs.sys_flag);
    http.addLaw(formData).then(res => res.code === 200 &&
      http.getLawsInformation().then(response => {
        commit('getLawsInformation', response);
        commit('addLaw', res);
      }).catch(err => console.log(err))
    ).catch(err => console.log(err))
  },
  //编辑法律法规信息
  editLaw({commit}, regs){
    let formData = new FormData();
    regs.image && formData.append('image', regs.image.raw);
    formData.append('title', regs.title);
    formData.append('contents', regs.contents);
    formData.append('id', regs.id);
    formData.append('sys_flag', regs.sys_flag);
    http.editLaw(formData).then(res => res.code === 200 &&
      http.getLawsInformation().then(response => {
        commit('getLawsInformation', response);
        commit('editLaw', Object.assign(res, {id: regs.id}));
      }).catch(err => console.log(err))
    ).catch(err => console.log(err))
  },
  //根据id删除法律法规
  deleteLawById: ({commit}, regs) =>
    http.deleteLawById(regs).then(res => res.code === 200 && commit('deleteLawById', Object.assign(res, {id: regs}))).catch(err => console.log(err))
}
