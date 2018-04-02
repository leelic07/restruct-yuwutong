import Vue from 'vue'
import Router from 'vue-router'
// import GoodsManagement from './modules/goods-management'
// import FamilyOrders from './modules/family-orders'
// import PrisonerOrders from './modules/order-management'
// import LawInformationManagement from './modules/laws-information'
import admin from './modules/admin'
import check from './modules/check'
import common from './modules/common'
import infomation from './modules/infomation'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // ...GoodsManagement,
    // ...FamilyOrders,
    // ...PrisonerOrders,
    // ...LawInformationManagement,
    ...admin,
    ...check,
    ...infomation,
    ...common
  ]
})
