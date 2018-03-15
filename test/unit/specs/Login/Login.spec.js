/**
 * Created by Administrator on 2018/3/15/015.
 */
import {destroyVM, createTest} from '../util'
// import Login from '@/views/Login/Login'
import store from '@/store'

describe('Login.vue', () => {
  // let vm = createTest(Login, {}, true);

  // afterEach(() => {
  //   destroyVM(vm);
  // });

  it('获取登录的异步请求', done => {
    // vm.ruleForm2 = {
    //   prison: '4501',
    //   username: '4501_sh',
    //   password: '123456'
    // };
    // vm.login(vm.ruleForm2);
    // vm.$store.dispatch('login', vm.ruleForm2);
    // vm.$nextTick(done => {
    //   console.log(vm.users);
    // setTimeout(() => {
    //   expect(typeof vm.users).to.be.an('object');
    // }, 500);
    //   done();
    // });
    store.dispatch('login', {
      prison: '4501',
      username: '4501_sh',
      password: '123456'
    }).then(res => expect(res.code).to.be.an(200));
    done();
  });
});
