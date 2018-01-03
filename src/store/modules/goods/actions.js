/**
 * Created by Administrator on 2018/1/2/002.
 */
import axios from 'axios'

export default {
  //获取商品列表信息
  getGoods({commit},regs){
    axios.get('../../../mock/items.json',{
      params:regs
    }).then(res => {
      console.log(res);
      commit('getGoods',res.data);
    }).catch(err => {
      console.log(err);
    });
  }
}
