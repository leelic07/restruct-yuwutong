/**
 * Created by Administrator on 2018/1/19/019.
 */
export default {
  //罪犯数据模板上传成功后将罪犯数据模板导入到服务端
  importPrisoner: (state, prisonerResult) => state.prisonerResult = prisonerResult.data,

  //刑期变动模板上传成功后将刑期变动模板导入到服务端
  importPrisonTerm: (state, prisonTermResult) => state.prisonTermResult = prisonTermResult.data,

  //罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
  importPrisonerRewardPunishment: (state, prisonerRewardPunishmentResult) => state.prisonerRewardPunishmentResult = prisonerRewardPunishmentResult.data
}
