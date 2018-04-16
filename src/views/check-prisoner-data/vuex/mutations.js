export default {
  // 罪犯数据模板上传成功后将罪犯数据模板导入到服务端
  importPrisoner: (state, prisonerDataResult) => {
    state.prisonerDataResult = prisonerDataResult.data
    state.prisonerData = prisonerDataResult.data.prisonerData
  },

  // 刑期变动模板上传成功后将刑期变动模板导入到服务端
  importPrisonTerm: (state, prisonTermResult) => {
    state.prisonTermResult = prisonTermResult.data
    state.prisonTerms = prisonTermResult.data.prisonTerms
    state.prisonTerms.forEach(pt => {
      pt.changedate = ''
      pt.changeyear && (pt.changedate += `${ pt.changeyear }年`)
      pt.changemonth && (pt.changedate += `${ pt.changemonth }月`)
      pt.changeday && (pt.changedate += `${ pt.changeday }日`)
    })
  },

  // 罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
  importPrisonerRewardPunishment: (state, prisonerRewardPunishmentResult) => {
    state.prisonerRewardPunishmentResult = prisonerRewardPunishmentResult.data
    state.prisonerRewardPunishments = prisonerRewardPunishmentResult.data.prisonerRewardPunishments
  },

  // 重置罪犯奖惩信息
  resetPrisonerRewardPunishments: state => { state.prisonerRewardPunishments.splice(0) },

  // 重置刑期变动信息
  resetPrisonTerms: state => { state.prisonTerms.splice(0) },

  // 重置罪犯信息
  resetprisonerData: state => { state.prisonerData.splice(0) }
}
