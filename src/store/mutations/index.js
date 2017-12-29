/**
 * Created by Administrator on 2017/12/13/013.
 */
import state from '../state/index'
import getters from '../getters/index'
import breadCrumb from './bread-crumb'
import registrations from './registrations'
import meetings from './meetings'
import prisoners from './prisoners'
import families from './families'
import accounts from './accounts'
import terminals from './terminals'
import versions from './versions'

let mutations = new Object()

Object.assign(mutations,breadCrumb,registrations,meetings,prisoners,families,accounts,terminals,versions)//合并不同模块的mutations文件到index.js文件当中

export default {
  state,
  getters,
  mutations
}
