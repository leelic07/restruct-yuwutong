/**
 * Created by Administrator on 2018/1/7 0007.
 */
import base from '../config/base'
import axios from 'axios';
import store from '@/store';
import {Message} from 'element-ui';

let serviceConfig = base.serviceConfig;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.url !== config.baseURL + 'login')
    //加载loading遮罩层
      store.commit('showLoading');
    return config;
  },
  error => Promise.reject(err)
);


//http response 拦截器
axios.interceptors.response.use(
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
        default:
      }
    }
    //隐藏loading遮罩层
    store.commit('hideLoading');

    return response;
  },
  error => Promise.reject(error)
);


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export let get = (url, params = {}) =>
  axios(Object.assign(serviceConfig, {
    url: url,
    method: 'get',
    params: params
  })).then(res => res.data).catch(err => err);


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export let post = (url, data = {}) => {
  let params = new URLSearchParams();
  for (let key in data)
    params.append(key, data[key]);
  axios(Object.assign(serviceConfig, {
    url: url,
    method: 'post',
    data: params
  })).then(res => res.data).catch(err => err)
};

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export let patch = (url, data = {}) =>
  axios(Object.assign(serviceConfig, {
    url: url,
    method: 'patch',
    data: data
  })).then(res => res.data).catch(err => err);


/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export let put = (url, data = {}) =>
  axios(Object.assign(serviceConfig, {
    url: url,
    method: 'put',
    data: data
  })).then(res => res.data).catch(err => err);


/**
 * 封装all请求
 * @param urls
 * @returns {Promise}
 */

export let all = (urls = []) =>
  axios.all(urls.map(url => axios(Object.assign(serviceConfig, {
    url: url,
    method: 'get'
  })))).then(axios.spread((...res) => res.map(res => res.data))).catch(err => err);

