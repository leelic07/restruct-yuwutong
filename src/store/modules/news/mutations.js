/**
 * Created by Administrator on 2018/1/11/011.
 */
export default {
  //获取狱务公开信息
  getNews(state, newsList){
    let news = newsList.news;
    let total = newsList.total;
    let prisonAffairsDisclosure = [];
    let workingDynamics = [];
    let complaintsProposals = [];
    //将狱务公开，工作动态，投诉建议得信息分别压入对应得数组
    for (let nw of news) {
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
    state.news = news;
    state.total = total;
    state.prisonAffairsDisclosure = prisonAffairsDisclosure;
    state.workingDynamics = workingDynamics;
    state.complaintsProposals = complaintsProposals;
  },
}
