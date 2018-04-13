import versions from './modules/versions'
import families from './modules/families'
import meetings from './modules/meetings'
import accounts from './modules/accounts'
import mailboxes from './modules/mailboxes'
import prisoners from './modules/prisoners'
import search from './modules/search'
import goods from './modules/goods-management'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import prisonerDataManagement from './modules/prisoner-data-management'
import ordersManagement from './modules/orders-management'
import login from './modules/login'
import passwordModification from './modules/password-modification'
import logout from './modules/logout'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'
import province from './modules/province'

import admin from './modules/admin'
import check from './modules/check'
import information from './modules/information'
import select from './modules/select'
import noPage from './modules/no-page'

export default Object.assign(
  versions,
  families,
  meetings,
  accounts,
  mailboxes,
  prisoners,
  search,
  goods,
  familyOrders,
  jailsInformation,
  lawsInformation,
  prisonerDataManagement,
  ordersManagement,
  login,
  passwordModification,
  logout,
  downloadFile,
  uploadFile,
  uploadImg,
  province,
  admin,
  check,
  information,
  select,
  noPage
)
