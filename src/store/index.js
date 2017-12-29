/**
 * Created by Administrator on 2017/12/13/013.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/index'
import mutations from './mutations/index'
import 'babel-polyfill'

Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  ...mutations
});
