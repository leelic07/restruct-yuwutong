import http from '@/service'

export default {
  getFeedbacks: ({ commit }, regs) => {
    http.getFeedbacks(regs).then(res => res.code === 200 && commit('getFeedbacks', res)).catch(err => console.log(err))
  }
}
