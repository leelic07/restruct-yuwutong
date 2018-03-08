<template>
  <el-row id="families" :gutter="0">
    <!--选择显示页数和搜索框内容组件-->
    <select-and-search :c="c" :searching="searching" @sizeChange="sizeChange" @search="search"
                       @searchingChange="searchingChange"></select-and-search>
    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="家属信息" name="first">
          <el-table
            :data="families"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="uuid"
              label="身份证号">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话">
            </el-table-column>
            <el-table-column
              prop="relationship"
              label="关系">
            </el-table-column>
            <el-table-column
              label="对应罪犯">
              <template slot-scope="scope">
                <el-button type="text" size="small"
                           @click="showPrisonerDetail(scope.row.prisoners)">
                  {{scope.row.prisoners.name}}
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <!--分页组件-->
    <pagination :total="familiesTotal" :pageSize="pagination.rows" :currentPage="pagination.page"
                @currentChange="currentChange"></pagination>
    <!--家属信息弹出框-->
    <el-dialog title="囚犯信息" :visible.sync="dialogTableVisible">
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">姓名：</label>
          <span v-text="prisoner.name"></span>
        </el-col>
        <el-col :span="12">
          <label for="">罪名：</label>
          <span v-text="prisoner.crimes"></span>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">囚号：</label>
          <span v-text="prisoner.crimes"></span>
        </el-col>
        <el-col :span="12">
          <label for="">监区：</label>
          <span v-text="prisoner.prisonArea"></span>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">性别：</label>
          <span>{{prisoner.gender}}</span>
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
        breadcrumb: ['主页', '家属信息管理'],//面包屑数组
        tabNum: 'first',
        pagination: {
          rows: 10,//每页显示记录条数
          page: 1//当前显示第几页
        },
        c: 'families',//页面模块类型
        searching: {
          name: '',//搜索的模块类型
          uuid: ''//搜索的条件
        },
        dialogVisible: false,//弹出框的显示和隐藏
        agreeText: '同意',
        disagreeText: '不同意',
        authorization: {
          remarks: '',//授权评语
          status: ''//授权状态
        },
        dialogTableVisible: false,
        prisoner: {}//对应罪犯详情信息
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        families: 'families',
        familiesTotal: 'familiesTotal'//总共记录条数
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置家属注册页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getFamilies: 'getFamilies',//获取家属注册列表
        searchAction: 'searchAction',//获取带搜索条件的家属注册列表
      }),
      //每页条数发生变化时执行的方法
      sizeChange(rows){
        this.pagination.page = 1;
        this.pagination.rows = rows;
        this.change();
      },
      //当前页发生变化时执行的方法
      currentChange(page){
        this.pagination.page = page;
        this.change();
      },
      //根据是否有搜索内容调用不同的接口
      change(){
        this.getFamilies({...this.searching, ...this.pagination});
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.page = 1;
        this.searching = searching;
        this.getFamilies({...this.searching, ...this.pagination});
      },
      //监听搜索框的内容变化{
      searchingChange(searching){
        this.searching = searching;
      },
      //显示家属详细信息
      showPrisonerDetail(prisoner){
        this.dialogTableVisible = true;
        this.prisoner = prisoner;
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getFamilies({...this.searching, ...this.pagination});
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
