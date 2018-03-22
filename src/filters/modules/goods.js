export default {
  //商品部类过滤器
  goodsCategory(category){
    switch (category) {
      case 1:
        return '洗化日用';
        break;
      case 2:
        return '食品饮料';
        break;
      case 3:
        return '服饰鞋帽';
        break;
      case 4:
        return '医药保健';
        break;
      case 5:
        return '电话卡';
        break;
      default:
        return category
    }
  }
}
