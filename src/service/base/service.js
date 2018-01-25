/**
 * Created by Administrator on 2018/1/7 0007.
 */
import base from '../config/base';
import axios from 'axios';
import store from '@/store';
import router from '@/router'
import {Message} from 'element-ui';

const instance = axios.create(base);
let token = '';//用户登录时的token
let jail_id = '';//用户调接口时传入的监狱id

//http request 拦截器
instance.interceptors.request.use(
  config => {
    token = store.getters.token.token;
    // console.log(config);
    // config.baseURL = 'https://www.fushuile.com';
    // config.withCredentials = true;
    // config.headers = {
    //   'Content-Type': "application/x-www-form-urlencoded"
    // };
    // if (config.url !== config.baseURL + 'login')

    //加载loading遮罩层
    store.commit('showLoading');

    config.headers.common['Authorization'] = token ? token : sessionStorage['token'];//每次发送请求是给请求头加上token

    if (jail_id = store.getters.users.jail_id) {//每次请求时加上jail_id属性
      if (config.method === 'get') {
        if (config.params)
          Object.assign(config.params, {'jail_id': sessionStorage['jail_id']});
        else
          config.url += '?jail_id=' + jail_id ? jail_id : sessionStorage['jail_id'];
      }

      if (config.method === 'post' && config.url !== `${config.baseURL}users`)
        config.data += '&jail_id=' + jail_id ? jail_id : sessionStorage['jail_id'];
    }

    return config;
  }
  ,
  error => Promise.reject(err)
);


//http response 拦截器
instance.interceptors.response.use(
  response => {
    // if(response.data.errCode === 2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    if (response.data.code) {
      switch (response.data.code) {
        case 404:
          Message.error('未找到相应数据');
          break;
        case 200:
          break;
        case 500:
          Message.error(response.data.msg);
          break;
        default:
          break;
      }
    }
    //隐藏loading遮罩层
    store.commit('hideLoading');

    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        Message.error('当前用户无权限，请重新登录！');
        router.push({
          path: '/login'
        });
        break
      case 404:
        Message.error('找不到对应的资源！');
        break;
      case 500:
        Message.error('服务器内部错误！');
        break;
      default:
        break;
    }
    Promise.reject(error);
  }
);

//代理服务器
export let agency = '/ywt';

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export let get = (url, params = {}) =>
  instance.get(url, {params: params}).then(res => res.data).catch(err => err);

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export let post = (url, data = {}) =>
  instance.post(url, data).then(res => res.data).catch(err => err);

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export let patch = (url, data = {}) =>
  instance.patch(url, data).then(res => res.data).catch(err => err);


/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export let put = (url, data = {}) =>
  instance.put(url, data).then(res => res.data).catch(err => err);

/**
 * 封装all请求
 * @param urls
 * @returns {Promise}
 */

export let all = (urls = []) =>
  axios.all(urls.map(url => instance.get(url))).then(axios.spread((...res) => res.map(res => res.data))).catch(err => err);

