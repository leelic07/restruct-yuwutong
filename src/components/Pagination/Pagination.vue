<template>
  <el-col :span="24" id="pagination">
    <!--<el-col :span="12" :offset="12">-->
    <!--分页组件-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      prev-text="上一页"
      next-text="下一页"
      @size-change="sizeChange"
      @current-change="currentChange">
    </el-pagination>
    <!--</el-col>-->
  </el-col>
</template>

<script>
export default {
  props: {
    total: [Number],
    pageSize: [Number],
    currentPage: [Number]
  },
  data() {
    return {}
  },
  methods: {
    // 每页条数发生变化时执行的方法
    sizeChange(pageSize) {
      this.$emit('sizeChange', pageSize)
    },
    // 当前页发生变化时执行的方法
    currentChange(currentPage) {
      this.$emit('currentChange', currentPage)
    }
  }
}
</script>

<style type="text/stylus" lang="stylus">
  #pagination
    padding: 20px 0 20px 0
    & /deep/ .el-pagination
      float: right
</style>
