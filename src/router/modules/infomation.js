import frame from '@/views/common/the-frame'

let infomation = [{
  path: '/jails',
  name: '监狱基本信息管理',
  meta: { hidden: true },
  children: [{
    path: '/jails/detail',
    name: '监狱基本信息',
    component: resolve => require(['@/views/jails-base-information/jails-base-information-detail'], resolve)
  }, {
    path: '/jails/add',
    name: '新增监狱',
    component: resolve => require(['@/views/jails-base-information/jails-base-information-add'], resolve)
  }, {
    path: '/jails/edit/:id',
    name: '编辑监狱基本信息',
    component: resolve => require(['@/views/jails-base-information/jails-base-information-edit'], resolve)
  }]
}, {
  path: '/prison-affairs-public',
  name: '狱务公开信息管理',
  meta: { hidden: true },
  children: [{
    path: '/prison-affairs-public/prison-affairs-public',
    name: '狱务公开信息列表',
    component: resolve => require(['@/views/info-prison-affairs-public/prison-affairs-public-list'], resolve)
  }, {
    path: '/prison-affairs-public/prison-affairs-public/add',
    name: '新增狱务公开信息',
    component: resolve => require(['@/views/info-prison-affairs-public/prison-affairs-public-add'], resolve)
  }, {
    path: '/prison-affairs-public/prison-affairs-public/edit/:id',
    name: '编辑狱务公开信息',
    component: resolve => require(['@/views/info-prison-affairs-public/prison-affairs-public-edit'], resolve)
  }, {
    path: '/prison-affairs-public/working-dynamics',
    name: '工作动态',
    component: resolve => require(['@/views/info-prison-affairs-public/working-dynamics'], resolve)
  }, {
    path: '/prison-affairs-public/complaints-suggestions/list',
    name: '投诉建议公示',
    component: resolve => require(['@/views/info-prison-affairs-public/complaints-suggestions-list'], resolve)
  }, {
    path: '/prison-affairs-public/complaints-suggestions/add',
    name: '新增投诉/建议',
    component: resolve => require(['@/views/info-prison-affairs-public/complaints-suggestions-add'], resolve)
  }, {
    path: '/prison-affairs-public/complaints-suggestions/edit/:id',
    name: '编辑投诉/建议',
    component: resolve => require(['@/views/info-prison-affairs-public/complaints-suggestions-edit'], resolve)
  }]
}]

infomation.forEach(item => {
  item.component = frame
})

export default infomation
