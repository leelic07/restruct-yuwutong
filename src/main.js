// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from '@/views/common/Layout'
// import App from '@/app'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import filters from './filters'
import '@/assets/fonts/iconfont.css'
import '@/assets/icons/iconfont.css'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
import components from '@/components'
import '@/assets/css/main.css'
Vue.use(ElementUI)

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

// Vue.prototype._$baseUrl = 'https://www.yuwugongkai.com'

// Vue.prototype._$agency = 'http://10.10.10.2:8081/ywgk'

Vue.prototype._$agency = 'http://10.10.10.2:1339'

// Vue.prototype._$agency = 'http://10.10.10.127:8081';

// Vue.prototype._$agency = 'http://localhost:3000';

// Vue.prototype._$agency = 'http://localhost:1339'

// 声明过滤器
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))

// 声明公共功能组件
Object.keys(components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`m${ name }`, components[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
