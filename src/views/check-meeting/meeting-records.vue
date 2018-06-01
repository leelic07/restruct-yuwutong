<template>
  <el-row
    class="row-container"
    :gutter="0">
    <m-search
      :items="searchItems"
      @sizeChange="sizeChange"
      @search="onSearch" />
    <el-col :span="24">
      <el-tabs
        v-model="tabs"
        type="card">
        <el-tab-pane
          label="免费会见记录"
          name="first" />
      </el-tabs>
      <el-table
        :data="freeMeetings.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名" />
        <el-table-column
          label="预约时间"
          prop="meetingTime" 
          show-overflow-tooltip/>
        <el-table-column
          prop="prisonerNumber"
          min-width="92px"
          label="囚号" />
        <el-table-column
          prop="prisonArea"
          min-width="92px"
          label="监区" />
        <el-table-column
          min-width="64px"
          label="会见时长"
          show-overflow-tooltip>
          <template slot-scope="props">
            {{props.row.duration | time}}
          </template>
        </el-table-column>
        <el-table-column
          prop="terminalNumber"
          label="终端号" />
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="freeMeetings.total"
      @onPageChange="getDatas" />
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      tabs: 'first',
      searchItems: {
        name: { type: 'input', label: '家属姓名' },
        prisonerNumber: { type: 'input', label: '囚号' }
      }
    }
  },
  computed: {
    ...mapState(['freeMeetings'])
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    ...mapActions(['getFreeMeetings', 'authorizeMeeting', 'withdrawMeeting']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.getDatas()
    },
    getDatas() {
      this.getFreeMeetings({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
.cell img
  width: 126.8px;
  cursor: pointer;
</style>
