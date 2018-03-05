/**
 * Created by Administrator on 2018/3/5/005.
 */
export default {
  //日期过滤器
  Date(time){
    let date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}
