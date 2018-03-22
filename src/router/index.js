import Vue from 'vue'
import Router from 'vue-router'
import Login from './modules/login'
import DashBoard from './modules/dashboard'
import Registration from './modules/registrations'
import Meeting from './modules/meetings'
import MailBoxes from './modules/mailboxes'
import Prisoners from './modules/prisoners'
import Families from './modules/families'
import Accounts from './modules/accounts'
import PrisonerDataManagement from './modules/prisoner-data-management'
import Terminals from './modules/terminals'
import Versions from './modules/versions'
import GoodsManagement from './modules/goods-management'
import PasswordModification from './modules/password-modification'
import FamilyOrders from './modules/family-orders'
import PrisonerOrders from './modules/order-management'
import JailInformationManagement from './modules/jail-information'
import LawInformationManagement from './modules/laws-information'
import PrisonAffairsDisclosure from './modules/news-management'
import AppPreview from './modules/app-preview'
import UserManagement from './modules/userManagement'
Vue.use(Router);

export default new Router({
  routes: [
    ...Login,
    ...DashBoard,
    ...Registration,
    ...Meeting,
    ...MailBoxes,
    ...Prisoners,
    ...Families,
    ...Accounts,
    ...PrisonerDataManagement,
    ...Terminals,
    ...Versions,
    ...GoodsManagement,
    ...PasswordModification,
    ...FamilyOrders,
    ...PrisonerOrders,
    ...JailInformationManagement,
    ...LawInformationManagement,
    ...PrisonAffairsDisclosure,
    ...AppPreview,
    ...UserManagement,
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
