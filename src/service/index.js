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
import terminals from './modules/terminals'
import search from './modules/search'
import goods from './modules/goods'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import news from './modules/news'

export default Object.assign(
  registrations,
  versions,
  families,
  meetings,
  accounts,
  mailboxes,
  prisoners,
  terminals,
  search,
  goods,
  familyOrders,
  jailsInformation,
  lawsInformation,
  news
)
