import Vue from 'vue'
import Vuex from 'vuex'
import versions from './modules/versions'
import accounts from './modules/accounts'
import breadCrumb from './modules/bread-crumb'
import search from './modules/search'
import goods from './modules/goods-mangement'
import login from './modules/login'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import loading from './modules/loading'
import prisonDataManagement from './modules/prisoner-data-management'
import ordersManagement from './modules/orders-management'
import logout from './modules/logout'
import passwordModification from './modules/password-modification'
import quillEditor from './modules/quill-editor'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'
import breadCrumbs from './modules/breadcrumb'

import adminAdvertisement from '@/views/admin-advertisement/vuex'
import adminTerminal from '@/views/admin-terminal/vuex'
import checkFamily from '@/views/check-family/vuex'
import checkMailbox from '@/views/check-mailbox/vuex'
import checkMeeting from '@/views/check-meeting/vuex'
import checkPrisoner from '@/views/check-prisoner/vuex'
import checkRegistration from '@/views/check-registration/vuex'
import noPage from './modules/no-page'

import adminFeedback from './modules/admin-feedback'
import adminLog from './modules/admin-log'
import adminPrisonUser from './modules/admin-prison-user'
import adminPrisonManagement from './modules/admin-prison-management'
import infoPrisonAffairsPublic from './modules/info-prison-affairs-public'
import filter from './modules/filter'
import select from './modules/select'

import 'babel-polyfill'
Vue.use(Vuex)

let actions = {}, mutations = {}, getters = {}, state = {}, merge = (...args) => {
  args.map(arg => {
    Object.assign(actions, arg.actions)
    Object.assign(mutations, arg.mutations)
    Object.assign(getters, arg.getters)
    Object.assign(state, arg.state)
  })
}

// 将对应的actions,mutations,getters,state 添加到声明的对象中
merge(
  versions,
  breadCrumb,
  search,
  accounts,
  goods,
  login,
  familyOrders,
  jailsInformation,
  lawsInformation,
  loading,
  prisonDataManagement,
  ordersManagement,
  logout,
  passwordModification,
  quillEditor,
  downloadFile,
  uploadFile,
  uploadImg,
  adminLog,
  breadCrumbs,
  adminFeedback,
  adminPrisonUser,
  adminPrisonManagement,
  infoPrisonAffairsPublic,
  filter,
  select,
  adminAdvertisement,
  adminTerminal,
  checkFamily,
  checkMailbox,
  checkMeeting,
  checkPrisoner,
  checkRegistration,
  noPage
)
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
