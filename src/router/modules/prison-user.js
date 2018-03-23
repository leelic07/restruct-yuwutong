import prisonUserAdd from '@/views/PrisonUser/Prison-User-Add'
import prisonUserList from '@/views/PrisonUser/Prison-User-List'

export default [{
  path: '/prison-user/add',
  name: '新增平台监狱用户',
  component: prisonUserAdd
}, {
  path: '/prison-user',
  name: '平台监狱用户列表',
  component: prisonUserList
}]
