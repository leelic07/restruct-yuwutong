import * as service from '../base/service'

export default {
  //获取终端信息列表
  getTerminals: pagination =>
    service.get('/terminals/page', pagination).then(res => res).catch(err => err),
  //添加终端信息
  addTerminal: terminal =>
    service.post('/terminals/add', terminal).then(res => res).catch(err => err),
  //根据id删除终端信息
  deleteTerminalById: id =>
    service.remove(`/terminals/${id}`).then(res => res).catch(err => err),
  //编辑终端信息
  editTerminal: terminal =>
    service.post('/terminals/edit', terminal).then(res => res).catch(err => err)
}
