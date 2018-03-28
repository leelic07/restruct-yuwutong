import frame from '@/views/common/the-frame'

let admin = [{
  path: '/feedback',
  name: '意见反馈',
  children: [{
    path: '/feedback/list',
    name: '意见列表',
    component: resolve => require(['@/views/admin/feedback'], resolve)
  }]
}, {
  path: '/province',
  name: '省份管理',
  children: [{
    path: '/province/list',
    name: '省份列表',
    component: resolve => require(['@/views/admin/province-list'], resolve)
  }]
}, {
  path: '/city',
  name: '城市管理',
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
