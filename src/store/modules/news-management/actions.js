/**
 * Created by Administrator on 2018/1/11/011.
 */
import http from '@/service'

export default {
  //获取狱务公开信息
  getNews: ({commit}, regs) =>
    http.getNews(regs).then(res => commit('getNews', res)).catch(err => console.log(err)),
  //编辑狱务公开信息
  editNews({commit}, regs){
    // let formData = new FormData();
    // regs.image && formData.append('image', regs.image.raw);
    // formData.append('id', regs.id);
    // formData.append('title', regs.title);
    // formData.append('type_id', regs.type_id);
    // formData.append('contents', regs.contents);
    // formData.append('is_focus', regs.is_focus);
    // formData.append('sys_flag', regs.sys_flag);
    http.editNews(regs).then(res => res.code === 200 &&
    http.getNews({type: regs.typeId}).then(response => {
      commit('getNews', response);
      commit('editNews', res);
    }).catch(err => console.log(err))).catch(err => console.log(err));
  },
  //添加狱务公开信息
  addNews({commit}, regs){
    // let formData = new FormData();
    // regs.image && formData.append('image', regs.image.raw);
    // formData.append('title', regs.title);
    // formData.append('type_id', regs.type_id);
    // formData.append('contents', regs.contents);
    // formData.append('is_focus', regs.is_focus);
    // formData.append('sys_flag', regs.sys_flag);
    http.addNews(regs).then(res => res.code === 200 &&
    http.getNews({type: regs.typeId}).then(response => {
      commit('getNews', response);
      commit('addNews', res);
    }).catch(err => console.log(err))).catch(err => console.log(err));
  },
  //根据id删除狱务公开信息
  deleteNewsById({commit}, regs){
    http.deleteNewsById({id: regs}).then(res => commit('deleteNewsById', {
      ...res,
      'id': regs
    })).catch(err => console.log(err));
  }
}
