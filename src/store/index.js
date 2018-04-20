import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/accounts'
import breadCrumb from './modules/bread-crumb'
import search from './modules/search'
import jailsInformation from './modules/jails-information'
import loading from './modules/loading'
import passwordModification from './modules/password-modification'
import quillEditor from './modules/quill-editor'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'
import breadCrumbs from './modules/breadcrumb'

import adminAdvertisement from '@/views/admin-advertisement/vuex'
import adminFeedback from '@/views/admin-feedback/vuex'
import adminPrison from '@/views/admin-prison/vuex'
import adminPrisonUser from '@/views/admin-prison-user/vuex'
import adminTerminal from '@/views/admin-terminal/vuex'
import adminVersion from '@/views/admin-version/vuex'
import adminWhitemember from '@/views/admin-whitemember/vuex'
import checkFamily from '@/views/check-family/vuex'
import checkMailbox from '@/views/check-mailbox/vuex'
import checkMeeting from '@/views/check-meeting/vuex'
import checkPrisoner from '@/views/check-prisoner/vuex'
import checkPrisonDataManagement from '@/views/check-prisoner-data/vuex'
import checkRegistration from '@/views/check-registration/vuex'
import noPage from './modules/no-page'
import login from '@/views/login/vuex'

import adminLog from './modules/admin-log'
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
  breadCrumb,
  search,
  accounts,
  jailsInformation,
  loading,
  passwordModification,
  quillEditor,
  downloadFile,
  uploadFile,
  uploadImg,
  adminLog,
  breadCrumbs,
  adminFeedback,
  adminPrisonUser,
  infoPrisonAffairsPublic,
  filter,
  select,
  adminAdvertisement,
  adminPrison,
  adminTerminal,
  adminVersion,
  adminWhitemember,
  checkFamily,
  checkMailbox,
  checkMeeting,
  checkPrisonDataManagement,
  checkPrisoner,
  checkRegistration,
  login,
  noPage
)
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
