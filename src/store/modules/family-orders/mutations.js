export default {
  //获取家属订单列表信息
  getFamilyOrders(state, familyOrders){
    state.familyOrders = familyOrders.data.orders;
    state.ordersTotal = familyOrders.data.orderSize;
  },
  //根据id来获取家属订单信息
  getOrderById(state, orderDetailResult){
    // let orderTotal = 0;//订单详情的商品总计价格
    // for (let order of state.familyOrders) {
    //   if (order.id === Number(id)) {
    //     state.orderDetail = order;
    //   }
    // }
    let orderList = orderDetailResult.data;
    let orderInfo = state.orderDetailInfo;
    state.orderDetailList = orderList.result;
    state.orderDetailTotal = orderList.total;
    orderInfo.tradeNo = orderList.order.tradeNo;
    orderInfo.gmtPayment = orderList.order.gmtPayment;
    orderInfo.name = orderList.prisoner.name;
    orderInfo.title = orderList.jail.title;
    orderInfo.amount = orderList.order.amount;
    state.orderDetailInfo = orderInfo;
  },
  editFamilyOrders(state, editFamilyResult){
    state.editFamilyResult = editFamilyResult;
  }
}
