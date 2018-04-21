export default {
  // 获取罪犯模板导入结果
  prisonerDataResult: state => state.prisonerDataResult,

  // 获取刑期变动导入结果
  prisonTermResult: state => state.prisonTermResult,

  // 获取罪犯奖惩导入结果
  prisonerRewardPunishmentResult: state => state.prisonerRewardPunishmentResult,

  // 获取刑期变动上传模板的数据
  prisonTerms: state => state.prisonTerms,

  // 获取罪犯奖惩上传模板的数据
  prisonerRewardPunishments: state => state.prisonerRewardPunishments,

  // 获取罪犯模板上传的数据
  prisonerData: state => state.prisonerData,

  // 上传模板失败的信息
  errors: state => state.errors
}
