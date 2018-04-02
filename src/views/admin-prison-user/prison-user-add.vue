<template>
  <el-row class="prison-user">
    <el-col
      :span="9"
      :offset="7">
      <el-row :gutter="0"><h3>新增用户</h3></el-row>
      <el-row :gutter="0">
        <el-form
          :model="prisonUser"
          :rules="rule"
          ref="prisonUser"
          label-position="left"
          label-width="100px">
          <el-form-item
            label="监狱名称"
            prop="jailObj">
            <el-select
              v-model="prisonUser.jailObj"
              placeholder="请填写监狱名称"
              value-key="id"
              :loading="gettingJails"
              clearable>
              <el-option
                v-for="item in jails"
                :key="item.id"
                :label="item.title"
                :value="item">
              </el-option>
            </el-select>
            <!-- <el-input
              v-model="prisonUser.jailId"
              placeholder="请填写监狱名称"></el-input> -->
          </el-form-item>
          <el-form-item
            label="用户名"
            prop="username">
            <el-input
              v-model="prisonUser.username"
              placeholder="请填写用户名"></el-input>
          </el-form-item>
          <el-form-item
            label="角色"
            prop="role">
            <el-select
              v-model="prisonUser.role"
              placeholder="请选择角色"
              clearable>
              <el-option
                v-for="item in $store.state.role"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password">
            <el-input
              v-model="prisonUser.password"
              placeholder="请填写用户密码"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="24">
          <el-button
            type="primary"
            size="small"
            @click="onSubmit">新增</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      rule: {
        jailObj: [{ required: true, message: '请填写监狱名称' }],
        username: [{ required: true, message: '请填写用户名' }],
        role: [{ required: true, message: '请选择角色' }],
        password: [{ required: true, message: '请填写用户密码' }]
      },
      gettingJails: true,
      prisonUser: { jailObj: {} }
    }
  },
  watch: {},
  computed: {
    ...mapState({
      jails: state => state.jails
    })
  },
  methods: {
    ...mapActions(['editPrisonUser', 'getJails']),
    onSubmit() {
      this.$refs.prisonUser.validate(valid => {
        let prisonUser = Object.assign({}, this.prisonUser, { jail: this.prisonUser.jailObj.title, jailId: this.prisonUser.jailObj.id })
        delete prisonUser.jailObj
        this.editPrisonUser(prisonUser).then(res => {
          this.$router.push('/prison-user/list')
        })
      })
    }
  },
  mounted() {
    this.getJails().then(res => {
      this.gettingJails = false
    })
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  .prison-user
    > .el-col
      margin-bottom: 25px
      > .el-row
        &:first-child
          h3
            float: left
            margin: 0 0 35px 30%
        &:last-child
          .el-button
            float: right
</style>
