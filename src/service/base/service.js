/**
 * Created by Administrator on 2018/1/7 0007.
 */
import base from '../config/base';
import axios from 'axios';
import store from '@/store';
import router from '@/router'
import {Message} from 'element-ui';
import qs from 'qs';

const instance = axios.create(base);
let token = '';//用户登录时的token
let jail_id = '';//用户调接口时传入的监狱id

//代理服务器
export let agency = '/ywt';

//http request 拦截器
instance.interceptors.request.use(
  config => {
    if (sessionStorage['token']) {
      config.headers.common['Authorization'] = sessionStorage['token'];//每次发送请求是给请求头加上token
      //每次发起请求将jail_id发送给服务器端
      if (jail_id = sessionStorage['jail_id']) {//每次请求时加上jail_id属性
        if (config.method === 'get') {
          if (config.params)
            Object.assign(config.params, {'jail_id': jail_id});
          else
            config.url += `?jail_id=${jail_id}`;
        }
        if (config.method === 'post' && config.url !== `${agency}/users`)
          config.data += `&jail_id=${jail_id}`;
      }
    } else if (config.url !== `${agency}/authentication`) {//没有token提示‘先登录’再跳转到登录页面
      Message({type: 'warning', message: '当前用户无权限，请先登录！'});
      router.push({
        path: '/login'
      });
      return;
    }
    //加载loading遮罩层
    store.commit('showLoading');
    return config;
  },
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
          Message({
            type: 'success',
            message: response.data.msg
          });
          break;
        case 500:
          Message.error(response.data.msg);
          break;
        default:
          Message.error(response.data.msg);
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
        break;
      case 404:
        Message.error('找不到对应的资源！');
        break;
      case 500:
        Message.error('服务器内部错误！');
        break;
      default:
        break;
    }
    //隐藏loading遮罩层
    store.commit('hideLoading');
    Promise.reject(error);
  }
);

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
  instance.post(url, qs.stringify(data)).then(res => res.data).catch(err => err);


/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export let patch = (url, data = {}) =>
  instance.patch(url, qs.stringify(data)).then(res => res.data).catch(err => err);


/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export let put = (url, data = {}) =>
  instance.put(url, qs.stringify(data)).then(res => res.data).catch(err => err);

/**
 * 封装all请求
 * @param urls
 * @returns {Promise}
 */
export let all = (urls = []) =>
  axios.all(urls.map(url => instance.get(url))).then(axios.spread((...res) => res.map(res => res.data))).catch(err => err);

