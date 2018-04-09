<template>
  <el-row id="families" :gutter="0">
    <m-search :items="searchItems" @sizeChange="sizeChange" @search="onSearch"></m-search>
    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="家属信息" name="first">
          <el-table
            :data="familyList"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="uuid"
              label="身份证号">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话">
            </el-table-column>
            <el-table-column
              prop="relationship"
              label="关系">
            </el-table-column>
            <el-table-column
              label="对应罪犯">
              <template slot-scope="scope">
                <!-- <el-button type="text" size="small"
                           @click="showPrisonerDetail(scope.row.prisoners)">
                  {{scope.row.prisoners.name}}
                </el-button> -->
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <!--分页组件-->
    <m-pagination ref="pagination" :total="familiesTotal" @onPageChange="currentChange"></m-pagination>
    <!--家属信息弹出框-->
    <el-dialog title="囚犯信息" :visible.sync="dialogTableVisible">
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">姓名：</label>
          <span v-text="prisoner.name"></span>
        </el-col>
        <el-col :span="12">
          <label for="">罪名：</label>
          <span v-text="prisoner.crimes"></span>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">囚号：</label>
          <span v-text="prisoner.prisonerNumber"></span>
        </el-col>
        <el-col :span="12">
          <label for="">监区：</label>
          <span v-text="prisoner.prisonArea"></span>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">性别：</label>
          <span>{{prisoner.gender | gender}}</span>
        </el-col>
      </el-row>
    </el-dialog>
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
        name: { type: 'input', label: '家属姓名' }
      },
      dialogTableVisible: false,
      prisoner: {} // 对应罪犯详情信息
    }
  },
  computed: {
    ...mapState(['familyList', 'familiesTotal']) // 总共记录条数
  },
  mounted() {
    this.getFamilies({ ...this.pagination })
  },
  methods: {
    ...mapActions(['getFamilies', 'searchAction']),
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.currentChange()
    },
    currentChange() {
      this.getFamilies({ ...this.filter, ...this.pagination })
    },
    showPrisonerDetail(prisoner) {
      this.dialogTableVisible = true
      this.prisoner = prisoner
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #families
    padding: 20px 1% 0 1%
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-dialog
      width: 45%
      .el-dialog__body
        img
          float: left
          width: 150px
          height: 150px
</style>
