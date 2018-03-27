import * as service from '../base/service'

export default {
  getProvinces: pagination =>
    service.get('/provinces/list', pagination).then(res => res).catch(err => err)
}
