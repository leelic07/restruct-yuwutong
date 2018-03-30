import frame from '@/views/common/the-frame'

let check = [{
  path: '/registration',
  name: '家属注册管理',
  meta: { hidden: true },
  children: [{
    path: '/registration/list',
    name: '家属注册列表',
    component: resolve => require(['@/views/registration/registration'], resolve)
  }]
}, {
  path: '/meeting',
  name: '会见申请管理',
  meta: { hidden: true },
  children: [{
    path: '/meeting/list',
    name: '会见申请列表',
    component: resolve => require(['@/views/meeting/meeting'], resolve)
  }]
}, {
  path: '/mailbox',
  name: '监狱长信箱',
  meta: { hidden: true },
  children: [{
    path: '/mailbox/list',
    name: '信件列表',
    component: resolve => require(['@/views/mailbox/mailbox-list'], resolve)
  }, {
    path: '/mailbox/detail/:id',
    name: '信件详情',
    component: resolve => require(['@/views/mailbox/mailbox-detail'], resolve)
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
  path: '/terminals',
  name: '终端管理',
  meta: { hidden: true },
  children: [{
    path: '/terminals/list',
    name: '终端列表',
    component: resolve => require(['@/views/terminals/terminals-list'], resolve)
  }, {
    path: '/terminals/add',
    name: '新增终端',
    component: resolve => require(['@/views/terminals/terminals-add'], resolve)
  }, {
    path: '/terminals/edit/:id',
    name: '编辑终端',
    component: resolve => require(['@/views/terminals/terminals-edit'], resolve)
  }]
}, {
  path: '/versions',
  name: '版本管理',
  meta: { hidden: true },
  children: [{
    path: '/versions/list',
    name: '版本列表',
    component: resolve => require(['@/views/versions/versions'], resolve)
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
