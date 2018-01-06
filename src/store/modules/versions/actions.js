/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '../../../service'

export default {
  updateVersion({commit}, regs){
    let params = {
      id:regs.id,
      version_code:regs.version_code,
      version_number:regs.version_number,
      is_force:regs.is_force
    }

    http.updateVersion(params).then(res => {
      commit('updateVersion',res);
    })
  }
}
