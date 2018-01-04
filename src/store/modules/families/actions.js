/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'

export default {
  //获取家属注册信息列表
  getFamilies:({commit},regs) => {
    let start = (regs.draw - 1) * regs.length;
    axios.get('/families.json',{
      params:Object.assign(regs,{
        'start':start
      })
    }).then(res => {
      commit('getFamilies',res.data);
    }).catch(err =>{
      console.log(err);
    })
  },
}
