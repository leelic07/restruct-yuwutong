/**
 * Created by Administrator on 2018/3/21/021.
 */
import http from '@/service'

export default {
  //上传图片的方法
  uploadImg({commit}, regs){
    let formData = new FormData();
    formData.append('avatar', regs);
    http.uploadImg(formData).then(res => commit('uploadImg', res)).catch(err => console.log(err));
  }
}
