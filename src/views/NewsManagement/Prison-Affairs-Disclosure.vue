<template>
  <el-row id="prison-affairs-disclosure" :gutter="0">
    <el-row :gutter="0" v-if="!isGoodsEditor">
      <!--选择显示页数和搜索框内容组件-->
      <select-and-search @sizeChange="sizeChange" @search="search"
                         @searchingChange="searchingChange"></select-and-search>

      <!--标签页表格-->
      <el-col :span="24">
        <el-tabs v-model="tabNum" type="card">
          <el-tab-pane label="狱务公开" name="first">
            <el-table
              :data="goods"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="title"
                label="新闻标题">
              </el-table-column>
              <el-table-column
                label="新闻图片">
                <template slot-scope="scope">
                  <img :src="_$baseUrl + scope.row.avatar_url" alt="">
                </template>
              </el-table-column>
              <el-table-column
                prop="title"
                label="焦点">
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleDelete(scope.$index, scope.row)"
                    type="danger"
                  >
                    删除
                  </el-button>
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index,scope.row)"
                    type="primary"
                  >
                    编辑
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <!--分页组件-->
      <pagination :total="goodsTotal" :pageSize="pagination.limit" :currentPage="pagination.page + 1"
                  @currentChange="currentChange"></pagination>
    </el-row>

    <!--子路由-->
    <router-view></router-view>

  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  import SelectAndSearch from '@/components/Select-And-Search/Select-And-Search'
  import Pagination from '@/components/Pagination/Pagination'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '商品信息管理'],//面包屑数组
        tabNum: 'first',
        total: 1000,//总共记录条数
        pagination: {
          limit: 10,//每页显示记录条数
          page: 0//当前显示第几页
        },
        searching: {
          c: 'goods',//搜索的模块类型
          value: ''//搜索的条件
        },
        isGoodsEditor: false,//是否是商品信息列表页面
        goodsDescription: ''//商品简介信息
      }
    },
    watch: {
      //从商品管理页面跳转到商品编辑页面使商品列表显示
      $route(to) {
        if (to.path === '/goods_management') {
          this.isGoodsEditor = false;
          this.breadCrumb(this.breadcrumb);//路由发生改变重新发送面包屑信息
        } else {
          this.isGoodsEditor = true;
        }
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        goods: 'goods',//获取商品列表信息
        goodsTotal: 'goodsTotal',//获取商品列表的记录数
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品管理页面的面包屑信息
        getPrisonAffairsDisclosure: 'getPrisonAffairsDisclosure'//获取狱务公开信息
      }),
      //映射actions方法
      ...mapActions({
        getGoods: 'getGoods',//获取商品列表
        searchGoods: 'searchGoods',//获取带搜索条件的商品列表
      }),
      //每页条数发生变化时执行的方法
      sizeChange(limit){
        this.$set(this.pagination, 'page', 0);
        this.$set(this.pagination, 'limit', limit);
        this.change();
      },
      //当前页发生变化时执行的方法
      currentChange(page){
        this.$set(this.pagination, 'page', page - 1);
        this.change();
      },
      //根据是否有搜索内容调用不同的接口
      change(){
        this.searchGoods(Object.assign(this.searching, this.pagination));
      },
      //点击搜索时执行的方法
      search(searching){
        this.$set(this.pagination, 'page', 0);
        this.searchGoods(Object.assign(this.searching, this.pagination, {value: searching}));
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching.value = searching;
      },
      //点击删除时执行的方法
      handleDelete(index, row){
        this.$confirm('确定删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
      },
      //点击编辑时执行的方法
      handleEdit(index, row){
        this.$router.push({
          path: `/goods_management/${row.id}`
        });
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getGoods(this.pagination);
      //获取狱务公开信息
      this.getPrisonAffairsDisclosure();
    },
    components: {
      SelectAndSearch,
      Pagination
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #prison-affairs-disclosure
    padding: 20px 1% 0 1%
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-table__row
      td
        &:nth-child(2)
          .cell
            img
              width: 80px
              height: 80px
        &:last-child
          .cell
            .el-button
              &:first-child
                margin-left: 23%
              &:nth-child(2)
                margin-left: 10%
    .el-dialog__body
      > .el-row
        &:nth-child(2)
          .el-col-24
            margin-top: 25px
          .el-button
            width: 100%
</style>
