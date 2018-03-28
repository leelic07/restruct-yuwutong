import registrations from './modules/registrations'
import families from './modules/families'
import goods from './modules/goods'
import role from './modules/role'
import date from './modules/date'

let filterObj = Object.assign({}, role, families), filters = {}

Object.keys(filterObj).forEach(k => {
  filters[k] = (val) => {
    let res = filterObj[k].find(item => {
      return item.value === val
    })
    return res.label
  }
})
Object.assign(filters, date, registrations, goods)

export default { ...filters }
