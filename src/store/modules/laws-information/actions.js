/**
 * Created by Administrator on 2018/1/10/010.
 */
import http from '../../../service'

export default {
  //获取法律法规信息
  getLawsInformation({commit}){
    http.getLawsInformation().then(res => {
      commit('getLawsInformation',res);
    }).catch(err => {
      console.log(err);
    });
  }
}
