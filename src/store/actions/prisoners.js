/**
 * Created by Administrator on 2017/12/22/022.
 */
import axios from 'axios'

export default {
  getPrisoners({commit},regs) {
    let start = (regs.draw - 1) * regs.length;
    axios.get('../../../mock/prisoners.json',{
      params:Object.assign(regs,{'start':start})
    }).then(res => {
      commit('getPrisoners',res.data);
    }).catch(err => {
      console.log(err);
    });
  }
}
