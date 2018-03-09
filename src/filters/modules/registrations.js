/**
 * Created by Administrator on 2017/12/19/019.
 */
export default {
  //家属注册状态过滤器
  registrationsStatus(val){
    let status = '';
    switch (val) {
      case 'PENDING' :
        status = '未授权';
        break;
      case 'DENIED' :
        status = '已拒绝';
        break;
      case 'PASSED' :
        status = '已通过';
        break;
      default :
        status = ''
    }
    return status;
  }
}
