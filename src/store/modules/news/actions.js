/**
 * Created by Administrator on 2018/1/11/011.
 */
import http from '@/service'

export default {
  //获取狱务公开信息
  getNews({commit},regs){
    http.getNews(regs).then(res => {
      commit('getNews',res);
    }).catch(err => {
      console.log(err);
    });
  }
}
