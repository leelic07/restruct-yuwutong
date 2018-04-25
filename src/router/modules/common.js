import frame from '@/views/common/the-frame'

let common = [{
  path: '/login',
  name: '登录',
  meta: { notLogin: true },
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
  path: '/app_preview',
  name: 'app下载',
  component: frame,
  meta: { hidden: true },
  children: [{
    path: '/app_preview/family_download',
    name: '家属版app',
    meta: { notLogin: true },
    component: resolve => require(['@/views/download/app-family'], resolve)
  }, {
    path: '/app_preview/prison_download',
    name: '监狱版app',
    meta: { notLogin: true },
    component: resolve => require(['@/views/download/app-prison'], resolve)
  }]
}, {
  path: '*',
  redirect: '/dashboard'
}]

export default common
