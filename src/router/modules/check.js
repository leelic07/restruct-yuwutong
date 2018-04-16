import frame from '@/views/common/the-frame'

let check = [{
  path: '/registration',
  name: '家属注册管理',
  meta: { hidden: true },
  children: [{
    path: '/registration/list',
    name: '家属注册列表',
    component: resolve => require(['@/views/check-registration/registration-list'], resolve)
  }]
}, {
  path: '/meeting',
  name: '会见申请管理',
  meta: { hidden: true },
  children: [{
    path: '/meeting/list',
    name: '会见申请列表',
    component: resolve => require(['@/views/check-meeting/meeting-list'], resolve)
  }]
}, {
  path: '/mailbox',
  name: '监狱长信箱',
  meta: { hidden: true },
  children: [{
    path: '/mailbox/list',
    name: '信件列表',
    component: resolve => require(['@/views/check-mailbox/mailbox-list'], resolve)
  }, {
    path: '/mailbox/detail/:id',
    name: '信件详情',
    component: resolve => require(['@/views/check-mailbox/mailbox-detail'], resolve)
  }]
}, {
  path: '/prisoners',
  name: '服刑人员信息管理',
  meta: { hidden: true },
  children: [{
    path: '/prisoners/list',
    name: '服刑人员列表',
    component: resolve => require(['@/views/prisoners/prisoners'], resolve)
  }]
}, {
  path: '/families',
  name: '家属信息管理',
  meta: { hidden: true },
  children: [{
    path: '/families/list',
    name: '家属列表',
    component: resolve => require(['@/views/families/families'], resolve)
  }]
}, {
  path: '/prison-accounts',
  name: '囚犯账户管理',
  meta: { hidden: true },
  children: [{
    path: '/prison-accounts/list',
    name: '囚犯账户列表',
    component: resolve => require(['@/views/prison-accounts/prison-accounts'], resolve)
  }]
}, {
  path: '/prisoner-data',
  name: '数据管理',
  meta: { hidden: true },
  children: [{
    path: '/prisoner-data/data-import',
    name: '罪犯数据导入',
    component: resolve => require(['@/views/prisoner-data/data-import'], resolve)
  }, {
    path: '/prisoner-data/term-change',
    name: '刑期变动数据导入',
    component: resolve => require(['@/views/prisoner-data/term-change'], resolve)
  }, {
    path: '/prisoner-data/reward-punishment',
    name: '罪犯奖惩数据导入',
    component: resolve => require(['@/views/prisoner-data/reward-punishment'], resolve)
  }]
}]

check.forEach(item => {
  item.component = frame
})

export default check
