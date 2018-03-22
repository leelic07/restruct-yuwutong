export default {
  // 获取商品信息列表
  goods: state => state.goods,
  // 获取商品信息列表记录数
  goodsTotal: state => state.goodsTotal,
  // 获取用作编辑的商品信息
  goodsForEdit: state => state.goodsForEdit,
  // 获取添加商品的结果
  addGoodsResult: state => state.addGoodsResult,
  // 获取编辑商品的结果
  editGoodsResult: state => state.editGoodsResult,
  // 删除商品结果
  deleteGoodsResult: state => state.deleteGoodsResult
}
