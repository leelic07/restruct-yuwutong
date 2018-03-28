import http from '@/service'

export default {
  getPrisonUsers: ({ commit }, regs) => {
    http.getPrisonUsers(regs).then(res => res.code === 200 && commit('getPrisonUsers', res.data)).catch(err => console.log(err))
  }
}
