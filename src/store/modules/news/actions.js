/**
 * Created by Administrator on 2018/1/11/011.
 */
import http from '@/service'

export default {
  //获取狱务公开信息
  getNews: ({commit}, regs) =>
    http.getNews(regs).then(res => commit('getNews', res)).catch(err => console.log(err)),

  //富文本上传图片
  uploadImageFromEditor({commit}, regs){
    let formData = new FormData();
    formData.append('imgFile', regs);
    http.uploadImageFromEditor(formData).then(res => commit('uploadImageFromEditor', res)).catch(err => console.log(err));
  }
}
