<template>
  <el-row id="prisoners" :gutter="0">
    <!--选择显示页数和搜索框内容组件-->
    <select-and-search :c="c" @sizeChange="sizeChange" :searching="searching" @search="search"
                       @searchingChange="searchingChange"></select-and-search>
    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="服刑人员信息" name="first">
          <el-table
            :data="prisoners"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="prisonerNumber"
              label="囚号">
            </el-table-column>
            <el-table-column
              prop="crimes"
              label="罪名">
            </el-table-column>
            <el-table-column
              label="刑期起止">
              <template slot-scope="scope">
                {{scope.row.prisonTermStartedAt | Date}}/
                {{scope.row.prisonTermEndedAt | Date}}
              </template>
            </el-table-column>
            <el-table-column
              label="对应家属">
              <template slot-scope="scope">
                <el-button type="text" size="small" v-for="family in scope.row.families" :key="family.id"
                           @click="showFamilyDetail(family)">
                  {{family.name}}
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <!--分页组件-->
    <pagination :total="prisonersTotal" :pageSize="pagination.rows" :currentPage="pagination.page"
                @currentChange="currentChange"></pagination>

    <!--家属信息弹出框-->
    <!--<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>-->

    <el-dialog title="家属信息" :visible.sync="dialogTableVisible">
      <el-row :gutter="0">
        <el-col :span="12">
          <el-col :span="24">
            <label for="">姓名：</label>
            <span v-text="family.name"></span>
          </el-col>
          <el-col :span="24">
            <label for="">电话：</label>
            <span v-text="family.phone"></span>
          </el-col>
          <el-col :span="24">
            <label for="">身份证：</label>
            <span v-text="family.uuid"></span>
          </el-col>
          <el-col :span="24">
            <label for="">关系：</label>
            <span v-text="family.relationship"></span>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="12">
            <span>照片：</span>
            <!--<img :src="_$agency + family.imageUrl" alt="">-->
            <img :src="_$baseUrl + family.imageUrl" alt="">
          </el-col>
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
        breadcrumb: ['主页', '服刑人员信息管理'],//面包屑数组
        tabNum: 'first',
        pagination: {
          rows: 10,//每页显示记录条数
          page: 1//当前显示第几页
        },
        searching: {
          name: '',//服刑人员姓名
          prisonerNumber: ''//服刑人员编号
        },
        c: 'prisoners',//页面模块名称
        dialogVisible: false,//弹出框的显示和隐藏
        agreeText: '同意',
        disagreeText: '不同意',
        authorization: {
          remarks: '',//授权评语
          status: ''//授权状态
        },
        dialogTableVisible: false,
        family: {}//家属详情信息
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        prisoners: 'prisoners',
        prisonersTotal: 'prisonersTotal'//总共记录条数
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置家属注册页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getPrisoners: 'getPrisoners',//获取家属注册列表
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
        this.getPrisoners({...this.pagination, ...this.searching});
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.page = 1;
        this.searching = searching;
        this.getPrisoners({...this.pagination, ...this.searching});
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching = searching;
      },
      //显示家属详细信息
      showFamilyDetail(family){
        this.dialogTableVisible = true;
        this.family = family;
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      //获取家属注册信息列表
      this.getPrisoners(this.pagination);
    },
    components: {
      SelectAndSearch,
      Pagination
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #prisoners
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
          width: 200px
          height: 200px
</style>
