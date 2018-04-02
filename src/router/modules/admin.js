import frame from '@/views/common/the-frame'

let admin = [{
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
  path: '/province',
  name: '省份管理',
  meta: { hidden: true },
  children: [{
    path: '/province/list',
    name: '省份列表',
    component: resolve => require(['@/views/admin/province-list'], resolve)
  }]
}, {
  path: '/city',
  name: '城市管理',
  meta: { hidden: true },
  children: [{
    path: '/city/list',
    name: '城市列表',
    component: resolve => require(['@/views/admin/city-list'], resolve)
  }]
}]

admin.forEach(item => {
  item.component = frame
})

export default admin
