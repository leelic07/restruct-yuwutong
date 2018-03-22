export default {
  // 商品部类过滤器
  goodsCategory(category) {
    switch (category) {
      case 1:
        return '洗化日用'
      case 2:
        return '食品饮料'
      case 3:
        return '服饰鞋帽'
      case 4:
        return '医药保健'
      case 5:
        return '电话卡'
      default:
        return category
    }
  }
}
