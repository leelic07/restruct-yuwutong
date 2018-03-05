/**
 * Created by Administrator on 2018/1/26 0026.
 */
import router from '@/router'

export default {
  //点击确定退出时执行的方法
  logout(state){
    // for (let key in sessionStorage)
    //   sessionStorage[key] = 'undefined';//清楚sessionStorage里面的数据
    //退出登录后将页面跳转到登录页面
    router.push({
      path: '/login'
    });
  }
}
