export default {
  // 获取狱务公开原数据信息
  newsAll: state => state.newsAll,
  // 获取狱务公开新闻信息的记录数
  newsTotal: state => state.newsTotal,
  // 获取狱务公开
  // prisonAffairsDisclosure: state => state.prisonAffairsDisclosure,
  // prisonAffairsDisclosureTotal: state => state.prisonAffairsDisclosureTotal,
  // //获取工作动态
  // workingDynamics: state => state.workingDynamics,
  // workingDynamicsTotal: state => state.workingDynamicsTotal,
  // // 获取投诉建议
  // complaintsProposals: state => state.complaintsProposals,
  // complaintsProposalsTotal: state => state.complaintsProposalsTotal,
  // 获取待编辑的新闻信息
  newsForEdit: state => state.newsForEdit,
  // 获取编辑狱务公开信息的结果
  editNewsResult: state => state.editNewsResult,
  // 添加狱务公开信息的结果
  addNewsResult: state => state.addNewsResult,
  // 获取删除狱务公开信息的结果
  deleteNewsResult: state => state.deleteNewsResult
}