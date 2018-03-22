export default {
  // 家属订单模板上传成功后将家属订单模板导入到服务端
  importPrisonerOrders: (state, prisonerOrdersResult) => {
    state.prisonerOrdersResult = prisonerOrdersResult.data
  },
  // 上传商品订单模板到服务端
  uploadTemplate: (state, uploadTemplateResult) => {
    state.uploadTemplateResult = uploadTemplateResult
  }
}
