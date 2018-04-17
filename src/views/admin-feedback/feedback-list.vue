<template>
  <el-row class="row-container" :gutter="0">
    <m-search
      :items="searchItems"
      @sizeChange="sizeChange"
      @search="onSearch" />
    <el-col :span="24">
      <el-tabs
        value="first"
        type="card">
        <el-tab-pane
          label="意见反馈"
          name="first" />
      </el-tabs>
      <el-table
        :data="feedbacks"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名" />
        <el-table-column
          prop="phone"
          label="电话" />
        <el-table-column
          prop="uuid"
          label="身份证" />
        <el-table-column
          prop="content"
          show-overflow-tooltip
          label="内容" />
        <el-table-column
          label="反馈时间">
          <template slot-scope="scope">
            {{scope.row.createdAt | Date}}
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="feedbacksTotal"
      @onPageChange="currentChange" />
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      tabNum: 'first',
      searchItems: {
        uuid: { type: 'input', label: '身份证号' },
        phone: { type: 'input', label: '手机号' },
        name: { type: 'input', label: '家属姓名' }
      }
    }
  },
  computed: {
    ...mapState(['feedbacks', 'feedbacksTotal'])
  },
  mounted() {
    this.getFeedbacks(this.pagination)
  },
  methods: {
    ...mapActions(['getFeedbacks']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.currentChange()
    },
    currentChange() {
      this.getFeedbacks({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
