<template>
  <el-row id="terminals" :gutter="0">
    <el-row :gutter="0" v-if="!isTerminals">
      <!--添加终端信息-->
      <el-col :span="24">
        <el-button size="small" type="primary" plain @click="newTerminal()">添加终端信息</el-button>
      </el-col>
      <!--选择显示页数和搜索框内容组件-->
      <select-and-search @sizeChange="sizeChange" @search="search"
                         @searchingChange="searchingChange"></select-and-search>
      <!--标签页表格-->
      <el-col :span="24">
        <el-tabs v-model="tabNum" type="card">
          <el-tab-pane label="终端管理" name="first">
            <el-table
              :data="terminals"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="terminal_number"
                label="终端号">
              </el-table-column>
              <el-table-column
                prop="room_number"
                label="会议室号">
              </el-table-column>
              <el-table-column
                prop="host_password"
                label="主持人密码">
              </el-table-column>
              <el-table-column
                prop="metting_password"
                label="参与密码">
              </el-table-column>
              <el-table-column
                label="创建时间">
                <template slot-scope="scope">
                  {{scope.row.created_at}}
                </template>
              </el-table-column>
              <el-table-column
                label="最后更新时间">
                <template slot-scope="scope">
                  {{scope.row.updated_at}}
                </template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="editTerminal(scope.row.id)">编辑</el-button>
                  <!--<el-button type="danger" size="mini" @click="deleteTerminal(scope.row.id)">删除</el-button>-->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <!--分页组件-->
      <pagination :total="terminalsTotal" :pageSize="pagination.length" :currentPage="pagination.draw"
                  @currentChange="currentChange"></pagination>
    </el-row>
    <!--终端管理页面子路由-->
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
        breadcrumb: ['主页', '终端管理'],//面包屑数组
        tabNum: 'first',
        pagination: {
          length: 10,//每页显示记录条数
          draw: 1,//当前显示第几页
          start: 0
        },
        searching: {
          c: 'terminals',//搜索的模块类型
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
        isTerminals: false
      }
    },
    watch: {
      $route(to){
        if (to.path === '/terminals') {
          this.isTerminals = false;
          this.breadCrumb(this.breadcrumb);
        } else this.isTerminals = true;
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        terminals: 'terminals',//获取终端列表
        terminalsTotal: 'terminalsTotal'//总共记录条数
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置家属注册页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getTerminals: 'getTerminals',//获取终端列表
        searchAction: 'searchAction',//获取带搜索条件的终端列表
        deleteTerminalById: 'deleteTerminalById'//根据id删除终端信息
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
        if (this.searching.value !== '') {
          this.searchAction(Object.assign(this.pagination, this.searching, changeParams));
        } else {
          if (this.pagination.hasOwnProperty('value')) {
            delete this.pagination.c;
            delete this.pagination.value;
          }
          this.getTerminals(Object.assign(this.pagination, changeParams));
        }
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.draw = 1;
        this.searchAction(Object.assign(this.searching, this.pagination));
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching.value = searching;
      },
      //添加终端信息
      newTerminal(){
        this.$router.push({
          path: '/terminals/new'
        });
      },
      //编辑终端信息
      editTerminal(id){
        this.$router.push({
          path: `/terminals/${id}/edit`
        });
      },
      //删除终端信息
      deleteTerminal(id){
        this.$confirm('确定删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteTerminalById(id);
        });
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getTerminals(this.pagination);
    },
    components: {
      SelectAndSearch,
      Pagination
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #terminals
    padding: 20px 1% 0 1%
    > .el-row
      > .el-col
        &:first-child
          .el-button
            float: right
            margin-bottom: 10px
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
      .el-table__row
        td:nth-child(7)
          .el-button
            /*float: left*/
            /*margin-left: 6%*/
            display: block
            margin: 0 auto
    & /deep/ .el-dialog
      width: 45%
      .el-dialog__body
        img
          float: left
          width: 150px
          height: 150px
</style>
