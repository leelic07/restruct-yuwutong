import http from '@/service'

export default {
  // 上传文件
  uploadFile({ commit }, regs) {
    let formData = new FormData()
    regs && formData.append('file', regs)
    http.uploadFile(formData).then(res => commit('uploadFile', res)).catch(err => console.log(err))
  }
}
