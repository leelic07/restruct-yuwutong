/**
 * Created by Administrator on 2018/1/11/011.
 */
export default {
  //获取狱务公开信息
  getNews(state, newsList){
    let prisonAffairsDisclosure = [];
    let workingDynamics = [];
    let complaintsProposals = [];
    //将狱务公开，工作动态，投诉建议得信息分别压入对应得数组
    for (let nw of newsList.news) {
      nw.image_url = nw.image_url ? nw.image_url.substring(6) : '';//截取图片路径地址
      switch (nw.type_id) {
        case 1:
          prisonAffairsDisclosure.push(nw);
          break;
        case 2:
          workingDynamics.push(nw);
          break;
        case 3:
          complaintsProposals.push(nw);
          break;
        default:
          break;
      }
    }
    state.news = newsList.news;
    state.newsTotal = newsList.total;
    state.prisonAffairsDisclosure = state.prisonAffairsDisclosureOrigin = prisonAffairsDisclosure;//保存原始的狱务公开信息
    state.prisonAffairsDisclosureTotal = prisonAffairsDisclosure.length;//狱务公开记录数
    state.workingDynamics = state.workingDynamicsOrigin = workingDynamics;//保存原始的工作动态信息
    state.workingDynamicsTotal = workingDynamics.length;//工作动态记录数
    state.complaintsProposals = state.complaintsProposalsOrigin = complaintsProposals;//保存原始的投诉建议公示信息
    state.complaintsProposalsTotal = complaintsProposals.length;//投诉建议记录数
  },
  //根据id获取新闻信息
  getNewsById: (state, id) => state.news.forEach(nw => nw.id === Number(id) && (state.newsForEdit = nw)),
  //每页显示条数，当前页码，搜索条件发生变化时执行的方法
  searchPrisonAffairsDisclosure(state, pagination){
    let prisonAffairsDisclosure = [];
    //当有搜索条件时执行的操作
    if (pagination.value !== '') {
      for (let pado of state[`${pagination.c}Origin`]) {
        for (let key in pado) {
          if (pado[key] && new RegExp(pagination.value).test(pado[key].toString())) {
            prisonAffairsDisclosure.push(pado);
            break;
          }
        }
      }
      prisonAffairsDisclosure.length && (state[`${pagination.c}Total`] = prisonAffairsDisclosure.length);
      prisonAffairsDisclosure = prisonAffairsDisclosure.slice(pagination.page, pagination.page + pagination.limit);
    } else {//当不带搜索条件时执行的操作
      state[`${pagination.c}Total`] = state[`${pagination.c}Origin`].length;
      prisonAffairsDisclosure = state[`${pagination.c}Origin`].slice(pagination.page, pagination.page + pagination.limit);
    }
    state[pagination.c] = prisonAffairsDisclosure;
  },
  //编辑狱务公开信息
  editNews: (state, editNewsResult) => state.editNewsResult = editNewsResult,
  //添加狱务公开信息
  addNews: (state, addNewsResult) => state.addNewsResult = addNewsResult,
  //根据id删除狱务公开信息
  deleteNewsById(state, deleteNewsResult){
    let id = deleteNewsResult.id;
    let c = deleteNewsResult.c;
    delete deleteNewsResult.id;
    delete deleteNewsResult.c;
    state[c].forEach((item, index, pad) => {
      if (item.id === Number(id)) {
        pad.splice(index, 1);
        state[`${c}Origin`].forEach((item, index, pado) => {
          item.id === Number(id) && pado.splice(index, 1);
        });
        state[`${c}Total`]--;
      }
    });
    state.deleteNewsResult = deleteNewsResult;
  }
}
