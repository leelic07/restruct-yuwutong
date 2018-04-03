<template>
  <el-row id="registration" :gutter="0">
    <m-search :items="searchItems" @sizeChange="sizeChange" @search="onSearch"></m-search>
    <!--标签页表格-->
    <el-col :span="24">
      <el-tabs v-model="tabNum" type="card">
        <el-tab-pane label="家属注册" name="first">
          <el-table
            :data="registrations"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话">
            </el-table-column>
            <el-table-column
              prop="uuid"
              label="身份证">
            </el-table-column>
            <el-table-column
              label="申请时间">
              <template slot-scope="scope">
                {{scope.row.createdAt | Date}}
              </template>
            </el-table-column>
            <el-table-column
              prop="prisonerNumber"
              label="囚号">
            </el-table-column>
            <el-table-column
              prop="relationship"
              label="关系">
            </el-table-column>
            <el-table-column
              prop="status"
              label="申请状态">
              <template slot-scope="scope">
                {{scope.row.status | registrationsStatus}}
              </template>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button v-if="scope.row.status == 'PENDING'"
                           size="mini"
                           @click="handleAuthorization(scope.row.id)">授权
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <m-pagination ref="pagination" :total="registrationsTotal" @onPageChange="change"></m-pagination>
    <el-dialog class="authorize-dialog" title="授权" :visible.sync="show.authorize" width="530px">
      <div style="margin-bottom: 10px;">请核对申请人照片:</div>
      <div class="img-box">
        <img
          v-for="(img, index) in uuidImages"
          :key="index"
          src="../../assets/images/default.jpg"
          @click="amplifyImage(img)">
      </div>
      <div class="button-box" v-if="!show.agree && !show.disagree">
        <el-button plain @click="show.agree = true">同意</el-button>
        <el-button plain @click="show.disagree = true">不同意</el-button>
        <el-button type="danger" plain @click="show.authorize = false">关闭</el-button>
      </div>
      <div class="button-box" v-if="show.agree">
        <el-button plain @click="onAuthorization('PASSED')">确定申请通过？</el-button>
        <el-button plain @click="show.agree=false">返回</el-button>
        <el-button type="danger" plain @click="show.authorize = false">关闭</el-button>
      </div>
      <div class="button-box" v-if="show.disagree">
        <div style="margin-bottom: 10px;">请选择驳回原因</div>
        <el-select v-model="remarks">
          <el-option
            v-for="(remark,index) in $store.state.remarks"
            :value="remark"
            :label="remark"
            :key="index">
          </el-option>
        </el-select>
        <el-button plain @click="onAuthorization('DENIED')">提交</el-button>
        <el-button plain @click="show.disagree=false">返回</el-button>
        <el-button type="danger" plain @click="show.authorize = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog class="img-dialog" width="440px" :visible.sync="show.imgplus">
      <img src="../../assets/images/default.jpg" alt="">
    </el-dialog>
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      tabNum: 'first',
      searchItems: {
        uuid: { type: 'input', label: '身份证号' },
        prisonerNumber: { type: 'input', label: '囚犯号' },
        name: { type: 'input', label: '家属姓名' }
      },
      authorizeId: '',
      show: {
        authorize: false,
        agree: false,
        disagree: false,
        imgplus: false
      },
      remarks: '您的身份信息错误',
      imgSrc: '' // 放大查看家属注册的照片地址
    }
  },
  computed: {
    ...mapGetters(['registrations', 'uuidImages', 'registrationsTotal'])
  },
  mounted() {
    this.getRegistrations(this.pagination)
  },
  methods: {
    ...mapActions(['getRegistrations', 'getUuidImage', 'authorizeRegistrations']),
    sizeChange(rows) {
      this.$refs.pagination.handleSizeChange(rows)
      this.change()
    },
    change() {
      this.getRegistrations({ ...this.filter, ...this.pagination })
    },
    onSearch() {
      this.$refs.pagination.handleCurrentChange(1)
    },
    handleAuthorization(id) {
      this.authorizeId = id
      this.show.agree = false
      this.show.disagree = false
      this.remarks = '您的身份信息错误'
      this.show.authorize = true
      // this.getUuidImage(id)
    },
    onAuthorization(e) {
      let params = { id: this.authorizeId, status: e }
      if (e === 'DENIED') params.remarks = this.remarks
      this.authorizeRegistrations(params).then(res => {
        if (res) {
          this.show.authorize = false
          this.authorizeId = ''
          this.change()
        }
      })
    },
    // 图片放大执行的方法
    amplifyImage(imgSrc) {
      this.imgSrc = imgSrc
      this.show.imgplus = true
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  #registration
    padding: 20px 1% 0 1%
    & /deep/ .el-tabs__item
      background: white
    & /deep/ .el-table__body-wrapper
      overflow: visible
    & /deep/ .el-table__row
      > td:nth-child(7)
        color: orange
        font-weight: bold
    & /deep/ .cell .el-button--default
      float: left
      color: #3C8DBC
      font-weight: bold
</style>
