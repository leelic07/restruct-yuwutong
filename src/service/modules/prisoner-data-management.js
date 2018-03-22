import * as service from '../base/service'

export default {
  // 文件上传成功之后导入模板内容
  importPrisoner: filePath =>
    service.get('/prisoners/processing', filePath).then(res => res).catch(err => err),
  // 刑期变动模板上传成功后将刑期变动模板导入到服务端
  importPrisonTerm: filePath =>
    service.get('/prison_terms/processing', filePath).then(res => res).catch(err => err),
  // 罪犯奖惩模板上传成功后将罪犯奖惩模板导入到服务端
  importPrisonerRewardPunishment: filePath =>
    service.get('/prisoner_reward_punishments/processing', filePath).then(res => res).catch(err => err)
}
