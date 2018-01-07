/**
 * Created by Administrator on 2018/1/7 0007.
 */
import registrations from './modules/registrations'
import versions from './modules/versions'
import families from './modules/families'
import meetings from './modules/meetings'
import accounts from './modules/accounts'
import mailboxes from './modules/mailboxes'
import prisoners from './modules/prisoners'

export default Object.assign(
  registrations,
  versions,
  families,
  meetings,
  accounts,
  mailboxes,
  prisoners
)
