<template>
  <el-row :gutter="0">
    <el-button
      size="small"
      class="button-add"
      type="primary"
      plain
      @click="newTerminal">添加终端信息</el-button>
    <m-search
      :items="searchItems"
      @sizeChange="sizeChange"
      @search="onSearch" />
    <el-col :span="24">
      <el-tabs
        value="first"
        type="card">
        <el-tab-pane
          label="终端管理"
          name="first" />
      </el-tabs>
      <el-table
        :data="terminals.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="terminalNumber"
          label="终端号" />
        <el-table-column
          prop="roomNumber"
          label="会议室号" />
        <el-table-column
          prop="jailName"
          label="所属监狱" />
        <el-table-column
          prop="hostPassword"
          label="主持人密码" />
        <el-table-column
          prop="mettingPassword"
          label="参与密码" />
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editTerminal(scope.row.id)">编辑</el-button>
            <!--<el-button type="danger" size="mini" @click="deleteTerminal(scope.row.id)">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="terminals.total"
      @onPageChange="currentChange" />
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      searchItems: {
        jailId: { type: 'select', label: '监狱名称', getting: true, belong: { value: 'id', label: 'title' } }
      }
    }
  },
  computed: {
    ...mapState(['terminals', 'prisonAll'])
  },
  mounted() {
    this.getPrisonAll().then(() => {
      this.searchItems.jailId.options = this.prisonAll
      this.searchItems.jailId.getting = false
    })
    this.getTerminals(this.pagination)
  },
  methods: {
    ...mapActions(['getTerminals', 'searchAction', 'deleteTerminalById', 'getPrisonAll']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.currentChange()
    },
    currentChange() {
      this.getTerminals({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    newTerminal() {
      this.$router.push({
        path: '/terminal/add'
      })
    },
    editTerminal(id) {
      this.$router.push({
        path: `/terminal/edit/${ id }`
      })
    },
    deleteTerminal(id) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTerminalById(id)
      })
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
