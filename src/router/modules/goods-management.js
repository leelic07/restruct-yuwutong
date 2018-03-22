import GoodsManagement from '@/views/GoodsManagement/Goods-Management'
import GoodsEditor from '@/views/GoodsManagement/Goods-Editor'
import GoodsNew from '@/views/GoodsManagement/Goods-New'

export default [{
  path: '/goods_management',
  name: 'GoodsManagement',
  component: GoodsManagement,
  children: [{
    path: '/goods_management/edit/:id',
    name: 'GoodsEditor',
    component: GoodsEditor
  }, {
    path: '/goods_management/new',
    name: 'GoodsNew',
    component: GoodsNew
  }]
}]
