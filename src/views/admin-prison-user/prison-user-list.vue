<template>
  <el-row class="row-container" :gutter="0">
    <select-and-search ref="search" c="prisonUser" @sizeChange="sizeChange" @search="onSearch"></select-and-search>
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="监狱用户" name="first"></el-tab-pane>
      </el-tabs>
      <el-table
        v-if="tabNum === 'first'"
        :data="prisonUsers"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="username"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色">
          <template slot-scope="scope">
            {{scope.row.role | role}}
          </template>
        </el-table-column>
        <el-table-column
          prop="jail"
          label="监狱名称">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="onEdit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination ref="pagination" :total="prisonUsersTotal" @onPageChange="onChange"></m-pagination>
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SelectAndSearch from '@/components/Select-And-Search/Select-And-Search'
export default {
  components: {
    SelectAndSearch
  },
  data() {
    return {
      tabNum: 'first'
    }
  },
  computed: {
    ...mapState({
      prisonUsers: 'prisonUsers', // 获取家属注册的注册信息列表
      prisonUsersTotal: 'prisonUsersTotal' // 获取家属注册时的总记录数
    })
  },
  mounted() {
    // 获取家属注册信息列表
    this.getPrisonUsers(this.pagination)
  },
  methods: {
    // 映射actions方法
    ...mapActions(['getPrisonUsers']),
    onEdit(e) {
      this.$router.push(`/prison-user/edit/${ e }`)
    },
    // 每页条数发生变化时执行的方法
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.onChange()
    },
    onChange() {
      this.getPrisonUsers({ ...this.$refs.search.searching, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
