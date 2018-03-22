export default {
  //获取囚犯列表信息
  getPrisoners(state, prisonersList) {
    let prisoners = prisonersList.data.prisoners;
    // let families = prisonersList.data.families_data;
    // let url = 'https://www.fushuile.com';
    //将服刑人员对应的家属人员信息合并到服刑人员列表当中
    // for (let family of families) {
    //   if (family.length !== 0) {
    //     for (let prisoner of prisoners) {
    //       if (family[0].prisoner_id === prisoner.id) {
    //         for (let f of family) {
    //           // f.image_url = url + f.image_url.split('|')[2];
    //           f.image_url = f.image_url.split('|')[2];
    //         }
    //         Object.assign(prisoner, {'families': family});
    //       }
    //     }
    //   }
    // }
    prisoners.forEach(prisoner => prisoner.families && prisoner.families.forEach(family => family.imageUrl = family.imageUrl.split('|')[2]));
    state.prisonerList = prisoners;
    state.prisonersTotal = prisonersList.data.prisonersSize;
  }
}
