<template>
  <el-row class="prison-user">
    <el-col
      :span="9"
      :offset="7">
      <el-row :gutter="0"><h3>编辑信息</h3></el-row>
      <el-row :gutter="0">
        <el-form
          :model="prisonUser"
          :rules="rule"
          ref="prisonUser"
          label-position="left"
          label-width="100px">
          <el-form-item
            label="监狱名称"
            prop="jailId">
            <el-input
              v-model="prisonUser.jailId"
              placeholder="请填写监狱名称"></el-input>
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
        </el-form>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="24">
          <el-button
            type="primary"
            size="small"
            @click="onSubmit">更新</el-button>
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
        jailId: [{ required: true, message: '请填写监狱名称' }],
        username: [{ required: true, message: '请填写用户名' }],
        role: [{ required: true, message: '请选择角色' }]
      }
    }
  },
  watch: {},
  computed: {
    ...mapState({
      prisonUser: state => state.prisonUser
    })
  },
  methods: {
    ...mapActions(['getPrisonUser', 'editPrisonUser']),
    onSubmit() {
      this.$refs.prisonUser.validate(valid => {
        console.log(this.prisonUser)
        // if (valid) this.editPrisonUser(this.prisonUser)
        // else return false
      })
    }
  },
  mounted() {
    this.getPrisonUser(this.$route.params.id)
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
