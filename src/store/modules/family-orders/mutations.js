/**
 * Created by Administrator on 2018/1/9/009.
 */
export default {
  //获取家属订单列表信息
  getFamilyOrders(state, familyOrders){
    state.familyOrders = familyOrders.orders;
    state.total = familyOrders.orders.length;
  },
  //根据id来获取家属订单信息
  getOrderById(state, id){
    let orderTotal = 0;//订单详情的商品总计价格
    for (let order of state.familyOrders) {
      if(order.id === Number(id)){
        state.orderDetail = order;
      }
    }
  }

}
