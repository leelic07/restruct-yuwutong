// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from '@/components/Layout/Layout'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'
import filters from './filters'

Vue.use(ElementUI);

Vue.config.productionTip = false;

// axios.defaults.baseURL = 'https://www.fushuile.com/';

// axios.defaults.baseURL = 'http://10.10.10.152:3000/';

axios.defaults.baseURL = 'http://10.10.10.135:3000/';


axios.defaults.withCredentials = true;

Vue.prototype.axios = axios;

//声明过滤器
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
