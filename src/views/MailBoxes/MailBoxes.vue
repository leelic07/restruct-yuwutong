<template>
  <el-row id="mail-boxes" :gutter="0">
    <el-row :gutter="0" v-if="!isMailBoxesInspect">
      <el-col :span="24">
        <el-button size="mini" @click="refreshMailBoxes()">刷新</el-button>
      </el-col>
      <el-col :span="24">
        <el-table
          :data="mailBoxes"
          stripe
          style="width: 100%">
          <el-table-column
            label="标题"
            width="180">
            <template slot-scope="scope">
              <el-button @click="inspectMail(scope.row)" type="text" size="small">
                {{scope.row.title}}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="contents"
            label="内容"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="发件人">
          </el-table-column>
          <el-table-column
            label="发送日期">
            <template slot-scope="scope">
              {{scope.row.createdAt | Date}}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <!--分页组件-->
      <pagination :total="mailBoxesTotal" :pageSize="pagination.rows" :currentPage="pagination.page"
                  @currentChange="currentChange"></pagination>
    </el-row>
    <!--邮件详情路由页面-->
    <router-view></router-view>
  </el-row>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination/Pagination'
export default {
  data() {
    return {
      breadcrumb: ['主页', '监狱长信箱'], // 面包屑数组
      pagination: {
        rows: 10, // 每页显示记录条数
        page: 1 // 当前显示第几页
      },
      isMailBoxesInspect: false, // 是否是查看邮箱信息页面
      type: 1
    }
  },
  watch: {
    // 从邮件详情页面跳转到邮箱列表路由使邮箱列表显示
    $route(to, from) {
      if (to.path === '/mailboxes') {
        this.isMailBoxesInspect = false
        this.breadCrumb(this.breadcrumb) // 路由发生改变重新发送面包屑信息
      }
      else {
        this.isMailBoxesInspect = true
      }
    }
  },
  computed: {
    ...mapGetters({
      mailBoxes: 'mailBoxes',
      mailBoxesTotal: 'mailBoxesTotal'
    })
  },
  methods: {
    ...mapMutations({
      breadCrumb: 'breadCrumb' // 设置家属注册页面的面包屑信息
    }),
    ...mapActions({
      getMailBoxes: 'getMailBoxes' // 获取监狱长邮箱列表信息
    }),
    // 当前页发生变化时执行的方法
    currentChange(page) {
      this.pagination.page = page
      this.getMailBoxes(this.pagination)
    },
    // 点击邮件标题时执行的方法
    inspectMail(row) {
      this.$router.push({
        path: `/mailboxes/${ row.id }`
      })
    },
    // 刷新监狱长邮箱信息
    refreshMailBoxes() {
      this.getMailBoxes(this.pagination)
    }
  },
  components: {
    Pagination
  },
  mounted() {
    this.breadCrumb(this.breadcrumb)
    this.getMailBoxes(this.pagination)
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  #mail-boxes
    padding: 20px 1% 0 1%
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-col-24 > .el-button--default
      float: right

</style>
