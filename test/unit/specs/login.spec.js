import Vue from 'vue';
import Vuex from 'vuex';
import Login from '@/views/Login/Login'
// import {destroyVM, createTest} from '../util'
import store from '@/store'
Vue.use(Vuex);

// describe('DashBoard.vue', () => {
//   it('dashboard内容正确', () => {
//     const Constructor = Vue.extend(DashBoard)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector("#dash-board h1").textContent).to.equal('欢迎来到狱务公开管理平台')
//   })
// })


describe('Login.vue', () => {
  // let vm = createTest(Login, {}, true);

  // afterEach(() => {
    // destroyVM(vm);
  // });

  it('获取登录的异步请求', done => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor({ store }).$mount()
    vm.ruleForm2 = { password: '123456', username: '4501_sh', prison: '4501' }
    vm.submitForm('ruleForm2')
    setTimeout(() => {
      expect(vm.$store.state.users).should.have.property('id')
    }, 300)
    // vm.$nextTick(() => {
    //   expect(vm.$store.state.users).should.have.property('id')
    // })
    done()
    // store.dispatch('login', {
    //   prison: '4501',
    //   username: '4501_sh',
    //   password: '123456'
    // }).then(res => {
    //   expect(res.code).to.be.an(200)
    //   done();
    // });
  });
});
