import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import DashBoard from '@/views/DashBoard/DashBoard'
import Registration from '@/views/Registrations/Registrations'
import Meeting from '@/views/Meetings/Meetings'
import MailBoxes from '@/views/MailBoxes/MailBoxes'
import MailBoxes_Inspect from '@/views/MailBoxes/MailBoxes-Inspect'
import Prisoners from '@/views/Prisoners/Prisoners'
import Families from '@/views/Families/Families'
import Accounts from '@/views/Accounts/Accounts'
import PrisonerImportIndex from '@/views/PrisonerDataManagement/Prisoner'
import PrisonTermImportIndex from '@/views/PrisonerDataManagement/Prison-Term'
import PrisonerRewardPunishment from '@/views/PrisonerDataManagement/Prisoner-Reward-Punishment'
import Terminals from '@/views/Terminals/Terminals'
import TerminalsNew from '@/views/Terminals/Terminals-New'
import TerminalsEdit from '@/views/Terminals/Terminals-Edit'
import Versions from '@/views/Versions/Versions'
import GoodsManagement from '@/views/GoodsManagement/Goods-Management'
import GoodsEditor from '@/views/GoodsManagement/Goods-Editor'
import PasswordModification from '@/views/PasswordModification/Password-Modification'
import FamilyOrders from '@/views/FamilyOrders/Family-Orders'
import PrisonerOrders from '@/views/OrdersManagement/Prisoner-Orders'
import OrderDetail from '@/views/FamilyOrders/Order-Detail'
import JailInformationManagement from '@/views/JailInformationManagement/Jail-Information-Management'
import JailEditor from '@/views/JailInformationManagement/Jail-Editor'
import LawInformationManagement from '@/views/LawInformationManagement/Law-Information-Management'
import LawNew from '@/views/LawInformationManagement/Law-New'
import LawEditor from '@/views/LawInformationManagement/Law-Editor'
import PrisonAffairsDisclosure from '@/views/NewsManagement/PrisonAffairsDisclosure/Prison-Affairs-Disclosure'
import PrisonAffairsDisclosureNew from '@/views/NewsManagement/PrisonAffairsDisclosure/Prison-Affairs-Disclosure-New'
import PrisonAffairsDisclosureEditor from '@/views/NewsManagement/PrisonAffairsDisclosure/Prison-Affairs-Disclosure-Editor'
import WorkingDynamics from '@/views/NewsManagement/WorkingDynamics/Working-Dynamics'
import ComplaintsProposal from '@/views/NewsManagement/ComplaintsProposal/Complaints-Proposal'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/registrations',
      name: 'Registrations',
      component: Registration
    },
    {
      path: '/meetings',
      name: 'Meetings',
      component: Meeting
    },
    {
      path: '/mailboxes',
      name: 'MailBoxes',
      component: MailBoxes,
      children: [{
        path: '/mailboxes/:id',
        component: MailBoxes_Inspect
      }]
    },
    {
      path: '/prisoners',
      name: 'Prisoners',
      component: Prisoners
    },
    {
      path: '/families',
      name: 'Families',
      component: Families
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/prisoner/import_index',
      name: 'PrisonerImportIndex',
      component: PrisonerImportIndex
    },
    {
      path: '/prison_term/import_index',
      name: 'PrisonTermImportIndex',
      component: PrisonTermImportIndex
    },
    {
      path: '/prison_reward_punishment/import_index',
      name: 'PrisonerRewardPunishment',
      component: PrisonerRewardPunishment
    },
    {
      path: '/terminals',
      name: 'Terminals',
      component: Terminals,
      children: [{
        path: '/terminals/new',
        name: 'TerminalsNew',
        component: TerminalsNew
      }, {
        path: '/terminals/:id/edit',
        name: 'TerminalsEdit',
        component: TerminalsEdit
      }]
    },
    {
      path: '/versions',
      name: 'Versions',
      component: Versions
    },
    {
      path: '/goods_management',
      name: 'GoodsManagement',
      component: GoodsManagement,
      children: [{
        path: '/goods_management/:id',
        name: 'GoodsEditor',
        component: GoodsEditor
      }]
    },
    {
      path: '/super_user/modify_index',
      name: 'PasswordModification',
      component: PasswordModification
    },
    {
      path: '/orders',
      name: 'FamilyOrders',
      component: FamilyOrders,
      children: [{
        path: '/orders/:id',
        name: 'OrderDetail',
        component: OrderDetail
      }]
    },
    {
      path: '/prisoner_orders/import_index',
      name: 'PrisonerOrders',
      component: PrisonerOrders
    },
    {
      path: '/jails',
      name: 'JailInformationManagement',
      component: JailInformationManagement,
      children: [{
        path: '/jails/:id/edit',
        name: 'JailEditor',
        component: JailEditor
      }]
    },
    {
      path: '/laws',
      name: 'LawInformationManagement',
      component: LawInformationManagement,
      children: [{
        path: '/laws/new',
        name: 'LawNew',
        component: LawNew
      }, {
        path: '/laws/:id/edit',
        name: 'LawEditor',
        component: LawEditor
      }]
    },
    {
      path: '/news/prison_affairs_disclosure',
      name: 'PrisonAffairsDisclosure',
      component: PrisonAffairsDisclosure,
      children: [{
        path: '/news/prison_affairs_disclosure/new',
        name: 'PrisonAffairsDisclosureNew',
        component: PrisonAffairsDisclosureNew
      }, {
        path: '/news/prison_affairs_disclosure/:id/edit',
        name: 'PrisonAffairsDisclosureEditor',
        component: PrisonAffairsDisclosureEditor
      }]
    },
    {
      path: '/news/working_dynamics',
      name: 'WorkingDynamics',
      component: WorkingDynamics,
      children: [{
        path: '/news/working_dynamics/new',
        name: 'WorkingDynamicsNew',
        component: PrisonAffairsDisclosureNew
      }, {
        path: '/news/working_dynamics/:id/edit',
        name: 'WorkingDynamicsEditor',
        component: PrisonAffairsDisclosureEditor
      }]
    },
    {
      path: '/news/complaints_proposals',
      name: 'ComplaintsProposal',
      component: ComplaintsProposal,
      children: [{
        path: '/news/complaints_proposals/new',
        name: 'ComplaintsProposalNew',
        component: PrisonAffairsDisclosureNew
      }, {
        path: '/news/complaints_proposals/:id/edit',
        name: 'ComplaintsProposalEditor',
        component: PrisonAffairsDisclosureEditor
      }]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
