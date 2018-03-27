import frame from '@/views/common/frame'

export default [{
  path: '/feedback',
  name: '意见反馈',
  component: frame,
  children: [{
    path: 'feedback/list',
    name: '意见反馈列表',
    component: resolve => require(['@/views/Feedback/Feedback'], resolve)
  }]
}]
