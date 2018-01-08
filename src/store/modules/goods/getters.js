/**
 * Created by Administrator on 2018/1/2/002.
 */
export default {
  //获取商品信息列表
  goods: state => state.goods,

  //获取商品信息列表记录数
  goodsTotal:state => state.goodsTotal,

  //获取用作编辑的商品信息
  goodsForEdit:state => state.goodsForEdit
}
