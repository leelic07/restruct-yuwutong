import http from '@/service'

export default {
  // 罪犯数据模板上传成功后将罪犯数据模板导入到服务端
  importPrisoner: ({ commit }, params) => {
    return http.importPrisoner(params).then(res => {
      if (!res) return
      commit('importPrisoner', res)
      return true
    })
  },
  // 刑期变动模板上传成功后将刑期变动模板导入到服务端
  importPrisonTerm: ({ commit }, params) => {
    return http.importPrisonTerm(params).then(res => {
      if (!res) return
      commit('importPrisonTerm', res)
      return true
    })
  },
  // 罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
  importPrisonerRewardPunishment: ({ commit }, params) => {
    return http.importPrisonerRewardPunishment(params).then(res => {
      if (!res) return
      commit('importPrisonerRewardPunishment', res)
      return true
    })
  }
}
