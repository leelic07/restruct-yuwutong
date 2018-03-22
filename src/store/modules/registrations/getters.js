export default {
  //获取家属注册数组信息
  registrations: state => state.registrations,

  registrationsTotal: state => state.registrationsTotal,

  //获取家属注册授权结果
  authRegistrationsResult: state => state.authorizationResult,

  //获取家属照片数组
  uuidImages: state => state.uuidImages,

  //获取拒绝家属申请理由数组
  remarks: state => state.remarks
}
