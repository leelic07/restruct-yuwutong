/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getFamilies(state,familyList) {
    let families = [];
    let prisoners = [];
    let total = 0;
    if(familyList.data !== undefined) {
      families = familyList.data.families_data;
      prisoners = familyList.data.prisoners_data;
      total = familyList.recordsTotal;
    }else {
      families = familyList.families;
      prisoners = familyList.prisoners;
      total = familyList.total;
    }

    // console.log(families,prisoners);
    //将对应家属的罪犯信息加入到家属信息列表中
    for(let family of families) {
      for(let prisoner of prisoners) {
        if(family.prisoner_id == prisoner.id) {
          Object.assign(family,{'prisoner':prisoner});
        }
      }
    }
    state.familyList = families;
    state.total = total;
  }
}
