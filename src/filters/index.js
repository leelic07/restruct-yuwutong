import registrations from './modules/registrations'
import families from './modules/families'
import goodsCategory from './modules/goods'
import role from './modules/role'
import date from './modules/date'
import gender from './modules/gender'

let filterObj = Object.assign({}, role, families, goodsCategory, registrations, gender), filters = {}

Object.keys(filterObj).forEach(k => {
  filters[k] = (val) => {
    if (!val && (val !== 0 && val !== '0')) return
    let res = filterObj[k].find(item => {
      return item.value === val
    })
    if (!res) return `未知(${ val })`
    return res.label
  }
})

export default {
  ...filters,
  ...date
}
