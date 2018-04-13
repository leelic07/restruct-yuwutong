<template>
  <el-row class="page-add">
    <el-col
      :span="10"
      :offset="7">
      <el-row :gutter="0">
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
              placeholder="请选择监狱">
              <el-option
                v-for="prison in prisonAll"
                :key="prison.id"
                :label="prison.title"
                :value="prison.id"></el-option>
            </el-select>
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
      </el-row>
      <el-row :gutter="0">
        <el-col :span="24">
          <el-button
            class="submit"
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
        terminalNumber: [{ required: true, message: '请填写终端号', trigger: 'blur' }],
        jailId: [{ required: true, message: '请选择监狱' }],
        hostPassword: [{ required: true, message: '请填写主持人密码', trigger: 'blur' }],
        mettingPassword: [{ required: true, message: '请填写参与密码', trigger: 'blur' }]
      },
      gettingPrison: true
    }
  },
  computed: {
    ...mapState(['prisonAll', 'terminal'])
  },
  mounted() {
    this.getTerminalsDetail({ id: this.$route.params.id })
    this.getPrisonAll().then(() => {
      this.gettingPrison = false
    })
  },
  methods: {
    ...mapActions(['getTerminalsDetail', 'updateTerminal', 'getPrisonAll']),
    onSubmit() {
      this.$refs.terminal.validate(valid => {
        if (valid) {
          this.updateTerminal(this.terminal).then(res => {
            if (!res) return
            this.$router.push('/terminal/list')
          })
        }
      })
    }
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
</style>
