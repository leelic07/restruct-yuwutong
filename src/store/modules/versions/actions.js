/**
 * Created by Administrator on 2018/1/1 0001.
 */
import axios from 'axios'

// axios.interceptors.request.use(function (config) {
//   console.log(config);
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   console.log(error);
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

export default {
  updateVersion({commit}, regs){
    let params = new URLSearchParams();
    params.append('id', regs.id);
    params.append('version_code', regs.version_code);
    params.append('version_number', regs.version_number);
    params.append('is_force', regs.is_force);
    axios({
      url:'/versions/update',
      method:'post',
      data:params,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }).then(res => {
      // console.log(arguments);
      commit('updateVersion', res.data);
    }).catch(err => {
      console.log(err);
    });
  }
}
