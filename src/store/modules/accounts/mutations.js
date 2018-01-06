/**
 * Created by Administrator on 2018/1/1 0001.
 */
export default {
  getAccounts(state,accountsList) {
    state.accounts = accountsList.data;
    state.total = accountsList.total;
  },

  getAccountDetail(state,accountDetail){
    state.accountDetail = accountDetail.details;
  }
}
