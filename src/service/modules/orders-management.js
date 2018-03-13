/**
 * Created by Administrator on 2018/1/20 0020.
 */
import * as service from '../base/service'

export default {
  //家属订单模板上传成功后将家属订单模板导入到服务端
  importPrisonerOrders: filePath =>
    service.get(`/prisoner_orders/processing`, filePath).then(res => res).catch(err => err),
  //上传订单模板文件到服务端
  // uploadTemplate: file =>
  //   service.postFile(`/prisoner_orders/upload`, file).then(res => res).catch(err => err)
}
