import http from '@/service'

export default {
  //获取狱务公开信息
  getNews: ({commit}, regs) =>
    http.getNews(regs).then(res => commit('getNews', res)).catch(err => console.log(err)),
  //编辑狱务公开信息
  editNews({commit}, regs){
    let formData = new FormData();
    regs.image && formData.append('file', regs.image.raw);
    formData.append('id', regs.id);
    formData.append('title', regs.title);
    formData.append('typeId', regs.typeId);
    formData.append('contents', regs.contents);
    formData.append('isFocus', regs.isFocus);
    formData.append('sysFlag', regs.sysFlag);
    http.editNews(formData).then(res => res.code === 200 &&
    http.getNews({type: regs.typeId}).then(response => {
      commit('getNews', response);
      commit('editNews', res);
    }).catch(err => console.log(err))).catch(err => console.log(err));
  },
  //添加狱务公开信息
  addNews({commit}, regs){
    let formData = new FormData();
    regs.image && formData.append('file', regs.image.raw);
    formData.append('title', regs.title);
    formData.append('typeId', regs.typeId);
    formData.append('contents', regs.contents);
    formData.append('isFocus', regs.isFocus);
    formData.append('sysFlag', regs.sysFlag);
    http.addNews(formData).then(res => res.code === 200 &&
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
