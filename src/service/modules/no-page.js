import * as service from '../base/service'

export default {
  // 监狱
  getPrisonAll: () => {
    return service.get('/jails/getJailAll').then(res => res.code === 200 && res.data)
  }
}
