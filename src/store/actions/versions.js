/**
 * Created by Administrator on 2017/12/28/028.
 */
import axios from 'axios'

export default {
  updateVersion({commit}, regs){
    axios.get('../../../mock/update.json', {
      params:{
        id: regs.id,
        version_code: regs.version_code,
        version_number: regs.version_number,
        is_force: regs.is_force
      }
    }).then(res => {
      commit('updateVersion', res.data);
    }).catch(err => {
      console.log(err);
    });
  }
}
