import FamilyOrders from '@/views/FamilyOrders/Family-Orders'
import OrderDetail from '@/views/FamilyOrders/Order-Detail'

export default [{
  path: '/orders',
  name: 'FamilyOrders',
  component: FamilyOrders,
  children: [{
    path: '/orders/:id',
    name: 'OrderDetail',
    component: OrderDetail
  }]
}]
