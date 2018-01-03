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
import Versions from '@/views/Versions/Versions'
import GoodsManagement from '@/views/GoodsManagement/Goods-Management'
import GoodsEditor from '@/views/GoodsManagement/Goods-Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/dashboard',
      name:'DashBoard',
      component:DashBoard
    },
    {
      path:'/registrations',
      name:'Registrations',
      component:Registration
    },
    {
      path:'/meetings',
      name:'Meetings',
      component:Meeting
    },
    {
      path:'/mailboxes',
      name:'MailBoxes',
      component:MailBoxes,
      children:[{
        path:'/mailboxes/:id',
        component:MailBoxes_Inspect
      }]
    },
    {
      path:'/prisoners',
      name:'Prisoners',
      component:Prisoners
    },
    {
      path:'/families',
      name:'Families',
      component:Families
    },
    {
      path:'/accounts',
      name:'Accounts',
      component:Accounts
    },
    {
      path:'/prisoner/import_index',
      name:'PrisonerImportIndex',
      component:PrisonerImportIndex
    },
    {
      path:'/prison_term/import_index',
      name:'PrisonTermImportIndex',
      component:PrisonTermImportIndex
    },
    {
      path:'/prison_reward_punishment/import_index',
      name:'PrisonerRewardPunishment',
      component:PrisonerRewardPunishment
    },
    {
      path:'/terminals',
      name:'Terminals',
      component:Terminals
    },
    {
      path:'/versions',
      name:'Versions',
      component:Versions
    },
    {
      path:'/goods_management',
      name:'GoodsManagement',
      component:GoodsManagement,
      children:[{
        path:'/goods_management/:id',
        name:'GoodsEditor',
        component:GoodsEditor
      }]
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
