/**
 * Created by Administrator on 2018/2/28/028.
 */
import LawInformationManagement from '@/views/LawInformationManagement/Law-Information-Management'
import LawNew from '@/views/LawInformationManagement/Law-New'
import LawEditor from '@/views/LawInformationManagement/Law-Editor'

export default [{
  path: '/laws',
  name: 'LawInformationManagement',
  component: LawInformationManagement,
  children: [{
    path: '/laws/new',
    name: 'LawNew',
    component: LawNew
  }, {
    path: '/laws/:id/edit',
    name: 'LawEditor',
    component: LawEditor
  }]
}]
