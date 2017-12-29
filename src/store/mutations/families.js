/**
 * Created by Administrator on 2017/12/25/025.
 */
export default {
  getFamilies(state,familyList) {
    let families = familyList.data.families_data;
    let prisoners = familyList.data.prisoners_data;
    // console.log(families,prisoners);
    //将对应家属的罪犯信息加入到家属信息列表中
    for(let family of families) {
      for(let prisoner of prisoners) {
        if(family.prisoner_id == prisoner.id) {
          Object.assign(family,{'prisoner':prisoner});
        }
      }
    }
    state.FAMILIES.familyList = families;
    state.FAMILIES.total = familyList.recordsTotal;
  }
}
