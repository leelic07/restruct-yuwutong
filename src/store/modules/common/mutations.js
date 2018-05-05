export default {
  // 显示loading遮罩层
  showLoading: state => { state.loading = true },
  // 隐藏loading遮罩层
  hideLoading: state => { state.loading = false },
  resetState: (state, params) => {
    Object.keys(params).forEach(key => {
      state[key] = params[key]
    })
  }
}
