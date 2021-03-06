import * as service from '../config/service'

export default {
  // 家属注册管理-列表
  getRegistrations: params => {
    return service.get('/registrations/page', params).then(res => res && res.data)
  },
  // 家属注册管理-授权
  authorizeRegistrations: params => {
    return service.post('/registrations/authorize', params).then(res => res && res.code === 200)
  },
  // 家属会见申请-列表
  getMeetings: params => {
    return service.get('/meetings/page', params).then(res => res && res.data)
  },
  // 家属会见申请-授权
  authorizeMeeting: params => {
    return service.post('/meetings/authorize', params).then(res => res && res.code === 200)
  },
  // 家属会见申请-获取会见信息
  getMeetingConfigs: params => {
    return service.get(`/meetings/adjustment?inputDate=${ params }`).then(res => res && res.data)
  },
  // 家属会见申请-调整
  adjustMeeting: params => {
    return service.postObj(`/meetings/adjustMeeting`, params).then(res => res && res.code === 200)
  },
  // 家属会见申请-撤回
  withdrawMeeting: params => {
    return service.post('/meetings/withdraw', params).then(res => res && res.code === 200)
  },
  // 实地探监管理-列表
  getVisits: params => {
    return service.get('/prisoner_visits/page', params).then(res => res && res.data)
  },
  // 实地探监管理-已取消
  getCanceledVisit: params => {
    return service.get('/prisoner_visits/findCanceled', params).then(res => res && res.data)
  },
  // 实地探监管理-授权
  authorizeVisit: params => {
    return service.post('/prisoner_visits/auth', params).then(res => res && res.code === 200)
  },
  // 实地探监管理-撤回
  withdrawVisit: params => {
    return service.post('/prisoner_visits/withdraw', params).then(res => res && res.code === 200)
  },
  // 监狱长信箱-列表
  getMailboxes: params => {
    return service.get('/mailboxes/page', params).then(res => res && res.data)
  },
  // 监狱长信箱-详情
  getMailbox: params => {
    return service.get(`/mailboxes/jailReply?id=${ params }`).then(res => res && res.data)
  },
  // 监狱长信箱-回复
  mailboxReply: params => {
    return service.post('/mailboxes/reply', params).then(res => res && res.code === 200)
  },
  // 服刑人员信息管理-列表
  getPrisoners: params => {
    return service.get('/prisoners/page', params).then(res => res && res.data)
  },
  // 服刑人员信息管理-修改会见次数
  updateAccessTime: params => {
    return service.post('/prisoners/updateAccessTime', params).then(res => res && res.code === 200)
  },
  // 家属信息管理-列表
  getFamilies: params => {
    return service.get('/families/page', params).then(res => res && res.data)
  },
  // 数据管理-罪犯数据导入-上传到服务器
  importPrisoner: params => {
    return service.get('/prisoners/processing', params).then(res => res && res.data)
  },
  // 数据管理-刑期变动数据导入-上传到服务器
  importPrisonTerm: params => {
    return service.get('/prison_terms/processing', params).then(res => res && res.data)
  },
  // 数据管理-罪犯奖惩数据导入-上传到服务器
  importPrisonerRewardPunishment: params => {
    return service.get('/prisoner_reward_punishments/processing', params).then(res => res && res.data)
  },
  getFreeMeetings: params => {
    return service.get('/freeMeetings/page', params).then(res => res && res.data)
  }
}
