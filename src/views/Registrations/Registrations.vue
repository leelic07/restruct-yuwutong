<template>
  <el-row id="registration" :gutter="0">
    <!--选择显示页数和搜索框内容组件-->
    <select-and-search @sizeChange="sizeChange" @search="search" @searchingChange="searchingChange"></select-and-search>

    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="家属注册" name="first">
          <el-table
            :data="registrations"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话">
            </el-table-column>
            <el-table-column
              prop="uuid"
              label="身份证">
            </el-table-column>
            <el-table-column
              prop="created_at"
              label="申请时间">
            </el-table-column>
            <el-table-column
              prop="prisoner_number"
              label="囚号">
            </el-table-column>
            <el-table-column
              prop="relationship"
              label="关系">
            </el-table-column>
            <el-table-column
              prop="status"
              label="申请状态"
            >
              <template slot-scope="scope">
                {{scope.row.status | registrationsStatus}}
              </template>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button v-if="scope.row.status == 'PENDING'"
                           size="mini"
                           @click="handleAuthorization(scope.$index, scope.row)">授权
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <!--分页组件-->
    <pagination :total="registrationsTotal" :pageSize="pagination.limit" :currentPage="pagination.page + 1"
                @currentChange="currentChange"></pagination>

    <!--家属信息授权弹出框-->
    <el-dialog title="授权" :visible.sync="dialogVisible">
      <el-row :gutter="0" v-show="authRegistrationsResult.code">
        <el-col :span="24">
          <el-alert v-if="authRegistrationsResult.code == 200"
                    title="授权成功"
                    type="success"
                    :description="authRegistrationsResult.msg"
                    show-icon
                    :closable="false">
          </el-alert>
          <el-alert v-else
                    title="授权失败"
                    type="danger"
                    :description="authRegistrationsResult.msg"
                    show-icon
                    :closable="false">
          </el-alert>
        </el-col>
      </el-row>

      <el-row :gutter="0">
        <el-col :span="24">
          <el-col v-for="imgSrc,$index in uuidImages" :span="6" :offset="$index == 0?2:1" :key="$index">
            <img :src='imgSrc' alt="" @mouseover="amplifyImage($event)">
          </el-col>
        </el-col>
      </el-row>

      <el-row :gutter="0" v-show="!authRegistrationsResult.code">
        <el-col :span="24">
          <el-button plain @click="agreeAuthorization(agreeText)">{{agreeText}}</el-button>
        </el-col>
        <el-col :span="24">
          <el-button plain @click="disagreeAuthorization(disagreeText)">{{disagreeText}}</el-button>
        </el-col>
        <el-col :span="24">
          <el-button type="danger" plain @click="dialogVisible = false">关闭</el-button>
        </el-col>
      </el-row>

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
        breadcrumb: ['主页', '家属注册管理'],//面包屑数组
        tabNum: 'first',
        total: 1000,//总共记录条数
        pagination: {
          limit: 10,//每页显示记录条数
          page: 0//当前显示第几页
        },
        searching: {
          c: 'registrations',//搜索的模块类型
          value: ''//搜索的条件
        },
        dialogVisible: false,//弹出框的显示和隐藏
        agreeText: '同意',
        disagreeText: '不同意',
        authorization: {
          remarks: '',//授权评语
          status: ''//授权状态
        }
      }
    },
    watch: {},
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        registrations: 'registrations',
        uuidImages: 'uuidImages',
        registrationsTotal: 'registrationsTotal',
        authRegistrationsResult: 'authRegistrationsResult'
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置家属注册页面的面包屑信息
        setAuthRegistrationsResult: 'setAuthRegistrationsResult'//设置家属注册授权信息
      }),
      //映射actions方法
      ...mapActions({
        getRegistrations: 'getRegistrations',//获取家属注册列表
        getUuidImage: 'getUuidImage',//获取对应家属得照片地址
        searchAction: 'searchAction',//获取带搜索条件的家属注册列表
        authorizeRegistrations: 'authorizeRegistrations'//家属注册信息授权
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
          this.getRegistrations(this.pagination);
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
      //点击授权时执行的方法
      handleAuthorization(index, row) {
        this.dialogVisible = true;
        this.authorizeId = row.id;
        this.agreeText = '同意';
        this.disagreeText = '不同意';
        this.getUuidImage(row.id);
        this.setAuthRegistrationsResult({});
      },
      //点击同意或者确定申请通过执行的方法
      agreeAuthorization(agreeText){
        if (agreeText == '同意') {
          this.agreeText = '确定申请通过？';
          this.disagreeText = '返回';
        } else if (agreeText == '提交') {
          this.$set(this.authorization, 'status', 'DENIED');
          this.authorizeRegistrations(Object.assign(this.authorization, {id: this.authorizeId}));
        } else {
          this.$set(this.authorization, 'status', 'PASSED');
          this.authorizeRegistrations(Object.assign(this.authorization, {id: this.authorizeId}));
        }
      },
      //点击不同意或者返回执行的方法
      disagreeAuthorization(disagreeText){
        if (disagreeText == '返回') {
          this.disagreeText = '不同意';
          this.agreeText = '同意';
        } else {
          this.agreeText = '提交';
          this.disagreeText = '返回';
        }
      },
      //图片放大执行的方法
      amplifyImage(e){
//        console.log(e.target);
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getRegistrations(this.pagination);
    },
    components: {
      SelectAndSearch,
      Pagination
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #registration
    padding: 20px 1% 0 1%
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-table__row
      > td:nth-child(7)
        color: orange
        font-weight: bold
    & /deep/ .cell .el-button--default
      float: left
      color: #3C8DBC
      font-weight: bold
    .el-dialog__body
      img
        float: left
        width: 150px
        height: 150px
      .el-col-24
        margin-top: 5px
        .el-button
          width: 100%
</style>
