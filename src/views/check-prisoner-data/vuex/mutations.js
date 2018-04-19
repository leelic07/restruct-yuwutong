export default {
  // 罪犯数据模板上传成功后将罪犯数据模板导入到服务端
  importPrisoner: (state, prisonerDataResult) => {
    state.prisonerDataResult = prisonerDataResult
    state.prisonerData = prisonerDataResult.prisoners
  },

  // 刑期变动模板上传成功后将刑期变动模板导入到服务端
  importPrisonTerm: (state, prisonTermResult) => {
    state.prisonTermResult = prisonTermResult
    state.prisonTerms = prisonTermResult.prisonTerms
    state.prisonTerms.forEach(pt => {
      pt.changedate = ''
      pt.changeyear && (pt.changedate += `${ pt.changeyear }年`)
      pt.changemonth && (pt.changedate += `${ pt.changemonth }月`)
      pt.changeday && (pt.changedate += `${ pt.changeday }日`)
    })
  },

  // 罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
  importPrisonerRewardPunishment: (state, prisonerRewardPunishmentResult) => {
    state.prisonerRewardPunishmentResult = prisonerRewardPunishmentResult
    state.prisonerRewardPunishments = prisonerRewardPunishmentResult.prisonerRewardPunishments
  },

  // 重置罪犯奖惩信息
  resetPrisonerRewardPunishments: state => { state.prisonerRewardPunishments = [] },

  // 重置刑期变动信息
  resetPrisonTerms: state => { state.prisonTerms = [] },

  // 重置罪犯信息
  resetprisonerData: state => { state.prisonerData = [] }
}
