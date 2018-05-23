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
  }
}
