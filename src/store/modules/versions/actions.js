/**
 * Created by Administrator on 2018/1/1 0001.
 */
import http from '@/service'

export default {
  //获取狱务通app版本号
  getVersions({commit}, regs){
    http.getVersions(regs).then(res => res.code === 200 && commit('getVersions', res)).catch(err => console.log(err));
  },
  //更新狱务通版本信息
  updateVersion({commit}, regs){
    let params = {
      id: regs.id,
      version_code: regs.version_code,
      version_number: regs.version_number,
      is_force: regs.is_force
    };
    //更新狱务通版本信息
    http.updateVersion(params).then(res => res.code === 200 && commit('updateVersion', res)).catch(err => err);
  }
}
