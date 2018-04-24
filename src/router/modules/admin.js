import frame from '@/views/common/the-frame'

let admin = [{
  path: '/prison',
  name: '监狱管理',
  meta: { hidden: true },
  children: [{
    path: '/prison/list',
    name: '监狱列表',
    component: resolve => require(['@/views/admin-prison/prison-list'], resolve)
  }, {
    path: '/prison/add',
    name: '新增监狱',
    component: resolve => require(['@/views/admin-prison/prison-add'], resolve)
  }, {
    path: '/prison/edit/:id',
    name: '编辑监狱',
    component: resolve => require(['@/views/admin-prison/prison-edit'], resolve)
  }]
}, {
  path: '/prison-user',
  name: '监狱用户管理',
  meta: { hidden: true },
  children: [{
    path: '/prison-user/list',
    name: '监狱用户列表',
    component: resolve => require(['@/views/admin-prison-user/prison-user-list'], resolve)
  }, {
    path: '/prison-user/edit/:id',
    name: '编辑监狱用户',
    component: resolve => require(['@/views/admin-prison-user/prison-user-edit'], resolve)
  }, {
    path: '/prison-user/add',
    name: '新增监狱用户',
    component: resolve => require(['@/views/admin-prison-user/prison-user-add'], resolve)
  }]
}, {
  path: '/feedback',
  name: '意见反馈',
  meta: { hidden: true },
  children: [{
    path: '/feedback/list',
    name: '意见列表',
    component: resolve => require(['@/views/admin-feedback/feedback-list'], resolve)
  }]
}, {
  path: '/advertisement',
  name: '广告管理',
  meta: { hidden: true },
  children: [{
    path: '/advertisement/list',
    name: '广告列表',
    component: resolve => require(['@/views/admin-advertisement/advertisement-list'], resolve)
  }, {
    path: '/advertisement/add',
    name: '新增广告',
    component: resolve => require(['@/views/admin-advertisement/advertisement-add'], resolve)
  }, {
    path: '/advertisement/edit/:id',
    name: '编辑广告',
    component: resolve => require(['@/views/admin-advertisement/advertisement-edit'], resolve)
  }]
}, {
  path: '/whitemember',
  name: '白名单管理',
  meta: { hidden: true },
  children: [{
    path: '/whitemember/list',
    name: '白名单列表',
    component: resolve => require(['@/views/admin-whitemember/whitemember-list'], resolve)
  }, {
    path: '/whitemember/add',
    name: '新增白名单',
    component: resolve => require(['@/views/admin-whitemember/whitemember-add'], resolve)
  }, {
    path: '/whitemember/edit/:id',
    name: '编辑白名单',
    component: resolve => require(['@/views/admin-whitemember/whitemember-edit'], resolve)
  }]
}, {
  path: '/terminal',
  name: '终端管理',
  meta: { hidden: true },
  children: [{
    path: '/terminal/list',
    name: '终端列表',
    component: resolve => require(['@/views/admin-terminal/terminal-list'], resolve)
  }, {
    path: '/terminal/add',
    name: '新增终端',
    component: resolve => require(['@/views/admin-terminal/terminal-add'], resolve)
  }, {
    path: '/terminal/edit/:id',
    name: '编辑终端',
    component: resolve => require(['@/views/admin-terminal/terminal-edit'], resolve)
  }]
}, {
  path: '/version',
  name: '版本管理',
  meta: { hidden: true },
  children: [{
    path: '/version/list',
    name: '版本列表',
    component: resolve => require(['@/views/admin-version/version-list'], resolve)
  }]
}, {
  path: '/log',
  name: '日志',
  meta: { hidden: true },
  children: [{
    path: '/log/user-operation',
    name: '用户操作日志',
    component: resolve => require(['@/views/admin-log/user-operation-list'], resolve)
  }, {
    path: '/log/app-error',
    name: 'APP崩溃日志',
    component: resolve => require(['@/views/admin-log/app-error-list'], resolve)
  }]
}]

admin.forEach(item => {
  item.component = frame
})

export default admin
