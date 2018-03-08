/**
 * Created by Administrator on 2018/3/8/008.
 */
import http from '@/service'

export default{
  //上传文件
  uploadFile({commit}, regs){
    let formData = new FormData();
    console.log(regs);
    regs && formData.append('file', regs);
    http.uploadFile(formData).then(res => commit('uploadFile', res)).catch(err => console.log(err))
  }
}
