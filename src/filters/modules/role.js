// export default {
//   // 家属注册状态过滤器
//   role(val) {
//     let role = ''
//     switch (val) {
//       case 0 :
//         role = '管理员'
//         break
//       case 1 :
//         role = '审核人员'
//         break
//       case 2 :
//         role = '商品用户'
//         break
//       case 3 :
//         role = '信息管理人员'
//         break
//       default :
//         role = val
//     }
//     return role
//   }
// }
let role = [
  { value: 0, label: '管理员' },
  { value: 1, label: '审核人员' },
  { value: 2, label: '商品用户' },
  { value: 3, label: '信息管理人员' }
]
export default { role }
