import http from '@/service'

export default {
  //家属订单模板上传成功后将家属订单模板导入到服务端
  importPrisonerOrders: ({commit}, regs) =>
    http.importPrisonerOrders(regs).then(res => res.code === 200 && commit('importPrisonerOrders', res)).catch(err => console.log(err)),
  //上传模板文件到服务端
  uploadTemplate({commit}, regs){
    let formData = new FormData();
    regs && formData.append('file', regs);
    http.uploadTemplate(formData).then(res => res.code === 200 && commit('uploadTemplate', res)).catch(err => console.log(err));
  }
}
