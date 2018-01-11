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
      lawListTemp.push(laws[i]);
      if ((i + 1) % 10 === 0) {
        lawList.push(lawListTemp);
        lawListTemp = [];
      } else if (i === laws.length - 1) {
        lawList.push(lawListTemp);
      }
    }
    state.laws = lawList;
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
      if (law.id === Number(id)) {
        state.lawForEdit = law;
      }
    }
  }
}
