import DashBoard from '@/views/DashBoard/DashBoard'
import {destroyVM, createTest} from '../util'
import store from './store'

describe('DashBoard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(DashBoard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector("#dash-board h1"),textContent).to.equal('欢迎来到狱务公开管理平台')
  })
})
