<template>
  <el-row class="row-container" :gutter="0">
      <el-button class="button-add" size="small" type="primary" plain @click="onAdd">添加狱务公开信息</el-button>
      <m-search :items="searchItems" @sizeChange="sizeChange" @search="onSearch"></m-search>
      <el-col :span="24">
        <el-table
          :data="news"
          border
          stripe
          style="width: 100%">
          <el-table-column
            prop="title"
            show-overflow-tooltip
            label="新闻标题">
          </el-table-column>
          <el-table-column label="新闻图片">
            <template slot-scope="scope">
              <img :src="_$agency + scope.row.anotherImageUrl + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'" alt="">
              <!--<img src="../../../assets/images/default.jpg" alt="">-->
            </template>
          </el-table-column>
          <el-table-column
            label="焦点">
            <template slot-scope="scope">
              {{ scope.row.isFocus ? '是' : '否' }}
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="onEdit(scope.row.id)"
                type="primary">
                编辑
              </el-button>
              <el-button
                size="mini"
                @click="onDelete(scope.row.id)"
                type="danger">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <!--分页组件-->
      <m-pagination ref="pagination" :total="newsTotal" @onPageChange="currentChange"></m-pagination>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      searchItems: {
        title: { type: 'input', label: '新闻标题' }
      }
    }
  },
  computed: {
    ...mapGetters(['news', 'newsTotal'])
  },
  mounted() {
    this.getNews({ ...this.pagination, type: 3 })
  },
  methods: {
    ...mapActions(['getNews', 'deleteNews']),
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.currentChange()
    },
    currentChange() {
      this.getNews({ ...this.filter, ...this.pagination, type: 3 })
    },
    onDelete(id) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteNews({ id: id }).then(res => {
          if (res) this.currentChange()
        })
      }).catch(() => {})
    },
    onEdit(id) {
      this.$router.push({
        path: `/prison-affairs-public/prison-affairs-public/edit/${ id }`
      })
    },
    onAdd() {
      this.$router.push({
        path: '/prison-affairs-public/prison-affairs-public/add'
      })
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #complaints-proposal
    & /deep/ .el-table__row
      td
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
