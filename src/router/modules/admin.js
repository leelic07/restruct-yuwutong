import frame from '@/views/common/the-frame'

let admin = [{
  path: '/prison',
  name: '监狱管理',
  meta: { hidden: true },
  children: [{
    path: '/prison/list',
    name: '监狱列表',
    component: resolve => require(['@/views/admin-prison-management/prison-list'], resolve)
  }, {
    path: '/prison/add',
    name: '新增监狱',
    component: resolve => require(['@/views/admin-prison-management/prison-add'], resolve)
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
