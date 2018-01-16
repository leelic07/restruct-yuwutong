/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //带搜索条件时执行的方法
  searchAction({commit}, regs){
    let mutationType = regs.c;//判断是哪个模块执行的搜索方法
    let mutationMethod = `get${mutationType.toUpperCase().substring(0, 1) + mutationType.substring(1)}`;//计算需要请求的mutation方法

    //如果入参是 draw和length 改为 page和limit
    if (regs.hasOwnProperty('draw') || regs.hasOwnProperty('length')) {
      Object.assign(regs, {'page': regs.draw, 'limit': regs.length});
      delete regs.draw;
      delete regs.length;
    }

    http.searchAction(regs).then(res => commit(mutationMethod, res)).catch(err => console.log(err));
  }
}
