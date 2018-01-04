/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'

export default {
  getPrisoners({commit},regs) {
    let start = (regs.draw - 1) * regs.length;
    axios.get('/prisoners.json',{
      params:Object.assign(regs,{'start':start})
    }).then(res => {
      commit('getPrisoners',res.data);
    }).catch(err => {
      console.log(err);
    });
  }
}
