/**
 * Created by Administrator on 2018/1/10/010.
 */
export default {
  //获取法律法规信息
  laws: state => state.laws,
  //获取需要编辑的法律信息
  lawForEdit: state => state.lawForEdit,
  //获取添加法律法规信息结果
  addLawResult: state => state.addLawResult,
  //编辑法律法规信息
  editLawResult: state => state.editLawResult
}
