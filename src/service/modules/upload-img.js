/**
 * Created by Administrator on 2018/3/21/021.
 */
import axios from 'axios'

export default {
  // 上传图片的方法
  uploadImg: avatar =>
    axios.post('http://10.10.10.2:1339/avatars', avatar, {
      withCredentials: true,
      headers: {
        common: {
          Authorization: '523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a' // 上传图片的服务端token验证
        },
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data).catch(err => err)
}
