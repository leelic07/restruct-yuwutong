/**
 * Created by Administrator on 2017/12/13/013.
 */
import breadCrumb from './bread-crumb'
import registrations from './registrations'
import meetings from './meetings'
import prisoners from './prisoners'
import families from './families'
import accounts from './accounts'
import terminals from './terminals'
import versions from './versions'

let getters = new Object()

Object.assign(getters,breadCrumb,registrations,meetings,prisoners,families,accounts,terminals,versions)//合并不同模块的getters文件到index.js文件当中

export default getters
