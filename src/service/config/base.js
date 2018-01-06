/**
 * Created by Administrator on 2018/1/7 0007.
 */
export default {
  serviceConfig:{
    url:'',
    method:'get',
    baseUrl:'https://www.fushuile.com/',
    transformRequest:[(data) => {
      return data;
    }],
    transformResponse:[(data) => {
      return JSON.parse(data);
    }],
    headers:{'X-Requested-With':'XMLHttpRequest'},
    data:{},
    params:{},
    timeout:100000,
    responseType:'json'
  }
}
