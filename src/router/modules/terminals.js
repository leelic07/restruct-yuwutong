import Terminals from '@/views/Terminals/Terminals'
import TerminalsNew from '@/views/Terminals/Terminals-New'
import TerminalsEdit from '@/views/Terminals/Terminals-Edit'

export default [{
  path: '/terminals',
  name: 'Terminals',
  component: Terminals,
  children: [{
    path: '/terminals/new',
    name: 'TerminalsNew',
    component: TerminalsNew
  }, {
    path: '/terminals/:id/edit',
    name: 'TerminalsEdit',
    component: TerminalsEdit
  }]
}]
