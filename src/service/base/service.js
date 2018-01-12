/**
 * Created by Administrator on 2018/1/7 0007.
 */
import base from '../config/base'
import axios from 'axios';
import {Message} from 'element-ui';

let serviceConfig = base.serviceConfig;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
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
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
)


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
  for (let key in data) {
    params.append(key, data[key]);
  }
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

