import provinceList from '@/views/PlaceManagement/Province-List'
import provinceAdd from '@/views/PlaceManagement/Province-Add'
import cityList from '@/views/PlaceManagement/City-List'
import cityAdd from '@/views/PlaceManagement/City-Add'

export default [{
  path: '/province/list',
  name: '省份列表',
  component: provinceList
}, {
  path: '/province/add',
  name: '新增省份',
  component: provinceAdd
}, {
  path: '/city/list',
  name: '城市列表',
  component: cityList
}, {
  path: '/city/add',
  name: '新增城市',
  component: cityAdd
}]
