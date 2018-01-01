<template>
  <el-row id="families" :gutter="0">
    <!--选择显示页数和搜索框内容组件-->
    <select-and-search @sizeChange="sizeChange" @search="search" @searchingChange="searchingChange"></select-and-search>

    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="囚犯账户" name="first">
          <el-table
            :data="accounts"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="prisoner_number"
              label="囚号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="crimes"
              label="罪名">
            </el-table-column>
            <el-table-column
              prop="prison_area"
              label="监区">
            </el-table-column>
            <el-table-column
              label="账号余额">
              <template slot-scope="scope">
                {{scope.row.balance?scope.row.balance:'不存在'}}
              </template>
            </el-table-column>
            <el-table-column
              label="对应罪犯">
              <template slot-scope="scope">
                <el-button type="text" size="small"
                           @click="showAccountsDetail(scope.row)">
                  查看账户记录
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <!--分页组件-->
    <pagination :total="accountsTotal" :pageSize="pagination.length" :currentPage="pagination.draw"
                @currentChange="currentChange"></pagination>

    <!--家属信息弹出框-->
    <!--<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>-->

    <el-dialog title="服刑人员: 张三的账户详情" :visible.sync="dialogTableVisible">
      <el-table
        :data="account"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="account_money"
          label="操作金额">
        </el-table-column>
        <el-table-column
          prop="account_reason"
          label="操作原因">
        </el-table-column>
        <el-table-column
          prop="account_time"
          label="操作时间">
        </el-table-column>
      </el-table>
    </el-dialog>

  </el-row>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  import SelectAndSearch from '@/components/Select-And-Search/Select-And-Search'
  import Pagination from '@/components/Pagination/Pagination'

  export default {
    data() {
      return {
        breadcrumb: ['主页', '囚犯账户管理'],//面包屑数组
        tabNum: 'first',
        pagination: {
          length: 10,//每页显示记录条数
          draw: 1,//当前显示第几页
          start:0//从第几条记录开始
        },
        searching: {
          c: 'families',//搜索的模块类型
          value: ''//搜索的条件
        },
        dialogVisible: false,//弹出框的显示和隐藏
        agreeText: '同意',
        disagreeText: '不同意',
        authorization: {
          remarks: '',//授权评语
          status: ''//授权状态
        },
        dialogTableVisible: false,
        account: [{
          name: '张三',
          account_money: 100,
          account_reason: '买吃的',
          account_time: '2017-12-26'
        }]
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        accounts: 'accounts',
        accountsTotal:'accountsTotal'//总共记录条数
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置家属注册页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getAccounts: 'getAccounts',//获取家属注册列表
        searchAction: 'searchAction',//获取带搜索条件的家属注册列表
      }),
      //每页条数发生变化时执行的方法
      sizeChange(length){
        this.pagination.draw = 1;
        this.change({'length': length});
      },
      //当前页发生变化时执行的方法
      currentChange(draw){
        this.change({'draw': draw});
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
          this.getFamilies(Object.assign(this.pagination, changeParams));
        }
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.draw = 1;
        this.searchAction(Object.assign(this.searching, this.pagination, {value: searching}));
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching.value = searching;
      },
      //显示家属详细信息
      showAccountsDetail(row){
        this.dialogTableVisible = true;
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getAccounts(this.pagination);
    },
    components: {
      SelectAndSearch,
      Pagination
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #families
    padding: 20px 1% 0 1%
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-dialog
      width: 45%
      .el-dialog__body
        img
          float: left
          width: 150px
          height: 150px
</style>
