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
      code: regs.versionCode,
      number: regs.versionNumber,
      isForce: regs.isForce
    };
    //更新狱务通版本信息
    http.updateVersion(params).then(res => res.code === 200 && commit('updateVersion', res)).catch(err => err);
  }
}
