/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  //获取狱务通版本信息
  getVersions(state,versionList){
    let prisonVersions = new Array();
    let familyVersions = new Array();

    for(let version of versionList.versions) {
      version.version_number = version.version_number.toString();
      Object.assign(version,{'isCheck':true},{'buttonText':'修改'});
      if(version.type_id === 2) {
        prisonVersions.push(version);
      }else if(version.type_id === 1) {
        familyVersions.push(version);
      }
    }

    state.prisonVersions = prisonVersions;
    state.familyVersions = familyVersions;
    state.versionsTotal = versionList.total[0]['COUNT(*)']
  },

  //更新狱务通版本信息
  updateVersion(state,updateVersionResult){
    state.updateVersionResult = updateVersionResult;
  }
}
