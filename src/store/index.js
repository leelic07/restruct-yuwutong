import Vue from 'vue'
import Vuex from 'vuex'
import registrations from './modules/registrations'
import meetings from './modules/meetings'
import prisoners from './modules/prisoners'
import families from './modules/families'
import terminals from './modules/terminals'
import versions from './modules/versions'
import accounts from './modules/accounts'
import breadCrumb from './modules/bread-crumb'
import search from './modules/search'
import goods from './modules/goods-mangement'
import login from './modules/login'
import mailboxes from './modules/mailboxes'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import news from './modules/news-management'
import loading from './modules/loading'
import prisonDataManagement from './modules/prisoner-data-management'
import ordersManagement from './modules/orders-management'
import logout from './modules/logout'
import passwordModification from './modules/password-modification'
import quillEditor from './modules/quill-editor'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'
import 'babel-polyfill'

Vue.use(Vuex)

let actions = {}, mutations = {}, getters = {}, state = {}, merge = (...args) =>
  args.map(arg => {
    for (let key in arg) {
      Object.assign(eval(key), arg[key])
    }
  })
// 将对应的actions,mutations,getters,state 添加到声明的对象中
merge(
  registrations,
  meetings,
  prisoners,
  families,
  terminals,
  versions,
  breadCrumb,
  search,
  accounts,
  goods,
  login,
  mailboxes,
  familyOrders,
  jailsInformation,
  lawsInformation,
  news,
  loading,
  prisonDataManagement,
  ordersManagement,
  logout,
  passwordModification,
  quillEditor,
  downloadFile,
  uploadFile,
  uploadImg
)

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
