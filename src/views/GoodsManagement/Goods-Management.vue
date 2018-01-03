<template>
  <el-row id="goods-management" :gutter="0">
    <el-row :gutter="0" v-if="!isGoodsEditor">
      <!--选择显示页数和搜索框内容组件-->
      <select-and-search @sizeChange="sizeChange" @search="search"
                         @searchingChange="searchingChange"></select-and-search>

      <!--标签页表格-->
      <el-col :span="24">
        <el-tabs v-model="tabNum" type="card">
          <el-tab-pane label="商品管理" name="first">
            <el-table
              :data="goods"
              border
              stripe
              style="width: 100%">
              <el-table-column
                label="商品图片">
                <template slot-scope="scope">
                  <img :src="scope.row.avatar_url" alt="">
                </template>
              </el-table-column>
              <el-table-column
                prop="title"
                label="商品名字">
              </el-table-column>
              <el-table-column
                label="商品简介">
                <template slot-scope="scope">
                  <el-button size="mini" plain @click="showGoodsIntroduction(scope.row.description)">简介详情</el-button>
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
                label="商品类部"
              >
                <template slot-scope="scope">
                  {{scope.row.category_id}}
                </template>
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
      <pagination :total="goodsTotal" :pageSize="pagination.limit" :currentPage="pagination.page"
                  @currentChange="currentChange"></pagination>

      <!--家属信息授权弹出框-->
      <el-dialog title="简介详情" :visible.sync="dialogVisible">
        <el-row :gutter="0">
          <el-col :span="24">
            <p>{{goodsDescription}}</p>
          </el-col>
        </el-row>

        <el-row :gutter="0">
          <el-col :span="20" :offset="2">
            <el-button type="danger">关闭</el-button>
          </el-col>
        </el-row>
      </el-dialog>

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
        breadcrumb: ['主页', '商品管理'],//面包屑数组
        tabNum: 'first',
        total: 1000,//总共记录条数
        pagination: {
          limit: 10,//每页显示记录条数
          page: 1//当前显示第几页
        },
        searching: {
          c: 'goods',//搜索的模块类型
          value: ''//搜索的条件
        },
        dialogVisible: false,//弹出框的显示和隐藏
        isGoodsEditor: false,//是否是商品信息列表页面
        goodsDescription:''//商品简介信息
      }
    },
    watch:{
      //从商品管理页面跳转到商品编辑页面使商品列表显示
      $route(to, from) {
        if (to.path == '/goods_management') {
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
        goods: 'goods',
        goodsTotal: 'goodsTotal',
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置家属注册页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getGoods: 'getGoods',//获取家属注册列表
        searchAction: 'searchAction',//获取带搜索条件的家属注册列表
      }),
      //每页条数发生变化时执行的方法
      sizeChange(limit){
        this.pagination.page = 1;
        this.change({'limit': limit});
      },
      //当前页发生变化时执行的方法
      currentChange(page){
        this.change({'page': page});
      },
      //根据是否有搜索内容调用不同的接口
      change(changeParams){
        if (this.searching.value != '') {
          this.searchAction(Object.assign(this.pagination, this.searching, changeParams));
        } else {
          if (this.pagination.hasOwnProperty('value')) {
            delete this.pagination.c;
            delete this.pagination.value;
          }
          this.getGoods(Object.assign(this.pagination, changeParams));
        }
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.page = 1;
        this.searchAction(Object.assign(this.searching, this.pagination, {value: searching}));
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching.value = searching;
      },
      //点击简介详情实行的方法
      showGoodsIntroduction(description){
        this.goodsDescription = description;
        this.dialogVisible = true;
      },
      //点击删除时执行的方法
      handleDelete(index, row){
        this.$confirm('确定删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message('删除成功')
        })
      },
      //点击编辑时执行的方法
      handleEdit(index, row){
        this.$router.push({
          path:`/goods_management/${row.id}`
        });
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getGoods(this.pagination);
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
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-table__row
      .cell
        .el-button
          /*float: left*/
          &:nth-child(2)
            margin-left: 0
            margin-top: 15px
    /*.el-dialog__body*/
      /*.el-col-24*/
        /*margin-top: 5px*/
        /*.el-button*/
          /*width: 100%*/
</style>
