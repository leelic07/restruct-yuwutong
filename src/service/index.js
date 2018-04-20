import accounts from './modules/accounts'
import search from './modules/search'
import goods from './modules/goods-management'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
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
  accounts,
  search,
  goods,
  familyOrders,
  jailsInformation,
  lawsInformation,
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
