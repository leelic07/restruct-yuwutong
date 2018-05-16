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
          label="实地探监"
          name="first" />
        <el-tab-pane
          label="未授权"
          name="PENDING" />
      </el-tabs>
      <el-table
        :data="visits.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名" />
        <el-table-column
          label="申请时间"
          prop="applicationDate" />
        <el-table-column
          prop="prisonerId"
          label="囚犯id" />
        <el-table-column
          prop="relationship"
          label="关系" />
        <el-table-column label="批次(窗口号)">
          <template slot-scope="scope">
            <span v-if="scope.row.window">{{ scope.row.batch }}({{ scope.row.window }}窗口)</span>
          </template>
        </el-table-column>
        <el-table-column
          class-name="orange"
          label="申请状态">
          <template slot-scope="scope">
            <span v-if="!scope.row.content">{{scope.row.status | applyStatus}}</span>
            <el-tooltip v-else :content="scope.row.content" placement="top">
              <span>{{scope.row.status | applyStatus}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.status == 'PENDING'"
              size="mini"
              @click="handleAuthorization(scope.row)">授权</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="visits.total"
      @onPageChange="getDatas" />
    <el-dialog
      :visible.sync="show.authorize"
      class="authorize-dialog"
      title="授权"
      width="530px">
      <div
        v-if="!show.agree && !show.disagree"
        class="button-box">
        <el-button
          plain
          @click="show.agree = true">同意</el-button>
        <el-button
          plain
          @click="show.disagree = true">不同意</el-button>
        <el-button
          type="danger"
          plain
          @click="show.authorize = false">关闭</el-button>
      </div>
      <div
        v-if="show.agree"
        class="button-box">
        <el-button
          plain
          @click="onAuthorization('PASSED')">确定申请通过？</el-button>
        <el-button
          plain
          @click="show.agree=false">返回</el-button>
        <el-button
          type="danger"
          plain
          @click="show.authorize = false">关闭</el-button>
      </div>
      <div
        v-if="show.disagree"
        class="button-box">
        <div style="margin-bottom: 10px;">请选择驳回原因</div>
        <el-select v-model="remarks">
          <el-option
            v-for="(remark,index) in frontRemarks"
            :value="remark"
            :label="remark"
            :key="index">
          </el-option>
        </el-select>
        <el-button
          plain
          @click="onAuthorization('DENIED')">提交</el-button>
        <el-button
          plain
          @click="show.disagree=false">返回</el-button>
        <el-button
          type="danger"
          plain
          @click="show.authorize = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible"
      class="img-idCard"
      width="382.4px">
      <img :src="imgSrc">
    </el-dialog>
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      tabs: 'first',
      searchItems: {
        prisonerNumber: { type: 'input', label: '囚号' },
        name: { type: 'input', label: '家属姓名' }
      },
      show: {
        authorize: false,
        agree: false,
        disagree: false
      },
      toAuthorize: {},
      remarks: '您的身份信息错误',
      rule: {
        remarks: [{ required: true, message: '请填写撤回理由', trigger: 'blur' }]
      },
      dialogVisible: false,
      imgSrc: ''
    }
  },
  computed: {
    ...mapState(['visits', 'frontRemarks'])
  },
  watch: {
    tabs(val) {
      if (val !== 'first') {
        this.filter.status = val
        this.getDatas()
      }
      else {
        delete this.filter.status
        this.getDatas()
      }
    }
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    ...mapActions(['getVisits', 'authorizeVisit']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.getDatas()
    },
    getDatas() {
      this.getVisits({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    handleAuthorization(e) {
      this.toAuthorize = e
      this.show.agree = false
      this.show.disagree = false
      this.show.authorize = true
    },
    onAuthorization(e) {
      let params = { id: this.toAuthorize.id, status: e }
      if (e === 'DENIED') params.remarks = this.remarks
      this.authorizeVisit(params).then(res => {
        if (!res) return
        this.getDatas()
        this.show.authorize = false
      })
    },
    amplifyImage(imgSrc) {
      this.imgSrc = `${ imgSrc }?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a`
      this.dialogVisible = true
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
.cell img
  width: 126.8px;
  cursor: pointer;
</style>
