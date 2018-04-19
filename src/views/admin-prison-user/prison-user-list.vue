<template>
  <el-row
    class="row-container"
    :gutter="0">
    <el-button
      size="small"
      type="primary"
      plain
      class="button-add"
      @click="onAdd">添加监狱用户</el-button>
    <m-search
      :items="searchItems"
      @sizeChange="sizeChange"
      @search="onSearch" />
    <el-col :span="24">
      <el-tabs
        value="first"
        type="card">
        <el-tab-pane
          label="监狱用户"
          name="first" />
      </el-tabs>
      <el-table
        :data="prisonUsers.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="username"
          label="用户名" />
        <el-table-column
          prop="role"
          label="角色">
          <template slot-scope="scope">
            {{scope.row.role | role}}
          </template>
        </el-table-column>
        <el-table-column
          prop="jail"
          label="监狱名称" />
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="onEdit(scope.row.id)">编辑</el-button>
            <el-button type="danger" size="mini" @click="onDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="prisonUsers.total"
      @onPageChange="getDatas" />
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    let optionObj = require('@/filters/modules/switches')
    return {
      searchItems: {
        jail: { type: 'input', label: '监狱名称' },
        username: { type: 'input', label: '用户名' },
        role: { type: 'select', label: '角色', options: optionObj.default.role }
      }
    }
  },
  computed: {
    ...mapState(['prisonUsers'])
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    ...mapActions(['getPrisonUsers', 'deletePrisonUser']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.getDatas()
    },
    getDatas() {
      this.getPrisonUsers({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    onEdit(e) {
      this.$router.push(`/prison-user/edit/${ e }`)
    },
    onDelete(e) {
      this.$confirm('是否确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deletePrisonUser({ id: e }).then(() => {
          this.getDatas()
        })
      })
    },
    onAdd() {
      this.$router.push('/prison-user/add')
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
