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
import superAdmin from './modules/superAdmin'
import noPage from './modules/no-page'

export default Object.assign(
  jailsInformation,
  lawsInformation,
  passwordModification,
  downloadFile,
  uploadFile,
  uploadImg,
  admin,
  superAdmin,
  common,
  check,
  information,
  noPage
)
