/**
 * Created by Administrator on 2018/1/19/019.
 */
import http from '@/service'

export default {
  uploadPrisoners({commit, regs}){
    http.uploadPrisoners();
  }
}
