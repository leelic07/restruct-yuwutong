import accounts from './modules/accounts'
import search from './modules/search'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import passwordModification from './modules/password-modification'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'

import admin from './modules/admin'
import check from './modules/check'
import information from './modules/information'
import common from './modules/common'
import select from './modules/select'
import noPage from './modules/no-page'

export default Object.assign(
  accounts,
  search,
  jailsInformation,
  lawsInformation,
  passwordModification,
  downloadFile,
  uploadFile,
  uploadImg,
  admin,
  common,
  check,
  information,
  select,
  noPage
)
