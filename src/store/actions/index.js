/**
 * Created by Administrator on 2017/12/13/013.
 */
import registrations from './registrations'
import search from './search-action'
import meetings from './meetings'
import prisoners from './prisoners'
import families from './families'
import accounts from './accounts'
import terminals from './terminals'
import versions from './versions'

let actions = new Object()

Object.assign(actions,registrations,search,meetings,prisoners,families,accounts,terminals,versions)//合并不同模块的actions文件到index.js文件当中

export default actions
