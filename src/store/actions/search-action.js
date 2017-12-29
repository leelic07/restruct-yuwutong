/**
 * Created by Administrator on 2017/12/19/019.
 */
import axios from 'axios'

export default {
  //搜索方法
  searchAction: ({commit}, regs) => {
    let mutationType = regs.c;//判断是哪个模块执行的搜索方法
    let url = '../../../mock/search.json';
    if (regs.hasOwnProperty('draw') || regs.hasOwnProperty('length')) {
      Object.assign(regs, {'page': regs.draw, 'limit': regs.length});
      delete regs.draw;
      delete regs.length;
    }
    if (mutationType == 'versions') {
      url = '../../../mock/versions.json';
    }
    axios.get(url, {
      params: regs
    }).then(res => {
      let mutationMethod = `get${mutationType.toUpperCase().substring(0, 1) + mutationType.substring(1)}`;//需要请求的mutation方法
      commit(mutationMethod, res.data);
    }).catch(err => {
      console.log(err);
    })
  }

}
