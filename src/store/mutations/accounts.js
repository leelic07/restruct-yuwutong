/**
 * Created by Administrator on 2017/12/25/025.
 */
export default {
  getAccounts(state,accountsList) {
    state.ACCOUNTS.accounts = accountsList.data;
    state.ACCOUNTS.total = accountsList.total;
  }
}
