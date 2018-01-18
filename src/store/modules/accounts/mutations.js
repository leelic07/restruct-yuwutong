/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getAccounts(state, accountsList) {
    state.accounts = accountsList.data;
    state.accountsTotal = accountsList.total;
  },
  //获取账户详情信息
  getAccountDetail(state, accountDetail){
    //重新设置创建日期的时间
    for (let detail of accountDetail.details) {
      detail.created_at = `${detail.created_at.substring(0, 10)} ${detail.created_at.substring(11, 19)}`
    }
    state.accountDetail = accountDetail.details;
  }
}
