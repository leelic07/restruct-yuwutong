<template>
  <el-row class="row-container" :gutter="0">
    <el-col :span="24">
      <el-button size="small" type="primary" plain class="button-add" @click="onAdd">添加监狱用户</el-button>
    </el-col>
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
    this.getPrisonUsers(this.pagination)
  },
  methods: {
    ...mapActions(['getPrisonUsers']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.onChange()
    },
    onChange() {
      this.getPrisonUsers({ ...this.$refs.search.searching, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    onEdit(e) {
      this.$router.push(`/prison-user/edit/${ e }`)
    },
    onAdd() {
      this.$router.push('/prison-user/add')
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
