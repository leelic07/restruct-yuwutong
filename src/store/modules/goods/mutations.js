/**
 * Created by Administrator on 2018/1/2/002.
 */
import filters from '../../../filters'

export default {
  //获取商品列表信息
  getGoods(state, goodsList){
    state.goods = goodsList;
    state.goodsOrigin = [];
    //将页面显示的数据信息保存到goodsOrigin里面
    for (let good of goodsList) {
      good.category_id = filters.goodsCategory(good.category_id);//将商品部类过滤为中文信息
      state.goodsOrigin.push({
        id: good.id,
        title: good.title,
        description: good.description,
        barcode: good.barcode,
        price: good.price,
        unit: good.unit,
        factory: good.factory,
        category_id: good.category_id
      });
    }
    if (goodsList.length) {
      state.total = goodsList.length;
    }
  },
  //每页显示条数，当前页码，搜索条件发生变化时执行的方法
  searchGoods(state, pagination){
    let goodsList = [];
    //当有搜索条件时执行的操作
    if (pagination.value !== '') {
      for (let good of state.goodsOrigin) {
        for (let key in good) {
          if (good[key].toString() === pagination.value) {
            goodsList.push(good);
          }
        }
      }
      if (goodsList.length) {
        state.total = goodsList.length;
      }
      goodsList = goodsList.slice(pagination.page, pagination.page + pagination.limit);
    } else {//当不带搜索条件时执行的操作
      state.total = state.goodsOrigin.length;
      goodsList = state.goodsOrigin.slice(pagination.page, pagination.page + pagination.limit);
    }

    state.goods = goodsList;
  },

  //根据id获取需要编辑的商品信息
  editGoods(state, id){
    for (let good of state.goods) {
      if (good.id === Number(id)) {
        state.goodsForEdit = good;
        break;
      }
    }
  }
}
