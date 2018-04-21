<template>
  <el-row class="page-edit">
    <el-col
      :span="10"
      :offset="7">
      <el-form
        :model="terminal"
        ref="terminal"
        :rules="rule"
        label-position="left"
        label-width="100px">
        <el-form-item
          label="终端号"
          prop="terminalNumber">
          <el-input
            v-model="terminal.terminalNumber"
            placeholder="请填写终端号" />
        </el-form-item>
        <el-form-item label="会议室号">
          <el-input
            v-model="terminal.roomNumber"
            placeholder="请填写会议室号" />
        </el-form-item>
        <el-form-item
          label="所属监狱"
          prop="jailId">
          <el-select
            v-model="terminal.jailId"
            filterable
            placeholder="请选择监狱"
            @change="onPrisonChange">
            <el-option
              v-for="prison in prisonAllWithBranchPrison"
              :key="prison.id"
              :label="prison.title"
              :value="prison.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="isPrisonArea"
          label="分监区"
          prop="prisonCode">
          <el-input
            v-model.number="terminal.prisonCode"
            :max="30"
            :min="1"
            :step="1"
            placeholder="请填写1~30之间的数字">
            <template slot="append">监区</template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="主持人密码"
          prop="hostPassword">
          <el-input
            v-model="terminal.hostPassword"
            placeholder="请填写主持人密码" />
        </el-form-item>
        <el-form-item
          label="参与密码"
          prop="mettingPassword">
          <el-input
            v-model="terminal.mettingPassword"
            placeholder="请填写参与密码" />
        </el-form-item>
      </el-form>
      <el-button
        class="submit"
        type="primary"
        size="small"
        @click="onSubmit">新增</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    let checkPrison = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      }
      else {
        if (value < 1 || value > 30) {
          callback(new Error('请输入1~30之间的数字'))
        }
        else {
          callback()
        }
      }
    }
    return {
      terminal: {},
      rule: {
        terminalNumber: [{ required: true, message: '请填写终端号', trigger: 'blur' }],
        jailId: [{ required: true, message: '请选择监狱' }],
        prisonCode: [{ required: true, message: '请填写分监区' }, { validator: checkPrison }],
        hostPassword: [{ required: true, message: '请填写主持人密码', trigger: 'blur' }],
        mettingPassword: [{ required: true, message: '请填写参与密码', trigger: 'blur' }]
      },
      gettingPrison: true,
      isPrisonArea: false
    }
  },
  computed: {
    ...mapState(['prisonAllWithBranchPrison'])
  },
  mounted() {
    this.getPrisonAllWithBranchPrison().then(() => {
      this.gettingPrison = false
    })
  },
  methods: {
    ...mapActions(['addTerminal', 'getPrisonAllWithBranchPrison']),
    onSubmit() {
      this.$refs.terminal.validate(valid => {
        if (valid) {
          this.addTerminal(this.terminal).then(res => {
            if (!res) return
            this.$router.push('/terminal/list')
          })
        }
      })
    },
    onPrisonChange(e) {
      let prison = this.prisonAllWithBranchPrison.find(item => item.id === e)
      if (prison.branchPrison === 1) this.isPrisonArea = true
      else {
        this.isPrisonArea = false
        delete this.terminal.prisonCode
      }
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
