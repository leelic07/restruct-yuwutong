/**
 * Created by Administrator on 2017/12/25/025.
 */
import axios from 'axios'

export default {
  //获取家属注册信息列表
  getFamilies:({commit},regs) => {
    axios.get('../../../mock/families.json',{
      params:regs
    }).then(res => {
      console.log(res);
      commit('getFamilies',res.data);
    }).catch(err =>{
      console.log(err);
    })
  },
}
