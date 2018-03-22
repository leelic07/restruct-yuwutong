export default {
  //获取法律法规信息
  laws: state => state.laws,
  //获取需要显示的法律法规详情信息
  lawDetail: state => state.lawDetail,
  //获取需要编辑的法律信息
  lawForEdit: state => state.lawForEdit,
  //获取添加法律法规信息结果
  addLawResult: state => state.addLawResult,
  //编辑法律法规信息
  editLawResult: state => state.editLawResult,
  //根据id删除法律法规的结果
  deleteLawResult: state => state.deleteLawResult,
  //获取法律法规当前第几页
  lawManagementPage: state => state.lawManagementPage
}
