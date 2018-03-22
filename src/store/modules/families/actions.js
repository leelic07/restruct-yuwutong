import http from '@/service'

export default {
  // 获取家属注册信息列表
  getFamilies: ({ commit }, regs) => {
    // let start = (regs.draw - 1) * regs.length// 计算从第几条数据开始取
    // Object.assign(regs, {'start': start})
    http.getFamilies(regs).then(res => res.code === 200 && commit('getFamilies', res)).catch(err => console.log(err))
  }
}
