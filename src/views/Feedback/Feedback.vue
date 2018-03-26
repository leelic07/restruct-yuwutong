<template>
  <el-row class="row-container" :gutter="0">
    <select-and-search ref="search" c="feedback" @sizeChange="sizeChange" @search="onSearch"></select-and-search>
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="意见反馈" name="first"></el-tab-pane>
      </el-tabs>
      <el-table
        v-if="tabNum === 'first'"
        :data="feedbacks"
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
          prop="content"
          show-overflow-tooltip
          label="内容">
        </el-table-column>
        <el-table-column
          label="反馈时间">
          <template slot-scope="scope">
            {{scope.row.createdAt | Date}}
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination ref="pagination" :total="feedbacksTotal" @onPageChange="onChange"></m-pagination>
  </el-row>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import SelectAndSearch from '@/components/Select-And-Search/Select-And-Search'
export default {
  components: {
    SelectAndSearch
  },
  data() {
    return {
      breadcrumb: ['主页', '意见反馈列表'], // 面包屑数组
      tabNum: 'first'
    }
  },
  computed: {
    // 映射getters方法获取state状态
    ...mapGetters({
      feedbacks: 'feedbacks', // 获取家属注册的注册信息列表
      feedbacksTotal: 'feedbacksTotal' // 获取家属注册时的总记录数
    })
  },
  mounted() {
    // 将面包屑数组传递给Content组件
    this.breadCrumb(this.breadcrumb)
    // 获取家属注册信息列表
    this.getFeedbacks(this.pagination)
  },
  methods: {
    // 映射mutations方法
    ...mapMutations({
      breadCrumb: 'breadCrumb' // 设置家属注册页面的面包屑信息
    }),
    // 映射actions方法
    ...mapActions(['getFeedbacks']),
    // 每页条数发生变化时执行的方法
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.onChange()
    },
    onChange() {
      this.getFeedbacks({ ...this.$refs.search.searching, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
