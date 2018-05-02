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
        value="first"
        type="card">
        <el-tab-pane
          label="服刑人员信息"
          name="first" />
      </el-tabs>
      <el-table
        :data="prisoners.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名" />
        <el-table-column
          prop="prisonerNumber"
          label="囚号" />
        <el-table-column
          prop="crimes"
          label="罪名" />
        <el-table-column label="刑期起止">
          <template slot-scope="scope">
            <span class="separate">{{scope.row.prisonTermStartedAt | Date}}</span>
            <span class="separate">{{scope.row.prisonTermEndedAt | Date}}</span>
          </template>
        </el-table-column>
        <el-table-column label="对应家属">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              v-for="family in scope.row.families"
              :key="family.id"
              @click="showFamilyDetail(family)">{{ family.familyName }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="prisoners.total"
      @onPageChange="getDatas" />
    <el-dialog
      title="家属信息"
      :visible.sync="dialogTableVisible">
      <el-row :gutter="0">
        <el-col :span="12">
          <el-col :span="24">
            <label for="">姓名：</label>
            <span>{{ family.familyName }}</span>
          </el-col>
          <el-col :span="24">
            <label for="">关系：</label>
            <span>{{ family.relationship }}</span>
          </el-col>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12" class="img-idCard">
          <label for="">身份证正面：</label>
          <img :src="family.familyIdCardFront + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'" alt="">
        </el-col>
        <el-col :span="12" class="img-idCard">
          <label for="">身份证背面：</label>
          <img :src="family.familyIdCardBack + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'" alt="">
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="12">
          <label for="">照片：</label>
          <img class="avatar" :src="family.familyAvatarUrl + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'" alt="">
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
      searchItems: {
        prisonerNumber: { type: 'input', label: '囚号' },
        name: { type: 'input', label: '姓名' }
      },
      dialogTableVisible: false,
      family: {}
    }
  },
  computed: {
    ...mapState(['prisoners'])
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    ...mapActions(['getPrisoners']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.getDatas()
    },
    getDatas() {
      this.getPrisoners({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    showFamilyDetail(family) {
      this.family = family
      this.dialogTableVisible = true
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  .row-container
    .el-dialog__body
      img
        display: block;
      img.avatar
        width: 200px
        height: 200px
</style>
