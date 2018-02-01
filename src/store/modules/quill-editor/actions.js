/**
 * Created by Administrator on 2018/2/1/001.
 */
import http from '@/service'

export default {
  //富文本上传图片
  uploadImageFromEditor({commit}, regs){
    let formData = new FormData();
    formData.append('imgFile', regs);
    http.uploadImageFromEditor(formData).then(res => commit('uploadImageFromEditor', res)).catch(err => console.log(err));
  }
}
