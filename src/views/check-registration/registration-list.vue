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
          label="家属注册"
          name="first" />
      </el-tabs>
      <el-table
        :data="registrations.contents"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名" />
        <el-table-column label="身份证正面">
          <template slot-scope="scope">
            <img
              v-if="scope.row.idCardFront"
              :src="scope.row.idCardFront + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'"
              @click="amplifyImage(scope.row.idCardFront, 'id')">
          </template>
        </el-table-column>
        <el-table-column label="身份证背面">
          <template slot-scope="scope">
            <img
              v-if="scope.row.idCardBack"
              :src="scope.row.idCardBack + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'"
              @click="amplifyImage(scope.row.idCardBack, 'id')">
          </template>
        </el-table-column>
        <el-table-column label="申请时间">
          <template slot-scope="scope"> {{scope.row.createdAt | Date}} </template>
        </el-table-column>
        <el-table-column
          prop="prisonerNumber"
          label="囚号" />
        <el-table-column
          prop="relationship"
          label="关系" />
        <el-table-column
          label="申请状态"
          class-name="orange">
          <template slot-scope="scope"> {{scope.row.status | applyStatus}} </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.status == 'PENDING'"
              size="mini"
              @click="handleAuthorization(scope.row)">授权
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <m-pagination
      ref="pagination"
      :total="registrations.total"
      @onPageChange="getDatas" />
    <el-dialog
      :visible.sync="show.authorize"
      class="authorize-dialog"
      title="授权"
      width="530px">
      <div style="margin-bottom: 10px;">请核对申请人照片:</div>
      <div class="img-box">
        <img
          :src="toAuthorize.idCardFront + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'"
          @click="amplifyImage(toAuthorize.idCardFront, 'id')"
          alt="身份证正面照">
        <img
          :src="toAuthorize.idCardBack + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'"
          @click="amplifyImage(toAuthorize.idCardBack, 'id')"
          alt="身份证背面照">
        <img
          :src="toAuthorize.avatarUrl + '?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a'"
          @click="amplifyImage(toAuthorize.avatarUrl)"
          alt="头像">
      </div>
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
      :visible.sync="show.imgplus"
      class="img-dialog"
      :class="{ 'img-idCard' : isIdcard }"
      :width="isIdcard ? '382.4px' : '440px'">
      <img :src="imgSrc">
    </el-dialog>
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      searchItems: {
        prisonerNumber: { type: 'input', label: '囚犯号' },
        name: { type: 'input', label: '家属姓名' }
      },
      toAuthorize: {},
      show: {
        authorize: false,
        agree: false,
        disagree: false,
        imgplus: false
      },
      remarks: '您的身份信息错误',
      imgSrc: '',
      isIdcard: false
    }
  },
  computed: {
    ...mapState(['registrations', 'frontRemarks'])
  },
  mounted() {
    this.getDatas()
  },
  methods: {
    ...mapActions(['getRegistrations', 'authorizeRegistrations']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.getDatas()
    },
    getDatas() {
      this.getRegistrations({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    handleAuthorization(e) {
      this.toAuthorize = e
      this.show.agree = false
      this.show.disagree = false
      this.remarks = '您的身份信息错误'
      this.show.authorize = true
    },
    onAuthorization(e) {
      let params = { id: this.toAuthorize.id, status: e }
      if (e === 'DENIED') params.remarks = this.remarks
      this.authorizeRegistrations(params).then(res => {
        if (res) {
          this.show.authorize = false
          this.toAuthorize = {}
          this.getDatas()
        }
      })
    },
    amplifyImage(imgSrc, isIdcard) {
      if (isIdcard) this.isIdcard = true
      else this.isIdcard = false
      this.imgSrc = `${ imgSrc }?token=523b87c4419da5f9186dbe8aa90f37a3876b95e448fe2a`
      this.show.imgplus = true
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
.cell img
  width: 126.8px;
  cursor: pointer;
</style>
