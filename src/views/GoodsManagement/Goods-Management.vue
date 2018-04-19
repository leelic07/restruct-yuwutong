<template>
  <el-row id="goods-management" :gutter="0">
    <el-row :gutter="0" v-if="!isGoodsEditor">
      <el-row class="add-goods" v-if="true">
        <el-col :span="3" :offset="21">
          <el-button type="primary" @click="newGoods">添加商品信息</el-button>
        </el-col>
      </el-row>
      <!--选择显示页数和搜索框内容组件-->
      <select-and-search :c="c" :searching="searching" @sizeChange="sizeChange" @search="search"
                         @searchingChange="searchingChange"></select-and-search>
      <!--标签页表格-->
      <el-col :span="24">
        <el-tabs value="first" type="card">
          <el-tab-pane label="商品管理" name="first">
            <el-table
              :data="goods"
              border
              stripe
              style="width: 100%">
              <el-table-column
                label="商品图片">
                <template slot-scope="scope">
                  <!--<img :src="_$baseUrl + '/' + scope.row.avatar_url" alt="">-->
                  <img :src="_$agency + scope.row.avatarUrl" alt="">
                  <!--<img src="../../assets/images/default.jpg" alt="">-->
                </template>
              </el-table-column>
              <el-table-column
                prop="title"
                label="商品名字">
              </el-table-column>
              <el-table-column
                label="商品简介">
                <template slot-scope="scope">
                  <el-popover
                    placement="top"
                    title="简介详情"
                    width="200"
                    trigger="click"
                    :content="scope.row.description">
                    <el-button size="mini" plain slot="reference">简介详情</el-button>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="barcode"
                label="商品条码">
              </el-table-column>
              <el-table-column
                prop="price"
                label="单价">
              </el-table-column>
              <el-table-column
                prop="unit"
                label="单位">
              </el-table-column>
              <el-table-column
                prop="factory"
                label="生产厂家"
              ></el-table-column>
              <el-table-column
                label="商品类部">
                <template slot-scope="scope">
                  {{scope.row.categoryId | goodsCategory}}
                </template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.row.id)"
                    type="primary">
                    编辑
                  </el-button>
                  <el-button
                    size="mini"
                    @click="handleDelete(scope.row.id)"
                    type="danger">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <!--分页组件-->
      <pagination :total="goodsTotal" :pageSize="pagination.rows" :currentPage="pagination.page"
                  @currentChange="currentChange"></pagination>
    </el-row>
    <!--子路由-->
    <router-view></router-view>
  </el-row>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import SelectAndSearch from '@/components/Select-And-Search/Select-And-Search'
import Pagination from '@/components/Pagination/Pagination'
export default {
  data() {
    return {
      breadcrumb: ['主页', '商品信息管理'], // 面包屑数组
      tabNum: 'first',
      pagination: {
        rows: 10, // 每页显示记录条数
        page: 1 // 当前显示第几页
      },
      c: 'goods',
      searching: {
        title: '' // 商品名称
      },
      isGoodsEditor: false, // 是否是商品信息列表页面
      goodsDescription: '' // 商品简介信息
    }
  },
  watch: {
    // 从商品管理页面跳转到商品编辑页面使商品列表显示
    $route(to) {
      if (to.path === '/goods_management') {
        this.isGoodsEditor = false
        this.breadCrumb(this.breadcrumb) // 路由发生改变重新发送面包屑信息
      }
      else this.isGoodsEditor = true
    }
  },
  computed: {
    // 映射getters方法获取state状态
    ...mapGetters({
      goods: 'goods', // 获取商品列表信息
      goodsTotal: 'goodsTotal' // 获取商品列表的记录数
    })
  },
  methods: {
    // 映射actions方法
    ...mapActions({
      getGoods: 'getGoods', // 获取商品列表
      deleteGoods: 'deleteGoods' // 删除指定商品
    }),
    // 映射mutations方法
    ...mapMutations({
      breadCrumb: 'breadCrumb', // 设置商品管理页面的面包屑信息
      searchGoods: 'searchGoods' // 获取带搜索条件的商品列表
    }),
    // 每页条数发生变化时执行的方法
    sizeChange(rows) {
      this.pagination.page = 1
      this.pagination.rows = rows
      this.change()
    },
    // 当前页发生变化时执行的方法
    currentChange(page) {
      this.pagination.page = page
      this.change()
    },
    // 根据是否有搜索内容调用不同的接口
    change() {
      this.getGoods({ ...this.searching, ...this.pagination })
    },
    // 点击搜索时执行的方法
    search(searching) {
      this.pagination.page = 1
      this.searching = searching
      this.getGoods({ ...this.searching, ...this.pagination })
    },
    // 监听搜索框的内容变化
    searchingChange(searching) {
      this.searching = searching
    },
    // 点击删除时执行的方法
    handleDelete(id) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteGoods(id)
      }).catch(err => console.log(err))
    },
    // 点击编辑时执行的方法
    handleEdit(id) {
      this.$router.push({
        path: `/goods_management/edit/${ id }`
      })
    },
    // 点击添加商品信息按钮执行的方法
    newGoods() {
      this.$router.push({
        path: '/goods_management/new'
      })
    }
  },
  mounted() {
    // 将面包屑数组传递给Content组件
    this.breadCrumb(this.breadcrumb)
    // 获取家属注册信息列表
    this.getGoods(this.pagination)
  },
  components: {
    SelectAndSearch,
    Pagination
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #goods-management
    padding: 20px 1% 0 1%
    .add-goods
      margin-bottom: 15px
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-table__row
      td
        &:first-child
          .cell
            img
              width: 80px
              height: 80px
        &:last-child
          .cell
            .el-button
              &:nth-child(2)
                margin-left: 0
                margin-top: 15px

    .el-dialog__body
      > .el-row
        &:nth-child(2)
          .el-col-24
            margin-top: 25px
          .el-button
            width: 100%
</style>
