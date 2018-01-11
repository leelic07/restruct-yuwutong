/**
 * Created by Administrator on 2018/1/7 0007.
 */
import Qs from 'qs'

export default {
  serviceConfig: {
    //请求地址
    url: '/',
    //请求方式
    method: 'get',
    //基础url前缀
    baseURL: 'https://www.fushuile.com/',
    //请求发送之前对出参进行处理
    transformRequest: [(data) => {
      return data;
    }],
    //请求发送之后对入参进行处理
    transformResponse: [(data) => {
      return data;
    }],
    //设置请求头
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    //post 请求参数
    data: {},
    //get 请求参数
    params: {},
    //设置请求超时时间
    // timeout: 100000,
    //请求数据返回类型
    responseType: 'json',
    //设置跨域请求的令牌
    withCredentials:true
  }
}
