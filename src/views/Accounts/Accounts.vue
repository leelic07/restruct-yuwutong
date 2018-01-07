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
                           @click="showAccountsDetail(scope.row.account_id,scope.row.name)">
                  查看账户记录
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <!--分页组件-->
    <pagination :total="accountsTotal" :pageSize="pagination.limit" :currentPage="pagination.page + 1"
                @currentChange="currentChange"></pagination>

    <!--家属信息弹出框-->

    <el-dialog :title="accountName" :visible.sync="dialogTableVisible">
      <el-table
        :data="accountDetail"
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
          limit: 10,//每页显示记录条数
          page: 0,//当前显示第几页
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
        accountName:''//查看账户详情对应账户名称
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        accounts: 'accounts',
        accountsTotal: 'accountsTotal',//总共记录条数
        accountDetail:'accountDetail'//账户详情信息
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置囚犯账户页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getAccounts: 'getAccounts',//获取囚犯账户列表
        searchAction: 'searchAction',//获取带搜索条件的囚犯账户列表
        getAccountDetail:'getAccountDetail'//获取囚犯账户详情信息
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
        if (this.searching.value !== '') {
          this.searchAction(Object.assign(this.searching, this.pagination));
        } else {
          if (this.pagination.hasOwnProperty('value')) {
            delete this.pagination.c;
            delete this.pagination.value;
          }
          this.getAccounts(Object.assign(this.pagination));
        }
      },
      //点击搜索时执行的方法
      search(searching){
        this.$set(this.pagination, 'page', 0);
        this.searchAction(Object.assign(this.searching, this.pagination, {value: searching}));
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching.value = searching;
      },
      //显示囚犯账户详情信息
      showAccountsDetail(account_id,accountName){
        this.dialogTableVisible = true;
        this.accountName = `服刑人员：${accountName} 的账户详情`;
        this.getAccountDetail(account_id);
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取囚犯账户信息列表
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
