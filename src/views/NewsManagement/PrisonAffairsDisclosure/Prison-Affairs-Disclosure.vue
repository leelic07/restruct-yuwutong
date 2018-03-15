<template>
  <el-row id="prison-affairs-disclosure" :gutter="0">
    <el-row :gutter="0" v-if="!isPrisonAffairsDisclosure">
      <!--添加狱务公开信息-->
      <el-col :span="24">
        <el-button size="small" type="primary" plain @click="newPrisonAffairsDisclosure()">添加狱务公开信息</el-button>
      </el-col>
      <!--选择显示页数和搜索框内容组件-->
      <select-and-search :c="c" :searching="searching" @sizeChange="sizeChange" @search="search"
                         @searchingChange="searchingChange"></select-and-search>
      <!--标签页表格-->
      <el-col :span="24">
        <el-table
          :data="news"
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
              <!--<img :src="_$agency + scope.row.imageUrl" alt="">-->
              <img src="../../../assets/images/default.jpg" alt="">
            </template>
          </el-table-column>
          <el-table-column
            label="焦点">
            <template slot-scope="scope">
              {{scope.row.isFocus?'是':'否'}}
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
      </el-col>
      <!--分页组件-->
      <pagination :total="newsTotal" :pageSize="pagination.rows" :currentPage="pagination.page"
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
        breadcrumb: ['主页', '狱务公开信息管理', '狱务公开'],//面包屑数组
        pagination: {
          rows: 10,//每页显示记录条数
          page: 1//当前显示第几页
        },
        c: 'prisonAffairsDisclosure',
        searching: {
          title: '',//新闻标题
          type: 1//狱务公开新闻类型
        },
        isPrisonAffairsDisclosure: false,//是否是商品信息列表页面
        goodsDescription: ''//商品简介信息
      }
    },
    watch: {
      //从商品管理页面跳转到商品编辑页面使商品列表显示
      $route(to) {
        if (to.path === '/news/prison_affairs_disclosure') {
          this.isPrisonAffairsDisclosure = false;
          this.breadCrumb(this.breadcrumb);//路由发生改变重新发送面包屑信息
        } else {
          this.isPrisonAffairsDisclosure = true;
        }
      }
    },
    computed: {
      //映射getters方法获取state状态
      ...mapGetters({
        news: 'news',//狱务公开信息列表
        newsTotal: 'newsTotal',//狱务公开信息记录数
        deleteNewsResult: 'deleteNewsResult'//获取删除狱务公开信息的结果
      })
    },
    methods: {
      //映射mutations方法
      ...mapMutations({
        breadCrumb: 'breadCrumb',//设置商品管理页面的面包屑信息
      }),
      //映射actions方法
      ...mapActions({
        getNews: 'getNews',//获取狱务公开信息
        deleteNewsById: 'deleteNewsById'//根据id删除狱务公开信息
      }),
      //每页条数发生变化时执行的方法
      sizeChange(rows){
        this.pagination.page = 1;
        this.pagination.rows = rows;
        this.change();
      },
      //当前页码发生变化时执行的方法
      currentChange(page){
        this.pagination.page = page;
        this.change();
      },
      //根据是否有搜索内容调用不同的接口
      change(){
        this.getNews({...this.searching, ...this.pagination});
      },
      //点击搜索时执行的方法
      search(searching){
        this.pagination.page = 1;
        this.searching = searching;
        this.getNews({...this.searching, ...this.pagination});
      },
      //监听搜索框的内容变化
      searchingChange(searching){
        this.searching = searching;
      },
      //点击删除时执行的方法
      handleDelete(id){
        this.$confirm('确定删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteNewsById(id);
        }).catch(err => console.log(err));
      },
      //点击编辑时执行的方法
      handleEdit(id){
        this.$router.push({
          path: `/news/prison_affairs_disclosure/${id}/edit`
        });
      },
      //添加狱务公开信息
      newPrisonAffairsDisclosure(){
        this.$router.push({
          path: '/news/prison_affairs_disclosure/new'
        });
      }
    },
    mounted(){
      //将面包屑数组传递给Content组件
      this.breadCrumb(this.breadcrumb);
      this.getNews({...this.searching, ...this.pagination});
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
    padding: 10px 1% 0 1%
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
    & /deep/ .el-table__row
      td
        &:nth-child(3)
          text-align: center
        &:nth-child(2)
          .cell
            img
              display: block
              margin: 0 auto
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
