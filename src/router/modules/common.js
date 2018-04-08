import frame from '@/views/common/the-frame'

let common = [{
  path: '/login',
  name: '登录',
  component: resolve => require(['@/views/login/login'], resolve)
}, {
  path: '/dashboard1',
  name: 'dashboard1',
  component: frame,
  meta: { hidden: true },
  children: [{
    path: '/dashboard',
    name: '欢迎',
    component: resolve => require(['@/views/dashboard/dashboard'], resolve)
  }, {
    path: '/password/edit',
    name: '修改密码',
    component: resolve => require(['@/views/password/password-edit'], resolve)
  }]
}, {
  path: '/download',
  name: 'app下载',
  component: frame,
  meta: { hidden: true },
  children: [{
    path: '/download/app-family',
    name: '家属版app',
    component: resolve => require(['@/views/download/app-family'], resolve)
  }, {
    path: '/download/app-prison',
    name: '监狱版app',
    component: resolve => require(['@/views/download/app-prison'], resolve)
  }]
}, {
  path: '/',
  redirect: '/login'
}, {
  path: '*',
  redirect: '/dashboard'
}]

export default common
