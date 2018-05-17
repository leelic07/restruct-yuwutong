<template>
  <el-row class="page-edit">
    <el-col
      :span="10"
      :offset="7">
      <el-form
        :model="prisonUser"
        :rules="rules"
        ref="prisonUser"
        label-position="right"
        label-width="100px">
        <el-form-item
          label="监狱名称"
          prop="jailId">
          <el-select
            v-model="prisonUser.jailId"
            placeholder="请选择监狱"
            filterable
            :loading="gettingJails"
            @change="onPrisonChange">
            <el-option
              v-for="item in prisonAllWithBranchPrison"
              :key="item.id"
              :label="item.title"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="isPrisonArea"
          label="分监区"
          prop="prisonConfigId">
          <el-select
            v-model="prisonUser.prisonConfigId"
            filterable
            clearable
            :disabled="!hasPrisonArea"
            :loading="gettingPrisonArea"
            placeholder="请选择分监区">
            <el-option
              v-for="prisonArea in jailPrisonAreas"
              :key="prisonArea.id"
              :label="prisonArea.name"
              :value="prisonArea.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="狱警号"
          prop="policeNumber">
          <el-input
            v-model="prisonUser.policeNumber"
            placeholder="请填写狱警号"></el-input>
        </el-form-item>
        <el-form-item
          label="真实姓名"
          prop="realName">
          <el-input
            v-model="prisonUser.realName"
            placeholder="请填写真实姓名"></el-input>
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
              v-if="item.value !== 0"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="用户名"
          prop="username">
          <el-input
            v-model="prisonUser.username"
            placeholder="请填写用户名"></el-input>
        </el-form-item>
      </el-form>
      <el-button
        class="submit"
        type="primary"
        @click="onSubmit"
        size="small">新增</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      rules: {
        jailId: [{ required: true, message: '请选择监狱名称' }],
        policeNumber: [{ required: true, message: '请填写狱警号' }],
        realName: [{ required: true, message: '请填写真实姓名' }],
        username: [{ required: true, message: '请填写用户名' }],
        role: [{ required: true, message: '请选择角色' }]
      },
      gettingJails: true,
      gettingPrisonArea: true,
      isPrisonArea: false,
      hasPrisonArea: false,
      prisonUser: {}
    }
  },
  computed: {
    ...mapState(['prisonAllWithBranchPrison', 'jailPrisonAreas'])
  },
  mounted() {
    this.getPrisonAllWithBranchPrison().then(res => {
      this.gettingJails = false
    })
  },
  methods: {
    ...mapActions(['addPrisonUser', 'getPrisonAllWithBranchPrison', 'getJailPrisonAreas']),
    onSubmit() {
      this.$refs.prisonUser.validate(valid => {
        if (valid) {
          this.addPrisonUser(this.prisonUser).then(res => {
            if (!res) return
            this.$router.push('/prison-user/list')
          })
        }
      })
    },
    onPrisonChange(e) {
      delete this.prisonUser.prisonConfigId
      this.isPrisonArea = false
      this.gettingPrisonArea = true
      let prison = this.prisonAllWithBranchPrison.find(item => item.id === e)
      if (prison.branchPrison === 1) {
        this.isPrisonArea = true
        this.getJailPrisonAreas(e).then(res => {
          if (!res) return
          if (this.jailPrisonAreas.length === 0) {
            this.$message.warning('请先导入罪犯数据')
            this.hasPrisonArea = false
          }
          else {
            this.hasPrisonArea = true
          }
          this.gettingPrisonArea = false
        })
      }
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>

</style>
