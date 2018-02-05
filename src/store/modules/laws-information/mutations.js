/**
 * Created by Administrator on 2018/1/10/010.
 */
export default {
  //获取法律法规信息
  getLawsInformation(state, laws){
    let lawList = [];
    let lawListTemp = [];
    //将laws变成由长度为10的子数组构成
    for (let i = 0; i < laws.length; i++) {
      laws[i].image_url = laws[i].image_url ? laws[i].image_url.substring(6) : '';
      lawListTemp.push(laws[i]);
      if ((i + 1) % 10 === 0) {
        lawList.push(lawListTemp);
        lawListTemp = [];
      } else if (i === laws.length - 1) {
        lawList.push(lawListTemp);
      }
    }
    state.laws = lawList;
    state.lawDetail = lawList[0][0];
  },
  //根据id获取需要编辑的法律信息
  getLawById(state, id){
    //将法律信息的二位数组转为一维数组
    let laws = state.laws;
    let lawsTemp = [];
    for (let i = 0; i < laws.length; i++) {
      lawsTemp = lawsTemp.concat(laws[i]);
    }
    //根据id找法律信息
    for (let law of lawsTemp) {
      law.id === Number(id) && (state.lawForEdit = law);
    }
  },
  //添加法律法规信息
  addLaw(state, addLawResult){
    state.addLawResult = addLawResult;
    state.lawManagementPage = state.laws.length - 1;
    state.lawDetail = state.laws[state.lawManagementPage][state.laws[state.lawManagementPage].length - 1]
  },
  //编辑法律法规信息
  editLaw: (state, editLawResult) => state.editLawResult = editLawResult,
  //根据id删除法律法规
  deleteLawById (state, deleteLawResult){
    let id = deleteLawResult.id;
    delete deleteLawResult.id;
    state.laws.forEach((laws, index) => {
      laws.forEach((law, index, arr) => {
        law.id === Number(id) && arr.splice(index, 1);
      });
      if (laws.length === 0) {
        state.laws.splice(index, 1);//如果当前数组没有数据则删除当前数组
        state.lawManagementPage > 0 && state.lawManagementPage--;
      }
    });
    state.deleteLawResult = deleteLawResult;
  },
  //点击下一页执行的方法
  nextPage: state => state.lawManagementPage < state.laws.length - 1 && state.lawManagementPage++,
  //点击上一页执行的方法
  prePage: state => state.lawManagementPage > 0 && state.lawManagementPage--
}
