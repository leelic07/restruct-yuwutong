/**
 * Created by Administrator on 2018/2/28/028.
 */
import MailBoxes from '@/views/MailBoxes/MailBoxes'
import MailBoxes_Inspect from '@/views/MailBoxes/MailBoxes-Inspect'

export default [{
  path: '/mailboxes',
  name: 'MailBoxes',
  component: MailBoxes,
  children: [{
    path: '/mailboxes/:id',
    component: MailBoxes_Inspect
  }]
}]
