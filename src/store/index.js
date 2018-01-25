/**
 * Created by Administrator on 2017/12/13/013.
 */
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
import goods from './modules/goods'
import login from './modules/login'
import mailboxes from './modules/mailboxes'
import familyOrders from './modules/family-orders'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import news from './modules/news'
import loading from './modules/loading'
import prisonDataManagement from './modules/prisoner-data-management'
import ordersManagement from './modules/orders-management'
import 'babel-polyfill'

let actions = Object.assign(registrations.actions, meetings.actions, prisoners.actions, families.actions, terminals.actions, versions.actions, breadCrumb.actions, search.actions, accounts.actions, goods.actions, login.actions, mailboxes.actions, familyOrders.actions, jailsInformation.actions, lawsInformation.actions, news.actions, prisonDataManagement.actions, ordersManagement.actions);

let mutations = Object.assign(registrations.mutations, meetings.mutations, prisoners.mutations, families.mutations, terminals.mutations, versions.mutations, breadCrumb.mutations, search.mutations, accounts.mutations, goods.mutations, login.mutations, mailboxes.mutations, familyOrders.mutations, jailsInformation.mutations, lawsInformation.mutations, news.mutations, loading.mutations, prisonDataManagement.mutations, ordersManagement.mutations);

let getters = Object.assign(registrations.getters, meetings.getters, prisoners.getters, families.getters, terminals.getters, versions.getters, breadCrumb.getters, search.getters, accounts.getters, goods.getters, login.getters, mailboxes.getters, familyOrders.getters, jailsInformation.getters, lawsInformation.getters, news.getters, loading.getters, prisonDataManagement.getters, ordersManagement.getters);

let state = Object.assign(registrations.state, meetings.state, prisoners.state, families.state, terminals.state, versions.state, breadCrumb.state, search.state, accounts.state, goods.state, login.state, mailboxes.state, familyOrders.state, jailsInformation.state, lawsInformation.state, news.state, loading.state, prisonDataManagement.state, ordersManagement.state);

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
});
