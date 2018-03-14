/**
 * Created by Administrator on 2017/12/25/025.
 */
export default {
  //家属注册状态过滤器
  gender(val){
    let gender = '';
    switch (val) {
      case 'm' :
        gender = '男';
        break;
      case 'f' :
        gender = '女';
        break;
      default :
        gender = val
    }
    return gender;
  }
}
