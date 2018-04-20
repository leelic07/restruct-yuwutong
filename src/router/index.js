import Vue from 'vue'
import Router from 'vue-router'

import admin from './modules/admin'
import check from './modules/check'
import common from './modules/common'
import information from './modules/information'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    ...admin,
    ...check,
    ...information,
    ...common
  ]
})
