/**
 * Created by Administrator on 2018/3/15/015.
 */
import loginActions from '@/store/modules/login/actions'
import Login from '@/views/Login/Login'
import {destroyVM, createTest} from './util'

describe('login.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  });
  //测试登录的异步请求
  it('获取登录的异步请求', done => {
    vm = createTest(Login, {}, true);
    loginActions.login({}, {
      prison: '4501',
      username: '4501_sh',
      password: '123456'
    }).then(res => {
      expect(res.code).to.equal(200);
      done();
    }).catch(err => console.log(err));
    // store._actions.login[0]({
    //   prison: '4501',
    //   username: '4501_sh',
    //   password: '123456'
    // }).then(res => {
    //   expect(res.code).to.be.an(200);
    //   done();
    // }).catch(err => console.log(err));
    // vm.ruleForm2 = {
    //   prison: '4501',
    //   username: '4501_sh',
    //   password: '123456'
    // };
    // vm.$store.dispatch('login', ruleForm2);
    // // vm.submitForm('ruleForm2');
    // // vm.$el.querySelector('.btn-box button').click();
    // setTimeout(() => {
    //   expect(vm.users.hasOwnProperty('id')).to.equal('123');
    // }, 500);
  });
});
