export default {
  phone: (rule, val, callback) => {
    var reg = /^1\d{10}$/
    if (val && (reg.test(val))) {
      callback()
    }
    else {
      callback(new Error('手机号格式错误'))
    }
  }
}
