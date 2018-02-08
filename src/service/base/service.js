/**
 * Created by Administrator on 2018/1/7 0007.
 */
import base from '../config/base';
import axios from 'axios';
import store from '@/store';
import router from '@/router';
import {Message} from 'element-ui';
import qs from 'qs';

const instance = axios.create(base);
let token = '';//用户登录时的token
//代理服务器
export let agency = '/ywt';
//处理服务端错误的方法
let handleError = (error) => {
  if (error.response !== undefined) {
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
        Message.error('出错了！');
        break;
    }
    return true;
  } else return false;
};
//服务端成功的处理
let handleSuccess = (res) => {
  if (res.data.code) {
    switch (res.data.code) {
      case 200:
        Message({
          type: 'success',
          message: res.data.msg ? res.data.msg : '查询数据成功'
        });
        break;
      default:
        Message.error(res.data.msg ? res.data.msg : '无法找到对应的信息');
        break;
    }
    return true;
  }
  return false;
};
//http request 拦截器
instance.interceptors.request.use(
  config => {
    if (sessionStorage['token'])
      config.headers.common['Authorization'] = sessionStorage['token'];//每次发送请求是给请求头加上token
    else if (config.url !== `${agency}/authentication`) {//没有token提示‘先登录’再跳转到登录页面
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
    handleSuccess(response) || (response.errors && Message.error(response.errors[0]));
    //隐藏loading遮罩层
    store.commit('hideLoading');
    return response;
  },
  error => {
    if (handleError(error)) {
      //隐藏loading遮罩层
      store.commit('hideLoading');
      Promise.reject(error);
    }
  }
);
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export let get = (url, params = {}) =>
  instance.get(`${url}?jail_id=${sessionStorage['jail_id']}`, {params: params}).then(res => res.data).catch(err => err);
/**
 * 封装post请求
 * @param url
 * @param data
 * @param config
 * @returns {Promise}
 */
export let post = (url, data = {}, config = {}) =>
  instance.post(`${url}?jail_id=${sessionStorage['jail_id']}`, qs.stringify(data), config).then(res => res.data).catch(err => err);
// instance.post(url, qs.stringify(data), config).then(res => res.data).catch(err => err);
/**
 * 封装post文件请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export let postFile = (url, data = {}) => {
  data.toString() !== {}.toString() && data.append('jail_id', sessionStorage['jail_id']);
  return instance.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => res.data).catch(err => err)
};
/**
 * 封装patch请求
 * @param url
 * @param data
 * @param config
 * @returns {Promise}
 */
export let patch = (url, data = {}, config = {}) =>
  instance.patch(`${url}?jail_id=${sessionStorage['jail_id']}`, qs.stringify(data), config).then(res => res.data).catch(err => err);
// instance.patch(url, qs.stringify(data), config).then(res => res.data).catch(err => err);
/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export let put = (url, data = {}) =>
  instance.put(url, qs.stringify(data)).then(res => res.data).catch(err => err);
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export let remove = (url, data = {}) =>
  instance.delete(`${url}?jail_id=${sessionStorage['jail_id']}`, qs.stringify(data)).then(res => res.data).catch(err => err);
/**
 * 封装all请求
 * @param urls
 * @returns {Promise}
 */
export let all = (urls = []) =>
  axios.all(urls.map(url => instance.get(`${url}?jail_id=${sessionStorage['jail_id']}`))).then(axios.spread((...res) => res.map(res => res.data))).catch(err => err);

