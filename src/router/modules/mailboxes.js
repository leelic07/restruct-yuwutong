import MailBoxes from '@/views/MailBoxes/MailBoxes'
import MailBoxesInspect from '@/views/MailBoxes/MailBoxes-Inspect'

export default [{
  path: '/mailboxes',
  name: 'MailBoxes',
  component: MailBoxes,
  children: [{
    path: '/mailboxes/:id',
    component: MailBoxesInspect
  }]
}]
