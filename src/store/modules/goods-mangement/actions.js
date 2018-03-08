/**
 * Created by Administrator on 2018/1/2/002.
 */
import http from '@/service'

export default {
  //获取商品列表信息
  getGoods: ({commit}, regs) =>
    http.getGoods({
      ...regs,
      // jailId: sessionStorage['jail_id']
    }).then(res => commit('getGoods', res)).catch(err => console.log(err)),
  //根据id获取商品信息
  getGoodsById: ({commit}, regs) =>
    http.getGoodsById({id: regs}).then(res => res.code === 200 && commit('getGoodsById', res)).catch(err => console.log(err)),
  //添加商品
  addGoods({commit}, regs){
    let formData = new FormData();
    regs.image.raw && formData.append('image', regs.image.raw);
    formData.append('barcode', regs.barcode);
    formData.append('title', regs.title);
    formData.append('description', regs.description);
    formData.append('unit', regs.unit);
    formData.append('price', regs.price);
    formData.append('factory', regs.factory);
    formData.append('category_id', regs.category_id);
    formData.append('sys_flag', regs.sys_flag);
    formData.append('ranking', regs.ranking);
    http.addGoods(formData).then(res => res.code === 200 && http.getGoods().then(response => {
      commit('getGoods', response);
      commit('addGoods', res);
    }).catch(err => console.log(err))).catch(err => console.log(err));
  }
  ,
  //编辑商品
  editGoods({commit}, regs)
  {
    let id = regs.id;
    delete regs.id;
    let formData = new FormData();
    regs.avatar.raw && formData.append('avatar', regs.avatar.raw);
    formData.append('barcode', regs.barcode);
    formData.append('title', regs.title);
    formData.append('description', regs.description);
    formData.append('unit', regs.unit);
    formData.append('price', regs.price);
    formData.append('factory', regs.factory);
    formData.append('category_id', regs.category_id);
    formData.append('ranking', regs.ranking);
    formData.append('sys_flag', regs.sys_flag);
    http.editGoods(formData, id).then(res => res.code === 200 && http.getGoods().then(response => {
      commit('getGoods', response);
      commit('editGoods', res)
    }).catch(err => console.log(err))).catch(err => console.log(err))
  }
  ,
  //删除商品
  deleteGoods: ({commit}, regs) =>
    http.deleteGoods({id: regs}).then(res => res.code === 200 && commit('deleteGoods', {
      ...res,
      id: regs
    })).catch(err => console.log(err))
}
