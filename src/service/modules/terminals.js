/**
 * Created by Administrator on 2018/1/8/008.
 */
import * as service from '../base/service'

export default {
  //获取终端信息列表
  getTerminals: params =>
    service.get(`/terminals.json`, params).then(res => res).catch(err => err),
  //添加终端信息
  addTerminal: terminal =>
    service.post(`/terminals`, terminal).then(res => res).catch(err => err),
  //根据id删除终端信息
  deleteTerminalById: id =>
    service.remove(`/terminals/${id}`).then(res => res).catch(err => err),
  //编辑终端信息
  editTerminal: (terminal, id) =>
    service.patch(`/terminals/${id}`, terminal).then(res => res).catch(err => err)
}
