/**
 * Created by Administrator on 2018/1/4/004.
 */
import axios from 'axios'

export default {
  login({commit},regs){
    delete regs.checked;
    axios.post('/login',regs).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}
