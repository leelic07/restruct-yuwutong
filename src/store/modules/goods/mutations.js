/**
 * Created by Administrator on 2018/1/2/002.
 */
export default {
  getGoods(state,goodsList){
    state.goods = goodsList;
    if(goodsList.length) {
      state.goodsTotal = goodsList.length;
    }
  }
}
