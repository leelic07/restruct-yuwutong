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
    let lastPage = state.laws[state.lawManagementPage];//最末尾一页的数组
    state.lawDetail = lastPage[lastPage.length - 1];//将最末尾的数据(新增数据)赋值给lawDetail
  },
  //编辑法律法规信息
  editLaw(state, editLawResult){
    let id = editLawResult.id;
    delete editLawResult.id;
    state.laws.forEach((law, index) =>
      law.forEach((l, i) => l.id === Number(id) && (state.lawDetail = l)));//将当前修改的法律法规信息赋值给lawDetail
    state.editLawResult = editLawResult;
  },
  //根据id删除法律法规
  deleteLawById (state, deleteLawResult){
    let id = deleteLawResult.id;
    delete deleteLawResult.id;
    state.laws.forEach((laws, index) => {
      laws.forEach((law, i, arr) => {
        if (law.id === Number(id)) {
          arr.splice(i, 1);
          let preArr = state.laws[index - 1];//当前数组的上一个数组
          arr.length && (state.lawDetail = arr[i - 1]) || preArr.length && (state.lawDetail = preArr[preArr.length - 1] );
        }
      });
      if (laws.length === 0) {
        state.laws.splice(index, 1);//如果当前数组没有数据则删除当前数组
        state.lawManagementPage && state.lawManagementPage--;//当前页数减1
      }
    });
    state.deleteLawResult = deleteLawResult;
  },
  //点击下一页执行的方法
  nextPage: state => state.lawManagementPage < state.laws.length - 1 && state.lawManagementPage++,
  //点击上一页执行的方法
  prePage: state => state.lawManagementPage && state.lawManagementPage--,
  //设置法律法规的详情信息
  setLawDetail: (state, lawDetail) => state.lawDetail = lawDetail
}
