/**
 * Created by Administrator on 2018/2/28/028.
 */
import JailInformationManagement from '@/views/JailInformationManagement/Jail-Information-Management'
import JailEditor from '@/views/JailInformationManagement/Jail-Editor'

export default [{
  path: '/jails',
  name: 'JailInformationManagement',
  component: JailInformationManagement,
  children: [{
    path: '/jails/:id/edit',
    name: 'JailEditor',
    component: JailEditor
  }]
}]
