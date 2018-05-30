import dateFormate from '@/filters/modules/date'

export default {
  phone: (rule, val, callback) => {
    var reg = /^1\d{10}$/
    if (val && (reg.test(val))) {
      callback()
    }
    else {
      callback(new Error('手机号格式错误'))
    }
  },
  isFee: (rule, val, callback) => {
    let num = Number(val)
    if (isNaN(num)) {
      callback(new Error('请输入数字'))
    }
    else if (parseInt(num * 100) !== num * 100) {
      callback(new Error('最多保留两位小数'))
    }
    else {
      callback()
    }
  },
  isNumber: (rule, value, callback) => {
    if ([undefined, null, ''].indexOf(value) > -1) {
      callback()
    }
    else if (!Number.isInteger(Number(value))) {
      callback(new Error('请输入整数'))
    }
    else {
      callback()
    }
  },
  numberRange: (rule, value, callback) => {
    let val = Number(value)
    if (String(rule.min).length && String(rule.max).length && (val < rule.min || val > rule.max)) {
      callback(new Error(`请输入${ rule.min }-${ rule.max }之间的数字`))
    }
    else if (String(rule.min).length && !String(rule.max).length && val < rule.min) {
      callback(new Error(`请输入大于${ rule.min }的数字`))
    }
    else if (!String(rule.min).length && String(rule.max).length && val > rule.max) {
      callback(new Error(`请输入小于${ rule.min }的数字`))
    }
    else {
      callback()
    }
  },
  timeRange: (rule, val, callback) => { // 只比较时间先后, 设置时间列表时专用
    if (!val) {
      callback()
      return
    }
    let minTime = '', time = dateFormate.dateFormate(new Date(`1971-01-01 ${ val[0] }`), 'hh:mm')
    if (rule.prev) minTime = dateFormate.dateFormate(new Date(`1971-01-01 ${ rule.prev[1] }`), 'hh:mm')
    if (time < minTime) {
      rule.flag[rule.prop] = false
      callback(new Error(`开始时间最早为${ rule.prev[1] }`))
    }
    else if (val[0] === val[1]) {
      rule.flag[rule.prop] = false
      callback(new Error('间隔时间过短'))
    }
    else if (val[1].indexOf('23:59') > -1) {
      rule.flag[rule.prop] = false
      callback()
    }
    else {
      rule.flag[rule.prop] = true
      callback()
    }
  }
}
