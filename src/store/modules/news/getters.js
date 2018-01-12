/**
 * Created by Administrator on 2018/1/11/011.
 */
export default {
  //获取狱务公开原数据信息
  news: state => state.news,

  //获取狱务公开
  prisonAffairsDisclosure: state => state.prisonAffairsDisclosure,

  prisonAffairsDisclosureTotal: state => state.prisonAffairsDisclosure.length,

  //获取工作动态
  workingDynamics: state => state.workingDynamics,

  workingDynamicsTotal: state => state.workingDynamics.length,

  //获取投诉建议
  complaintsProposals: state => state.complaintsProposals,

  complaintsProposalsTotal: state => state.complaintsProposals.length
}
