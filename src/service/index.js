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
import goods from './modules/goods-management'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import news from './modules/news-management'
import prisonerDataManagement from './modules/prisoner-data-management'
import ordersManagement from './modules/orders-management'
import login from './modules/login'

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
  news,
  prisonerDataManagement,
  ordersManagement,
  login
)
