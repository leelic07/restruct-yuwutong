import Vue from 'vue'
import Router from 'vue-router'

import admin from './modules/admin'
import check from './modules/check'
import common from './modules/common'
import infomation from './modules/infomation'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    ...admin,
    ...check,
    ...infomation,
    ...common
  ]
})
