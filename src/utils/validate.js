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
    if (!Number.isInteger(value)) {
      callback(new Error('请输入整数'))
    }
    else {
      callback()
    }
  }
}
