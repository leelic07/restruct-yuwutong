<template>
  <el-row id="meeting" :gutter="0">
    <!--选择显示页数和搜索框内容组件-->
    <select-and-search @sizeChange="sizeChange" @search="search" @searchingChange="searchingChange"></select-and-search>

    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="会见申请" name="first">
          <el-table
            :data="meetings"
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
              prop="application_date"
              label="申请时间">
            </el-table-column>
            <el-table-column
              prop="meeting_time"
              label="预约时间">
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
              prop="terminal_number"
              label="终端号">
            </el-table-column>
            <el-table-column :class="{'application-status':true}"
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
                <el-button v-else-if="scope.row.status == 'PASSED'"
                           size="mini"
                           @click="handleWithdraw(scope.$index, scope.row)">撤回
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <!--分页组件-->
    <pagination :total="meetingsTotal" :pageSize="pagination.limit" :currentPage="pagination.page + 1"
                @currentChange="currentChange"></pagination>

    <!--家属信息授权弹出框-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <!--点击授权时显示的对话框内容-->
      <el-row :gutter="0" v-if="!isWithdraw">
        <el-row :gutter="0" v-show="authMeetingsResult.code">
          <el-col :span="24">
            <el-alert v-if="authMeetingsResult.code == 200"
                      title="授权成功"
                      type="success"
                      :description="authMeetingsResult.msg"
                      show-icon
                      :closable="false">
            </el-alert>
          </el-col>
        </el-row>

        <el-row :gutter="0" v-show="!authMeetingsResult.code">
          <el-col :span="24" v-if="showRemarks" class="refuse-reason">
            <el-col :span="24">
              <p>请选择驳回原因</p>
            </el-col>
            <el-select v-model="authorization.remarks">
              <el-option v-for="remark,index in remarks"
                         :value="remark"
                         :label="remark"
                         :key="index"
              ></el-option>
            </el-select>
          </el-col>
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

      </el-row>

      <!--点击撤回时显示的对话框内容-->
      <el-row :gutter="0" v-if="isWithdraw">
        <el-row :gutter="0">
          <el-input type="textarea"
                    autosize
                    placeholder="请输入撤回理由"
                    v-model="authorization.remarks"
          ></el-input>
        </el-row>

        <el-row :gutter="0" class="btn-box">
          <el-button type="danger" @click="dialogVisible = false">取消</el-button>
          <el-button @click="confirmWithdraw()">确定</el-button>
        </el-row>
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
        breadcrumb: ['主页', '会见申请管理'],//面包屑数组
        tabNum: 'first',
        pagination: {
          limit: 10,//每页显示记录条数
          page: 0//当前显示第几页
        },
        searching: {
          c: 'meetings',//搜索的模块类型
          value: ''//搜索的条件
        },
        dialogVisible: false,//弹出框的显示和隐藏
        agreeText: '同意',
        disagreeText: '不同意',
        authorization: {
          remarks: '',//拒绝理由
          status: ''//授权状态
        },
        isWithdraw: false,//是否是撤回执行的方法
        dialogTitle: '',//对话框的标题文字
        showRemarks: false,//是否显示拒绝家属会见理由
        authorizeId: '',//授权家属会见id
        callbackId: ''//撤回家属会见id
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        meetings: 'meetings',//获取家属会见的数据列表
        meetingsTotal: 'meetingsTotal',//获取家属会见的总记录数
        authMeetingsResult: 'authMeetingsResult',//获取家属会见的授权结果
        remarks: 'remarks'//获取家属会见拒绝理由
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',
        setAuthMeetingsResult: 'setAuthMeetingsResult'//设置家属注册授权信息
      }),
      //映射actions方法
      ...mapActions({
        getMeetings: 'getMeetings',//获取家属注册列表
        searchAction: 'searchAction',//获取带搜索条件的家属注册列表
        authorizeMeetings: 'authorizeMeetings',//家属注册信息授权
      }),
      //每页条数发生变化时执行的方法
      sizeChange(limit){
        this.pagination.page = 0;
        this.pagination.limit = limit;
        this.change();
      },
      //当前页发生变化时执行的方法
      currentChange(page){
        this.pagination.page = page - 1;
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
          this.getMeetings(Object.assign(this.pagination));
        }
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.page = 0;
        this.searchAction(Object.assign(this.searching, this.pagination, {value: searching}));
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching.value = searching;
      },
      //点击授权时执行的方法
      handleAuthorization(index, row){
        this.showRemarks = false;
        this.dialogTitle = '授权';
        this.authorization.remarks = '您的身份信息错误';
        this.isWithdraw = false;
        this.dialogVisible = true;
        this.authorizeId = row.id;//获取授权消息的id
        this.agreeText = '同意';
        this.disagreeText = '不同意';
        this.setAuthMeetingsResult({});//重置家属会见授权结果
      },
      //点击撤回执行的方法
      handleWithdraw(index, row){
        this.dialogTitle = '撤回';
        this.authorization.remarks = '';
        this.authorizeId = row.id;//获取撤回消息的id
        this.isWithdraw = true;
        this.dialogVisible = true;
      },
      confirmWithdraw(){
        this.authorizeRegistrations(Object.assign(this.authorization, {id: this.authorizeId, status: 'DENIED'}));
      },
      //点击同意或者确定申请通过执行的方法
      agreeAuthorization(agreeText){
        if (agreeText === '同意') {
          this.agreeText = '确定申请通过？';
          this.disagreeText = '返回';
        } else {
          if (agreeText === '提交')
            this.authorization.status = 'DENIED';
          else {
            this.authorization.remarks = '';
            this.authorization.status = 'PASSED';
          }
          this.authorizeRegistrations(Object.assign(this.authorization, {id: this.authorizeId}));
        }
      },
      //点击不同意或者返回执行的方法
      disagreeAuthorization(disagreeText){
        if (disagreeText === '返回') {
          this.showRemarks = false;
          this.disagreeText = '不同意';
          this.agreeText = '同意';
        } else {
          this.showRemarks = true;
          this.agreeText = '提交';
          this.disagreeText = '返回';
        }
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getMeetings(this.pagination);
    },
    components: {
      SelectAndSearch,
      Pagination
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #meeting
    padding: 20px 1% 0 1%
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-table__row
      > td:nth-child(9)
        color: orange
        font-weight: bold
    & /deep/ .cell .el-button--default
      float: left
      color: #3C8DBC
      font-weight: bold
    .el-dialog__body
      .el-row
        &.btn-box
          margin-top: 20px
          .el-button
            float: right
            margin-left: 3%
        img
          float: left
          width: 150px
          height: 150px
        .el-col-24
          &.refuse-reason
            margin-bottom: 10px
          margin-top: 5px
          .el-select, .el-button
            width: 100%
</style>
