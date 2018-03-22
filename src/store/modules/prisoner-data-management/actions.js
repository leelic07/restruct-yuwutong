import http from '@/service'

export default {
  //罪犯数据模板上传成功后将罪犯数据模板导入到服务端
  importPrisoner: ({commit}, regs) =>
    http.importPrisoner(regs).then(res => res.code === 200 && commit('importPrisoner', res)).catch(err => console.log(err)),
  //刑期变动模板上传成功后将刑期变动模板导入到服务端
  importPrisonTerm: ({commit}, regs) =>
    http.importPrisonTerm(regs).then(res => res.code === 200 && commit('importPrisonTerm', res)).catch(err => console.log(err)),
  //罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
  importPrisonerRewardPunishment: ({commit}, regs) =>
    http.importPrisonerRewardPunishment(regs).then(res => res.code === 200 && commit('importPrisonerRewardPunishment', res)).catch(err => console.log(err))
}
